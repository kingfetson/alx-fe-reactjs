import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  // ✅ State management
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    if (!username) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* ✅ Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)} // ✅ target.value
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Search
        </button>
      </form>

      {/* ✅ Conditional Rendering */}
      {loading && <p>Loading...</p>} {/* Loading message */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Looks like we cant find the user
        </p>
      )}

      {/* ✅ Display User Data */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url} // avatar_url
            alt={userData.login}      // login
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{userData.name ? userData.name : userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
