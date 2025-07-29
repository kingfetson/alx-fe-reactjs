import axios from "axios";

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const getUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`, {
      headers: {
        Authorization: API_KEY ? `token ${API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
