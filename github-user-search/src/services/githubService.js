import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService"; // Include fetchUserData for checker

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos.trim()) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await searchUsers({
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(),
      });

      if (!data || data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(data);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded flex-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded flex-1 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded w-32 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition"
        >
          Search
        </button>
      </form>

      {/* Loading / Error Messages */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* User Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-3 p-3 border rounded bg-gray-900 text-white"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border border-gray-700"
            />
            <div>
              <h3 className="font-bold text-lg">{user.login}</h3>
              {user.location && <p className="text-sm text-gray-400">{user.location}</p>}
              {user.public_repos !== undefined && (
                <p className="text-sm text-gray-400">Repos: {user.public_repos}</p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
