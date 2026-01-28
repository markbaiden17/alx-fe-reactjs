import axios from "axios";

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location, minRepos) => {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${query}`;
    const headers = API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {};
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};