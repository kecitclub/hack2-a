"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/radio";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const router = useRouter();

  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);
  const validatePassword = (password: string) => password.length >= 6;

  const handleRegister = async () => {
    setError("");
    setSuccess("");

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, phone, password, sex }),
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
    <div className="flex items-center justify-center min-h-screen text-left">
      <div className=" w-[350px] p-10 bg-white rounded-lg flex flex-col gap-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <Input
          label="Name"
          labelPlacement="outside"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Textarea
          label="Introduction"
          labelPlacement="outside"
          placeholder="Tell us about yourself"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div>
          <label className="block text-left text-gray-700 mb-2">Sex</label>
          <RadioGroup
            className="text-md text-black accent-[#f63e3e]"
            orientation="horizontal"
            color="danger"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <Radio className="accent-[#f63e3e]" value="male">
              Male
            </Radio>
            <Radio className="accent-[#f63e3e]" value="female">
              Female
            </Radio>
            <Radio className="accent-[#f63e3e]" value="others">
              Other
            </Radio>
          </RadioGroup>
        </div>

        <Input
          label="Phone"
          labelPlacement="outside"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          label="Password"
          labelPlacement="outside"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full px-4 py-2 text-white bg-[#f63e3e] hover:bg-[#fc4949] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
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
