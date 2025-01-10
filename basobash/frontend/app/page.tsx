"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import Image from "next/image";  // Import the Image component
import waves from "@/assets/waves.png";  // Define the waves image path (you need to adjust the path accordingly)

const Home = () => {
  const [isClient, setIsClient] = useState(false); // Client-side flag
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set the flag to true after component mounts
  }, []);

  const checkAuthToken = (link: string) => {
    const token = localStorage.getItem("token"); // Or get token from cookies
    if (!token) {
      // If no token, redirect to login page
      router.push("/login");
    } else {
      try {
        // Check if token is valid by sending a request to your backend to verify the token
        fetch("/api/auth/verify-token", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
          .then(response => {
            if (response.ok) {
              // If the token is valid, redirect to the link
              router.push(link);
            } else {
              router.push("/login"); // Redirect if the token is invalid or expired
            }
          })
          .catch(() => {
            router.push("/login"); // Redirect in case of error (e.g., token expired)
          });
      } catch (error) {
        router.push("/login");
      }
    }
  };

  const handleButtonClick = (link: string) => {
    checkAuthToken(link); // Check the token before navigating
  };

  if (!isClient) return null; // Avoid rendering the component until after mounting

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className="text-4xl text-violet-500">Basobas&nbsp;</span>
        <div className="mt-4 text-lg text-gray-600">
          adipisicing elit. Accusamus ratione inventore dolore
        </div>

        <div className="flex gap-2">
          <Link
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
              size: "md",
            })}
            onClick={() => handleButtonClick(siteConfig.links.find)} // Ensure links are properly defined
          >
            Find
          </Link>
          <Link
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
              size: "md",
            })}
            onClick={() => handleButtonClick(siteConfig.links.list)} // Ensure links are properly defined
          >
            List
          </Link>
        </div>
      </div>
      <Image
        className="absolute -bottom-[100px] scale-110 w-screen"
        src={waves}
        alt="Decorative waves"
        width={1920}
        height={500}  // Define height for the Image component (or another value based on your needs)
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default Home;
