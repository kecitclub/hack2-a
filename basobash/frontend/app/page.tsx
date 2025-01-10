"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import logoColored from "@/public/assets/images/logo-colored.svg";
import roommatesChilling from "@/public/assets/images/undraw_chilling_o2zv.svg";
import waves from "@/public/assets/images/design/wave.svg";

import { siteConfig } from "@/config/site";

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure component renders only after mounting
  }, []);

  const checkAuthToken = async (link: string) => {
    const token = localStorage.getItem("token"); // Get token (or use cookies if applicable)
    if (!token) {
      router.push("/login"); // Redirect to login if no token is found
      return;
    }

    try {
      const response = await fetch("/api/auth/verify-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        router.push(link); // Redirect if token is valid
      } else {
        router.push("/login"); // Redirect if token is invalid or expired
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      router.push("/login"); // Handle errors gracefully by redirecting
    }
  };

  const handleButtonClick = (link: string) => {
    checkAuthToken(link); // Check authentication before navigating
  };

  if (!isClient) return null; // Prevent rendering during SSR

  return (
    <section className="relative h-screen flex items-center justify-center  md:py-10 overflow-hidden">
      <div className="flex flex-wrap gap-[120px] justify-center">
        <div className="flex flex-col max-w-xl text-center justify-center items-center z-10">
          <div className="flex gap-1 items-end">
            <Image
              src={logoColored}
              alt="Logo"
              width={50}
              className="md:w-[50px] w-[30px]"
            />
            <span className="text-3xl md:text-5xl text-[#f63e3e] font-semibold">
              asobas
            </span>
          </div>
          <br />
          <div className={` tracking-tight text-md md:text-lg mt-2`}>
            Find your place. Find your people
          </div>
          <div className="flex gap-2 z-10 mt-5">
            <button
              className={`${buttonStyles({
                radius: "full",
                variant: "shadow",
                size: "md",
              })} bg-[#f63e3e] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-semibold`}
              onClick={() => handleButtonClick(siteConfig.links.find)}
            >
              Find
            </button>
            <button
              className={`${buttonStyles({
                radius: "full",
                variant: "bordered",
                size: "md",
              })} border-[#f63e3e] text-[#f63e3e] font-semibold`}
              onClick={() => handleButtonClick(siteConfig.links.list)}
            >
              List
            </button>
          </div>
        </div>

        <Image
          src={roommatesChilling}
          alt="House Search"
          width={500}
          className="select-none"
        />
      </div>
      <Image
        className="absolute -bottom-[100px] scale-110 w-screen select-none"
        src={waves}
        alt="Decorative waves"
        width={3840}
        height={100}
        style={{ objectFit: "cover", width: "100vw", height: "auto" }}
      />
    </section>
  );
};

export default Home;
