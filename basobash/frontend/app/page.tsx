"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import logoColored from "@/public/assets/images/logo-colored.svg";
import houseSearch from "@/public/assets/images/undraw_house-searching_g2b8.svg";
import waves from "@/public/assets/images/design/wave.svg";

import { siteConfig } from "@/config/site";

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center  md:py-10 overflow-hidden w-full">
      <div className="flex flex-wrap gap-x-[120px] gap-y-[50px] justify-center mt-[150px] md:mt-0">
        <div className="flex flex-col  text-center justify-center items-center z-10">
          <div className="flex gap-1 items-end">
            <Image
              src={logoColored}
              alt="Logo"
              width={50}
              className="md:w-[50px] w-[30px]"
            />
            <span className="text-3xl md:text-5xl text-[#f63e3f] font-bold -mb-[4px]">
              asobas
            </span>
          </div>
          <br />
          <div className={` tracking-tight text-md md:text-lg mt-2`}>
            Find your place. Find your people
          </div>
          <div className="flex gap-2 z-10 mt-5">
            <button
              className={`px-6 py-2 rounded-full bg-[#f63e3f] text-white font-semibold`}
              onClick={() => handleButtonClick(siteConfig.links.find)}
            >
              Find a place
            </button>
            <button
              className={`px-6 py-2 rounded-full border-2 border-[#f63e3f] text-black font-semibold`}
              onClick={() => handleButtonClick(siteConfig.links.list)}
            >
              List a place
            </button>
          </div>
        </div>

        <Image
          src={houseSearch}
          alt="House Search"
          width={400}
          className="select-none w-[70%] md:w-[50%]"
        />
      </div>
      <Image
        className="absolute bottom-0 md:-bottom-[100px] scale-110 w-full  select-none"
        src={waves}
        alt="Decorative waves"
        width={1920}
      />
    </section>
  );
};

export default Home;
