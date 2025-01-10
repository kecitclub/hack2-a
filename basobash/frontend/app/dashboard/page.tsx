"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);
  const [message, setMessage] = useState<string>("Loading...");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if no token found
    } else {
      // Fetch user data from the backend API
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`, // Send the token in the request header
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();
          setUserData(data); // Set the user data from the response
          setMessage(`Welcome, ${data.name}!`); // Show a personalized welcome message
        } catch (error) {
          console.error("Error fetching user data:", error);
          setMessage("Error loading profile data.");
        }
      };

      fetchUserData();
    }
  }, [router]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      {userData && (
        <div>
            <br></br>
          <h3>Profile Details:</h3>
          <p><Image src="/profile.jpg" alt="profile"></Image></p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Sex:</strong> {userData.sex}</p>
          <p><strong>Description:</strong> {userData.description}</p>
          {/* Add more profile information as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
