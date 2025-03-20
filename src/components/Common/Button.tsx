import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  title: string;
  href: string;
  type: "primary" | "secondary"; // Define button types
}

const Button = ({
  href = "",
  title = "View details",
  type = "primary",
}: ButtonProps) => {
  const buttonStyles = {
    primary:
      "text-[#DD5D59] border-[#DD5D59] bg-transparent hover:bg-[#DD5D59] hover:text-white",
    secondary: "",
  };
  return (
    <Link
      className={`flex justify-center text-lg items-center border transition px-8 py-[11px] rounded-50 ${buttonStyles[type]}`}
      href={href}
    >
      {title}{" "}
      <Image
        src="/assets/icons/right-arrow.svg"
        alt={title}
        height={24}
        width={25}
      />
    </Link>
  );
};

export default Button;
