import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8">
        <input 
          className="border p-2 rounded"
          type="text" placeholder="Username" 
          value={username} onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          className="border p-2 rounded"
          type="text" placeholder="Location" 
          value={location} onChange={(e) => setLocation(e.target.value)} 
        />
        <input 
          className="border p-2 rounded"
          type="number" placeholder="Min Repos" 
          value={minRepos} onChange={(e) => setMinRepos(e.target.value)} 
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm hover:shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-center font-bold mt-2 text-blue-600">{user.login}</h3>
            <p className="text-center text-sm">{user.location || "N/A"}</p>
            <div className="text-center mt-2">
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-xs underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;