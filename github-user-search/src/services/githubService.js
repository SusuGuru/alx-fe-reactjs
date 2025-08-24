import axios from "axios";

// Advanced GitHub user search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build search query for GitHub Search API
    let query = "";
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    // Search users (returns limited info)
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
