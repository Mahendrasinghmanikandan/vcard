import { FaGlobeAmericas, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdFacebook, MdOutlineMail } from "react-icons/md";

export const social = [
    {
        id: 1,
        icon: FaGlobeAmericas,
    },
    {
        id: 2,
        icon: FaXTwitter,
    },
    {
        id: 3,
        icon: MdFacebook,
    },
    {
        id: 4,
        icon: FaWhatsapp,
    },
    {
        id: 5,
        icon: FaLinkedin,
    },
];

export const contact = [
    {
        id: 1,
        icon: MdOutlineMail,
        title: "E-mail address",
        subTitle: "xyz@xyz.com",
    },
    {
        id: 2,
        icon: IoCallOutline,
        title: "Mobile Number",
        subTitle: "9876543210",
    },
    {
        id: 3,
        icon: IoCallOutline,
        title: "Alternate Mobile Number",
        subTitle: "9182736450",
    },
    {
        id: 4,
        icon: GrLocation,
        title: "Location",
        subTitle: "Turkish",
    },
];

export const service = [
    {
        id: 1,
        name: "Web Development",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        icon: "https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png.webp",
    },
    {
        id: 2,
        name: "Android Development",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        icon: "https://solguruz.com/wp-content/uploads/2023/11/Top-19-Android-App-Development-Trends.png",
    },
    {
        id: 3,
        name: "Web Designing",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        icon: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
    },
    {
        id: 4,
        name: "Digital Marketing",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        icon: "https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png",
    },
];
