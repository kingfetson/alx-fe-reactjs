import React, { useState } from "react";
import { fetchUserData, advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);
    setUserData(null);

    try {
      // ✅ If only username is provided, use fetchUserData
      if (username && !location && !minRepos) {
        const data = await fetchUserData(username);
        setUserData(data);
      } else {
        // ✅ Advanced search
        const data = await advancedUserSearch(username, location, minRepos);
        setResults(data.items || []);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>

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

      {loading && <p className="text-gray-600 mt-4">Loading...</p>}
      {error && (
        <p className="text-red-500 mt-4">
          Looks like we cant find the user
        </p>
      )}

      {/* ✅ Single User Result */}
      {userData && (
        <div className="bg-gray-50 p-4 mt-6 rounded shadow w-full max-w-md text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">{userData.login}</h3>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}

      {/* ✅ Multiple Users (Advanced Search Results) */}
      {results.length > 0 && (
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
      )}
    </div>
  );
};

export default Search;
