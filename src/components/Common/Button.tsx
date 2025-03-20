import Link from "next/link";
import Image from "next/image";

const Button = ({
  href = "",
  text = "View details",
  textSize = "text-lg",
  iconSrc = "/assets/icons/right-arrow.svg",
  iconAlt = "View details",
  buttonTextColor = "DD5D59",
  buttonBgColor = "transparent",
  borderColor = "DD5D59",
  hoverTextColor = "black",
  rounded = "50",
  paddingY = "py-[11px]",
  paddingX = "px-8",
  additionalClasses = "",
}) => {
  return (
    <Link
      className={`flex items-center justify-center border border-${borderColor} text-${textSize} text-${buttonTextColor} hover:text-${hoverTextColor} hover:border-${borderColor} transition ${paddingY} ${paddingX} rounded-${rounded} ${additionalClasses} ${buttonBgColor}`}
      href={href}
    >
      {text} <Image src={iconSrc} alt={iconAlt} height={24} width={25} />
    </Link>
  );
};

export default Button;
