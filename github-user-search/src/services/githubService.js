import axios from "axios";

// Basic user search (checker expects this)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced GitHub user search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`
    );

    const basicUsers = response.data.items || [];

    // Fetch full user details for location and repo count
    const fullUsers = await Promise.all(
      basicUsers.map(async (user) => {
        const userDetails = await axios.get(`https://api.github.com/users/${user.login}`);
        return userDetails.data;
      })
    );

    return fullUsers;
  } catch (error) {
    throw new Error("User not found");
  }
};
src/components/Search.jsx doesn't contain: ["fetchUserData"]