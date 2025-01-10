import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import houseSearch from "@/public/assets/images/undraw_house-searching_g2b8(1).svg";
import houseMarker from "@/public/assets/images/undraw_best-place_dhzp(1).svg";

import { siteConfig } from "@/config/site";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={`${title()} text-[#f63e3e]`}>Basobas&nbsp;</span>
        <br />
        {/* <span className={title()}>Lorem ipsum dolor sit </span> */}
        <div className={` tracking-tight text-md mt-2`}>
          Find your place. Find your people
        </div>
      </div>

      <div className="flex gap-2">
        <Link
          className={`${buttonStyles({
            radius: "full",
            variant: "shadow",
            size: "md",
          })} bg-[#f63e3e] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
          href={siteConfig.links.find}
        >
          Find
        </Link>
        <Link
          className={`${buttonStyles({
            radius: "full",
            variant: "light",
            size: "md",
          })} `}
          href={siteConfig.links.list}
        >
          List
        </Link>
      </div>
      <Image
        src={houseSearch}
        alt="House Search"
        className="absolute right-[50px] bottom-[50px]"
        width={500}
      />
      <Image
        src={houseMarker}
        alt="House Search"
        className="absolute left-[50px] bottom-[50px]"
        width={500}
      />
    </section>
  );
}
