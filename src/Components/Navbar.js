'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo_0 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";
import Logo_1 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";
import Logo_2 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";
import Logo_3 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";
import Logo_4 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";
import Logo_5 from "../../public/Assets/Logos/01 Main - Wordmark Inverted.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(Logo_0); // Initial logo
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const logos = [Logo_0, Logo_1, Logo_2, Logo_3, Logo_4, Logo_5]; // Array of logos

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((currentLogo) => {
        const index = (logos.indexOf(currentLogo) + 1) % logos.length;
        return logos[index];
      });
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, [logos]);

  return (
    <React.Fragment>
      <div className="non-italic  fixed w-full flex justify-center items-center z-20">
        <div
          className={`flex  translate-y-2 p-2 z-1000 justify-between transition-all ${
            isScrolled
              ? " rounded-full md:w-[90%] w-full"
              : " md:w-[100%] w-full"
          } text-white p-[0.5rem] items-center`}
        >
          <div className="flex items-center">
            {/* Image component displaying current logo */}
            <Image src={currentLogo} alt="Company Logo" height={60} width={80} />
            <p>STUDIO</p>
          </div>
          <div>
          <button className=" bg-off  size-28 rounded-full flex-1 mx-2 py-2 text-black text-xl">Book a call</button>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
