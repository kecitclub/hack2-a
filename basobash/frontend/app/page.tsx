import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import logoColored from "@/public/assets/images/logo-colored.svg";
import roommatesChilling from "@/public/assets/images/undraw_chilling_o2zv.svg";
import waves from "@/public/assets/images/design/wave.svg";

import { siteConfig } from "@/config/site";

import { title } from "@/components/primitives";

export default function Home() {
  return (
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
        </div>

        <Image src={roommatesChilling} alt="House Search" width={500} />
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
}
