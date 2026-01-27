import axios from "axios";

// Get API key from environment variables
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    
    const headers = {};
    if (API_KEY) {
        headers.Authorization = `Bearer ${API_KEY}`;
    }

    const response = await axios.get(url, { headers });
    return response.data;
};