'use client'
import { useRef } from 'react';
import About from '@/Components/About';

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirectToBookingPage = () => {
    const bookingURL = 'https://cal.com/oddeasy/discovery?date=2024-04-25&month=2024-04';
    window.location.href = bookingURL;
  };

  return (
    <main>
      {/* Work in Progress Banner */}
      <div className="bg-neon-green text-white text-center h-11 py-2 absolute bottom-0 w-full">
        <div className="flex items-center justify-center">
          <div className="dot mr-2"></div>
          <div className="animate-moving">Work in Progress</div>
          <div className="dot ml-2"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[91vh] pt-8 sm:pt-24 w-full"> {/* Decreased top padding for mobile */}
        <div className="text-white flex flex-col items-center bg-transparent w-full px-4 custom-font">
          <p className="text-center text-2xl sm:text-7xl lg:text-7xl text-off my-2 lg:my-2 sm:my-1">Making Galactic Moves</p>
          <p className="text-center text-2xl sm:text-7xl lg:text-7xl text-off my-2 lg:my-2 sm:my-1">for your Brand? Begin Here</p>
        </div>
        <div className="flex justify-evenly w-full max-w-xs sm:max-w-md lg:max-w-lg my-2 sm:my-4 py-2 px-4"> {/* Decreased margin for mobile */}
          <button onClick={scrollToAbout} className="bg-rose-400 rounded-full flex-1 mx-2 py-1 px-2 text-off text-sm sm:text-lg lg:text-base hover:bg-rose-500 transform hover:scale-105 transition duration-300 ease-in-out">Know more</button> {/* Adjusted button size for desktop */}
          <button className="border-white border-2 rounded-full flex-1 mx-2 py-1 px-2 text-off hover:bg-off hover:text-black transform hover:scale-105 transition duration-300 ease-in-out" onClick={redirectToBookingPage}>Book a call</button> {/* Adjusted button size for desktop */}
        </div>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <footer className="footer footer-center p-10 text-primary-content mt-[243px] footer-spacing"> {/* Added a class for spacing */}
        <aside>
          <p className="font-bold text-white mb-4">
            oddeasy Studios 
          </p> 
          <p className="text-white mb-4">Copyright © 2024 - All right reserved</p>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="http://www.linkedin.com/company/oddeasy/" className="link underline-hover">LinkedIn</a>
              <a href="http://www.instagram.com/oddeasy.studio/" className="link underline-hover">Instagram</a>
              <a href="http://www.behance.net/oddeasy" className="link underline-hover">Behance</a>
            </div>
          </nav>
        </aside>
      </footer>
    </main>
  );
}
