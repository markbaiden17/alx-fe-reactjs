import axios from "axios";

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location, minRepos, page = 1) => {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?${query}&page=${page}&per_page=10`;
    const headers = API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {};
    const response = await axios.get(url, { headers });
    return response.data;
};