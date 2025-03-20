import TopHeader from "@/components/TopHeader";
import Link from "next/link";
import { navLinks } from "@/utils/mockData";

const Header = () => {
  return (
    <>
      <TopHeader />
      <nav className="py-[10px] bg-[#4971B2]">
        <ul className="flex items-center text-white justify-evenly">
          {navLinks.map((link, index) => (
            <li key={`${link.name} - ${index}`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
