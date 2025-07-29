import React, { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  // State
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle Search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await advancedUserSearch(username, location, minRepos);
      setResults(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">GitHub Advanced User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading / Error Messages */}
      {loading && <p className="text-gray-600 mt-4">Loading...</p>}
      {error && (
        <p className="text-red-500 mt-4">
          Looks like we can't find users matching your criteria.
        </p>
      )}

      {/* Results */}
      <div className="w-full max-w-2xl mt-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-50 p-4 mb-3 rounded shadow hover:bg-gray-100"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
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
