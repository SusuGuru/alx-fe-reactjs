// src/services/github.js
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
  });
  return response.json();
};
