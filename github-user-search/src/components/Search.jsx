import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '8px', width: '250px' }}
                />
                <button type="submit" style={{ padding: '8px 15px', marginLeft: '10px' }}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Sorry, the user was not found.</p>}

            {userData && (
                <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                    <img src={userData.avatar_url} alt={userData.name} style={{ width: '100px', borderRadius: '50%' }} />
                    <h2>{userData.name || userData.login}</h2>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">View Profile</a>
                </div>
            )}    
        </div>
    );
};

export default Search;