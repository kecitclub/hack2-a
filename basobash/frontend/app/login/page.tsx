"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account? 
                        <span
                            onClick={() => router.push("/register")}
                            className="text-blue-500 cursor-pointer hover:underline"
                        >
                            Register
                        </span>
                </p>
                <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;