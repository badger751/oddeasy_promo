'use client'
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Asset26 from "../../public/Assets/Elements/SVG/Asset26.svg";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsFooterVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerStyle = {
    opacity: isFooterVisible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  };

  return (
    <Fragment>
      {/* Conditionally render the footer based on visibility */}
      <div className="fixed bottom-0 z-10 p-3 w-full text-white flex flex-wrap justify-around items-center" style={footerStyle}>
        <div className="text-center md:text-left flex-1 min-w-[80px] md:min-w-[100px] text-xs md:text-sm">
          LOCAL/ 46° 28' 58.6272"N
        </div>
        <div className="shrink-0 hidden md:block">
          <Image src={Asset26} height={30} width={30} alt="logo"/>
        </div>
        <div className="text-center md:text-right flex-1 min-w-[80px] md:min-w-[100px] text-xs md:text-sm">
          Studio/ 90° N 28’ 90 S
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
