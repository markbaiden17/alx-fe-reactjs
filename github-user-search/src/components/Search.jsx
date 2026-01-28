import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data.items);
      if (data.items.length === 0) setError(true);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full transition-all duration-500">
      <header className="text-center mt-12 mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          GitHub User Search
        </h1>
        <p className="text-gray-600">
          Discover developers across the globe by location, repositories, and more.
        </p>
      </header>

      <form
        onSubmit={handleSearch}
        className="flex flex-wrap gap-4 justify-center items-center w-full"
      >
        <input
          className="border p-2 rounded w-full md:w-64"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-2 rounded font-bold hover:bg-black transition"
        >
          Search
        </button>
      </form>

      <div className="w-full flex justify-center min-h-[40px]">
        {loading && (
          <p className="text-center text-slate-600 mt-6 font-medium">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-6 font-medium">
            Looks like we cant find the user
          </p>
        )}
      </div>

      {userData.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {userData.slice(0, 3).map((user) => (
              <div
                key={user.id}
                className="bg-white border-t-4 border-blue-500 rounded-lg shadow-sm p-6"
              >
                <img
                  src={user.avatar_url}
                  className="w-20 h-20 rounded-full mx-auto"
                  alt={user.login}
                />
                <h3 className="text-center font-bold text-lg mt-3">
                  {user.login}
                </h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-gray-800 text-white py-2 rounded-md mt-4"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>

          {userData.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() =>
                  navigate("/results", { state: { users: userData } })
                }
                className="bg-gray-900 text-white px-8 py-3 rounded font-bold hover:bg-black transition"
              >
                View More Results
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;