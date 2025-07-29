import axios from "axios";

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com";

// ✅ Fetch single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ✅ Advanced user search
export const advancedUserSearch = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${API_URL}/search/users?q=${query.trim()}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
