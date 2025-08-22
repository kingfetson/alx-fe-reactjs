import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px", // adds spacing between links
            padding: "70px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected Profile Route with Nested Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
