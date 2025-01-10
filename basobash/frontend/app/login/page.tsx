"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";

const Login = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    if (!phone || !password) {
      setError("Phone number and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      const rawText = await response.text();
      console.log("Raw response:", rawText);

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (e) {
        console.error("Error parsing response as JSON:", e);
        setError("Failed to parse server response");
        return;
      }

      if (response.ok && data.token) {
        alert("Login successful");
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError(data.error || "Invalid phone number or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full w-[350px]  p-10 bg-white rounded-lg space-y-5 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <Input
          label="Phone Number"
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {<p className="mb-4 text-sm text-left text-red-500 px-3">{error}</p>}
        <p className="text-sm text-center text-gray-600 my-5">
          Don&apos;t have an account?&nbsp;
          <button
            onClick={() => router.push("/register")}
            className="text-[#f63e3e] cursor-pointer hover:underline"
          >
            Register
          </button>
        </p>
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-[#f63e3e] hover:bg-[#fc4949] rounded-full  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
