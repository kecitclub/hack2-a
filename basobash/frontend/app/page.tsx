import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Basobas&nbsp;</span>
        <br />
        {/* <span className={title()}>Lorem ipsum dolor sit </span> */}
        <div className={subtitle({ class: "mt-4" })}>
          adipisicing elit. Accusamus ratione inventore dolore
        </div>
      </div>

      <div className="flex gap-2">
        <Link
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "shadow",
            size: "md",
          })}
          href={siteConfig.links.find}
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
          href={siteConfig.links.list}
        >
          List
        </Link>
      </div>
    </section>
  );
}
