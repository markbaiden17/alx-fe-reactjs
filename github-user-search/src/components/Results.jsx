import { useLocation, Link } from "react-router-dom";

const Results = () => {
  const { state } = useLocation();
  const users = state?.users || [];

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">
          Showing {users.length} GitHub Users
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
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

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded font-bold"
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default Results;
