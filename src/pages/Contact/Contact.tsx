import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import "./Contact.css";

const icons = [
  { Icon: FaGithub, label: "GitHub", url: "https://github.com/AndiPrapugicu" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/andi-prapugicu-a136b2275/",
  },
  { Icon: FaUser, label: "Profile", url: "/profile" },
];

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="wrapper">
      <div className="carouselContainer">
        <div className="logos" ref={containerRef}>
          {icons.map(({ Icon, label, url }, i) => (
            <a
              key={i}
              href={url}
              className="logoItem"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
