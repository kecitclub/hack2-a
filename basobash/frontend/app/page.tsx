"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
<<<<<<< HEAD
import Image from "next/image";

import logoColored from "@/public/assets/images/logo-colored.svg";
import roommatesChilling from "@/public/assets/images/undraw_chilling_o2zv.svg";
import waves from "@/public/assets/images/design/wave.svg";

import { siteConfig } from "@/config/site";

import { title } from "@/components/primitives";
=======
import { siteConfig } from "@/config/site";
>>>>>>> 67508ded2cd20e758b8d7972ca5be03bf3d7bb9c

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
<<<<<<< HEAD
    <section className="relative h-screen flex items-start justify-center  md:py-10 overflow-hidden">
      <div className="flex gap-[120px] pt-[200px]">
        <div className="flex flex-col max-w-xl text-center justify-center items-center z-10">
          <div className="flex gap-1 items-end">
            <Image src={logoColored} alt="Logo" width={50} />
            <span className="text-5xl text-[#f63e3e] font-semibold">
              asobas
            </span>
          </div>
          <br />
          <div className={` tracking-tight text-lg mt-2`}>
            Find your place. Find your people
          </div>
          <div className="flex gap-2 z-10 mt-5">
            <Link
              className={`${buttonStyles({
                radius: "full",
                variant: "shadow",
                size: "md",
              })} bg-[#f63e3e] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-semibold`}
              href={siteConfig.links.find}
            >
              Find
            </Link>
            <Link
              className={`${buttonStyles({
                radius: "full",
                variant: "bordered",
                size: "md",
              })} border-[#f63e3e] text-[#f63e3e]  font-semibold`}
              href={siteConfig.links.list}
            >
              List
            </Link>
          </div>
=======
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className="text-4xl text-violet-500">Basobas&nbsp;</span>
        <div className="mt-4 text-lg text-gray-600">
          adipisicing elit. Accusamus ratione inventore dolore
>>>>>>> 67508ded2cd20e758b8d7972ca5be03bf3d7bb9c
        </div>

<<<<<<< HEAD
        <Image src={roommatesChilling} alt="House Search" width={500} />
=======
      <div className="flex gap-2">
        <Link
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
            size: "md",
          })}
          onClick={() => handleButtonClick(siteConfig.links.find)}
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
          onClick={() => handleButtonClick(siteConfig.links.list)}
        >
          List
        </Link>
>>>>>>> 67508ded2cd20e758b8d7972ca5be03bf3d7bb9c
      </div>
      <Image
        className="absolute -bottom-[100px] scale-110 w-screen"
        src={waves}
        alt="Decorative waves"
        width={1920}
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default Home;
