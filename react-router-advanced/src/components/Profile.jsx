import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Nested components
const ProfileDetails = () => <h2 className="text-xl">Profile Details</h2>;
const ProfileSettings = () => <h2 className="text-xl">Profile Settings</h2>;

function Profile() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="space-x-4 mb-6">
        <Link to="details" className="text-blue-600 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
