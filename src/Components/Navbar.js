'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo_6 from "../../public/Assets/STUDIOWOB.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      if (!isScrolled) {
        setIsVisible(true); // Navbar is visible when at the top
      } else {
        setIsVisible(false); // Navbar is invisible when scrolled down
      }
    };

    handleNavbarVisibility();

    return () => setIsVisible(false); // Clean-up function to ensure visibility is reset when unmounting
  }, [isScrolled]);

  const navbarStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
  };

  // Define the logo dimensions based on the environment
  const isClientSide = typeof window !== 'undefined';
  const logoHeight = isClientSide && window.innerWidth <= 768 ? 40 : 60; // Adjust height for small screens
  const logoWidth = isClientSide && window.innerWidth <= 768 ? 120 : 180; // Adjust width for small screens

  return (
    <div className="fixed top-0 w-full z-20" style={navbarStyle}>
      <div className={`flex justify-between items-center p-4 md:p-8 ${isScrolled ? "bg-transparent" : ""}`}>
        <div className="flex items-center">
          {/* Image component displaying current logo */}
          <Image src={logo_6} alt="Company Logo" height={logoHeight} width={logoWidth} />
        </div>
        <div className="flex items-center">
          {/* Add any other navbar elements here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
