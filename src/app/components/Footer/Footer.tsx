import React from "react";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

// create array with social media links and icons to render in the footer
const socialMediaLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/andreseag/",
    icon: <AiOutlineLinkedin size={24} color="#0A66C2" />,
  },
  {
    name: "Github",
    link: "https://github.com/Andreseag",
    icon: <AiOutlineGithub size={24} color="#181717" />,
  },
  {
    name: "Whatsapp",
    link: "https://wa.link/a6li82",
    icon: <AiOutlineWhatsApp size={24} color="#25D366" />,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container py-10 border-t border-gray-2">
        <div className="footer__social-media flex mb-10 gap-3">
          {socialMediaLinks.map((socialMedia) => (
            <Link
              key={socialMedia.name}
              href={socialMedia.link}
              target="_blank"
              rel="noreferrer"
              className="footer__social-media-link flex items-center text-sm gap-2 bg-gray-1 py-1 px-2 rounded-md border border-gray-3"
            >
              {socialMedia.icon}
              {socialMedia.name}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-7">
          © 2023 - Hecho con ❤️ por{" "}
          <Link
            href="https://www.linkedin.com/in/rodrigogaldames/"
            target="_blank"
            rel="noreferrer"
          >
            Andres Castro
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
