import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-purple-600">Profile Page</h1>
      <p className="mt-4 text-gray-700">
        Manage your account details, preferences, and settings here.
      </p>
      <nav className="mt-4">
        <Link to="details" className="mr-4 text-blue-500">Profile Details</Link>
        <Link to="settings" className="text-blue-500">Profile Settings</Link>
      </nav>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default Profile;
