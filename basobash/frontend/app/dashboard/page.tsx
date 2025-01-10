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
      router.push("/login");
    } else {
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();
          setUserData(data);
          setMessage(`Welcome, ${data.name}!`);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setMessage("Error loading profile data.");
        }
      };

      fetchUserData();
    }
  }, [router]);

  const listings = userData?.listings || [
    {
      address: "Kathmandu, Nepal",
      coordinate: "27.7172, 85.3240",
      rent: "Rs. 15000",
      bedrooms: 2,
      kitchens: 1,
      bathroom: 1
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Dashboard</h1>
      </header>
      <main style={styles.mainContent}>
        <p style={styles.message}>{message}</p>
        {userData && (
          <div style={styles.profileContainer}>
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
            <h2 style={styles.sectionTitle}>Listings</h2>
            <div style={styles.listingsContainer}>
            <Image src="/room.jpg" width={700} height={300} alt="room"></Image>

              {listings.map((listing:any, index:any) => (
                <div style={styles.listingCard} key={index}>
                  <h3><b><u>Listing {index + 1}</u></b></h3>
                  <p><strong>Address:</strong> {listing.address}</p>
                  <p><strong>Coordinate:</strong> {listing.coordinate}</p>
                  <p><strong>Rent:</strong> {listing.rent}</p>
                  <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
                  <p><strong>Kitchens:</strong> {listing.kitchens}</p>
                  <p><strong>Bathrooms:</strong> {listing.bathroom}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  headerText: {
    color: "#fff",
    fontSize: "28px",
    margin: 0,
  },
  mainContent: {
    padding: "20px",
  },
  message: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
    textAlign: "center",
  },
  profileContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    textAlign: "center",
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "15px",
  },
  profileDetails: {
    textAlign: "left",
  },
  sectionTitle: {
    textAlign: "center",
    color: "#333",
    fontSize: "22px",
    margin: "20px 0",
  },
  listingsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  listingCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Dashboard;
