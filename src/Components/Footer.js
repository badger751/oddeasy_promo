'use client'
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Asset26 from "../../public/Assets/Elements/SVG/Asset26.svg";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsFooterVisible(scrollTop < lastScrollTop || scrollTop === 0);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <Fragment>
      <div className={`fixed bottom-0 z-10  p-3 w-full text-white flex flex-wrap justify-around items-center transition-opacity duration-500 mb-10 ${isFooterVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center md:text-left flex-1 min-w-[140px] text-sm md:text-base">
          LOCAL/ 46° 28' 58.6272"N
        </div>
        <div className="shrink-0">
          <Image src={Asset26} height={30} width={60} alt="logo"/>
        </div>
        <div className="text-center md:text-right flex-1 min-w-[140px] text-sm md:text-base">
          Studio/ 90° N 28’ 90 S
        </div>
      </div>
        


    </Fragment>
  );
};

export default Footer;
