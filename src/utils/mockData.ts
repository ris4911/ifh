// Mock Data comes here...(Static Data if required)

import { Course, NavLinks } from "./types";

export const navLinks: NavLinks[] = [
    { name: "All courses", href: "#" },
    { name: "Research wing", href: "#" },
    { name: "Certificate courses", href: "#" },
    { name: "Competitions", href: "#" },
    { name: "Publications", href: "#" },
    { name: "PSE", href: "#" },
    { name: "Master MCQ’s", href: "#" },
    { name: "Downloads", href: "#" },
];

export const topLeftHeaderLink: NavLinks[] = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Faculty", href: "#" },
]
export const topRightHeaderLink: NavLinks[] = [
    { name: "Contact us", href: "#" },
    { name: "Login/Register", href: "#" },
]

export const popularCourses: NavLinks[] = [
    { name: "NET-JRF (Political Science) Course", href: "#" },
    { name: "CUET PG (Political Science) Course", href: "#" },
    { name: "Foundation Course for Humanities", href: "#" },
    { name: "CEUT PG (Political Science) Course", href: "#" },
    { name: "NET-JRF (Political Science) Cousre", href: "#" },
]

export const quickLinks: NavLinks[] = [
    { name: "Research wing", href: "#" },
    { name: "Certificate courses", href: "#" },
    { name: "ECA Programs", href: "#" },
    { name: "Publications", href: "#" },
    { name: "ECA Programs", href: "#" },
    { name: "PSE", href: "#" },
    { name: "Master PYQs", href: "#" },
    { name: "Reader column", href: "#" },
    { name: "Recruitment", href: "#" },
    { name: "Downloads", href: "#" },
]

export const socialIcons: NavLinks[] = [
    { name: "facebook", href: "#", icons: "/assets/icons/icon-facebook.svg" },
    { name: "linkedin", href: "#", icons: "/assets/icons/icon-linkedin.svg" },
    { name: "twitter", href: "#", icons: "/assets/icons/icon-twitter.svg" },
    { name: "instagram", href: "#", icons: "/assets/icons/icon-instagram.svg" },
    { name: "share", href: "#", icons: "/assets/icons/icon-share.svg" },
]

export const footerLinks: NavLinks[] = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
]

export const fourColumnNumberTitle = [
    { title: "50,000+", desc: "Students Tutored" },
    { title: "60+", desc: "Courses Offered" },
    { title: "80+", desc: "Experienced faculty" },
    { title: "16+", desc: "Centers across country" }
]
export const courses: Course[] = [
    {
        id: 1,
        title: "NET-JRF (Political Science) Course",
        image: "/assets/images/card-1.png",
        originalPrice: 14999,
        discountedPrice: 7999,
        validity: "Valid for 180 days",
    },
    {
        id: 2,
        title: "Foundation Course for Humanities",
        image: "/assets/images/card-2.png",
        originalPrice: 14999,
        discountedPrice: 7999,
        validity: "Valid for 180 days",
    },
    {
        id: 3,
        title: "NET-JRF (Political Science) Course",
        image: "/assets/images/card-3.png",
        originalPrice: 14999,
        discountedPrice: 7999,
        validity: "Valid for 180 days",
    },
    {
        id: 4,
        title: "Foundation Course for Humanities",
        image: "/assets/images/card-4.png",
        originalPrice: 14999,
        discountedPrice: 7999,
        validity: "Valid for 180 days",
    },
];

export const videoModule: Course[] = [
    {
        id: 1, title: "Social and Religious Movements of 19th century | Radha Gupta", videoUrl: "", image: "/assets/images/card-1.png",
    },
    {
        id: 2, title: "CUET (PG) Political Science PYQ | International Relations", videoUrl: "/assets/videos/banner-video.mp4", image: "",
    },
    {
        id: 3, title: "CUET PG (Pol. Sci.) | Practice Questions | WPT", videoUrl: "", image: "/assets/images/card-3.png",
    },
    {
        id: 4, title: "CUET (PG) Political Science PYQ | International Relations", videoUrl: "", image: "/assets/images/card-4.png",
    }
]