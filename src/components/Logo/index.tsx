import { LogoWrapper } from "./styles";
import { montserrat } from "@/lib/fonts";
import Shorts from "@/icons/Shorts";
import Link from "next/link";

function Logo({ href }: { href: string }) {
  return (
    <LogoWrapper>
      <Link href={href}>
        <span className={montserrat.className}>BRITS</span>
        <Shorts />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
