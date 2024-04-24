'use client'
import { useRef } from 'react'; // Import useRef from React
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import About from '@/Components/About';

export default function Home() {
  const aboutRef = useRef(null); // Step 1: Create a ref

  // Step 3: Scroll to the About component
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const redirectToBookingPage = () => {
    // Specify the URL to redirect to
    const bookingURL = 'https://cal.com/oddeasy/discovery?date=2024-04-25&month=2024-04';
    
    // Redirect the user to the booking URL
    window.location.href = bookingURL;
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-[91vh] pt-24 w-full">
        <div className="text-white flex flex-col items-center  bg-transparent w-full px-4  custom-font">
          <p className="text-center text-2xl sm:text-3xl lg:text-7xl  my-2">Making Galactic Moves</p>
          <p className="text-center text-2xl sm:text-3xl lg:text-7xl my-2">for your Brand? Begin Here</p>
        </div>
        <div className="flex justify-evenly w-full max-w-xs sm:max-w-md lg:max-w-lg my-4 py-2 px-4">
          <button onClick={scrollToAbout} className="bg-rose-400 rounded-full flex-1 mx-2 py-2 text-black text-lg hover:bg-rose-500 transform hover:scale-105 transition duration-300 ease-in-out">Know more</button> {/* Step 4: Attach the function to button */}
          <button className="border-white border-2 rounded-full flex-1 mx-2 py-2 text-white hover:bg-white hover:text-black transform hover:scale-105 transition duration-300 ease-in-out " onClick={redirectToBookingPage}>Book a call</button>
        </div>
      </div>
      <div ref={aboutRef}> {/* Step 2: Attach the ref */}
        <About />
      </div>
      <footer className="footer footer-center p-10 text-primary-content mt-[243px] ">
        <aside>
          <p className="font-bold text-white">
            oddeasy Studios 
          </p> 
          <p className="text-white">Copyright © 2024 - All right reserved</p>
        </aside> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                {/* SVG paths for social icons */}
              </svg>
            </a>
            
            {/* Additional social icons */}
          </div>
        </nav>
      </footer>
    </main>
  );
}
