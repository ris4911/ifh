import Image from "next/image";
import {
  topLeftHeaderLink,
  topRightHeaderLink,
  popularCourses,
  quickLinks,
  socialIcons,
  footerLinks,
} from "@/utils/mockData";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-7 pb-8">
      <div className="container flex flex-col md:flex-row md:justify-between gap-10">
        <div className="md:w-1/3 lg:w-1/5">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/ifh-logo.png"
              alt="Brand Logo"
              className=""
              height={80}
              width={240}
            />
          </div>
          <p className="pt-7 text-sm">
            Institute for Humanities is an online platform to impart quality
            lectures in humanities for undergraduate and high school courses.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          <div className="column-1">
            <h3 className="text-lg font-semibold pb-5">Company</h3>
            <ul className="flex flex-col gap-y-6">
              {[...topLeftHeaderLink, ...topRightHeaderLink].map(
                (link, index) => (
                  <li
                    key={`${link?.name} - ${index}`}
                    className="cursor-pointer"
                  >
                    <Link href={link?.name}>{link?.name}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="column-2">
            <h3 className="text-lg font-semibold pb-5">Popular Courses</h3>
            <ul className="flex flex-col gap-y-6">
              {popularCourses.map((course, index) => (
                <li
                  key={`${course?.name} - ${index}`}
                  className="cursor-pointer"
                >
                  <Link href={course?.href}>{course?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="column-3">
            <h3 className="text-lg font-semibold pb-5">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-6">
              {quickLinks.map((link, index) => (
                <li key={`${link?.name} - ${index}`} className="cursor-pointer">
                  <Link href={link?.href}>{link?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#5E5E5E] mt-16 pt-5 text-sm">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p>Institute for Humanities © 2024 All Rights Reserved</p>
          <div className="mt-2 md:mt-0">
            {footerLinks?.map((link, index) => (
              <div key={`footer-${link?.name}`}>
                <Link href={link?.href}>{link?.name}</Link>
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </div>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            {socialIcons.map((social, index) => (
              <Link key={`${social?.name} - ${index}`} href={social?.href}>
                <Image
                  height={26}
                  width={26}
                  src={social?.icons}
                  alt="Social Media Icon"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
