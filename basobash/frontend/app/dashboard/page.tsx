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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Dashboard</h1>
      </header>
      <main style={styles.mainContent}>
        <p style={styles.message}>{message}</p>
        {userData && (
          <div style={styles.profileCard}>
            <Image
              src="/profile.jpg"
              alt="profile"
              width={150}
              height={150}
              style={styles.profileImage}
            />
            <div style={styles.profileDetails}>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Phone:</strong> {userData.phone}</p>
              <p><strong>Sex:</strong> {userData.sex}</p>
              <p><strong>Description:</strong> {userData.description}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#f63e3e",
    padding: "20px",
    textAlign: "center",
  },
  headerText: {
    color: "#fff",
    margin: 0,
    fontSize: "24px",
  },
  mainContent: {
    padding: "20px",
    textAlign: "center",
  },
  message: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  profileCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "10px",
  },
  profileDetails: {
    textAlign: "left",
  },
};

export default Dashboard;