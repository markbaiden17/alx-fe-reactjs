import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUsers([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data.items || []);
            if (data.items.length === 0) setError(true);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md flex flex-wrap gap-4 justify-center">
                <input
                    type="text" placeholder="Username" 
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded w-full md:w-auto"
                />
                <input 
                    type="text" placeholder="Location" 
                    value={location} onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded w-full md:w-auto"
                />
                <input 
                    type="number" placeholder="Min Repos" 
                    value={minRepos} onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded w-full md:w-auto"
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Search</button>
            </form>

            {loading && <p className="text-center mt-4">Loading...</p>}
            {error && <p className="text-red-500 text-center mt-4">Looks like we cant find the user</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {users.map((user) => (
                    <div key={user.id} className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
                        <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
                        <h2 className="text-xl font-bold text-center mt-2">{user.login}</h2>
                        <p className="text-center text-gray-600">{user.location || "Location hidden"}</p>
                        <div className="text-center mt-4">
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 font-semibold">
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