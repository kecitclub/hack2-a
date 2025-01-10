"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const router = useRouter();

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/; 
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; // Ensure password is at least 6 characters
  };

  const handleRegister = async () => {
    setError("");
    setSuccess("");
  
    // Validate inputs
    if (!name || !description || !phone || !password || !sex) {
      setError("All fields are required");
      return;
    }
    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          phone,
          password,
          sex,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess("Registration successful. Redirecting to login...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Introduction</label>
          <textarea
            placeholder="Tell us about yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Photo</label>
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Sex</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select your sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? 
          <span
            onClick={() => router.push("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;