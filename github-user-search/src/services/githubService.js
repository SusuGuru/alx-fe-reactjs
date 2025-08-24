import axios from "axios";

// Fetch GitHub user data based on username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns the user object
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Something went wrong. Please try again.");
  }
};
