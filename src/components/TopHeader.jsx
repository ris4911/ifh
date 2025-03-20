import Image from "next/image";
import Link from "next/link";

import { topRightHeaderLink, topLeftHeaderLink } from "@/utils/mockData";

const TopHeader = () => {
  return (
    <header className="container py-3">
      <div className="flex justify-between items-center">
        <div className="left-side-top-header flex gap-x-14">
          {topLeftHeaderLink?.map((link, index) => (
            <Link key={`link-${link.name} - ${index}`} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="logo-wrapper">
          <Image
            src="/assets/images/ifh-logo.png"
            alt="Website logo"
            width={240}
            height={80}
          />
        </div>
        <div className="right-side-top-header flex gap-x-14">
          {topRightHeaderLink?.map((link, index) => (
            <Link key={`link-${link.name} - ${index}`} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
