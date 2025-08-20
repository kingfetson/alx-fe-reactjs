import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", formData);
      // Reset form
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>
        <br />
      <div className="mb-3">
        <label className="block">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>
       <br />
      <div className="mb-3">
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <br />
      <div className="mb-3">
        <label className="block">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <br />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
