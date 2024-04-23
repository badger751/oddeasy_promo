"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import About from "@/Components/About";

export default function Home() {
  const router = useRouter();
  return (
        <main>
      <div className="flex flex-col items-center justify-center min-h-[91vh] pt-24 w-full">
        <div className="text-white flex flex-col items-center  bg-transparent w-full px-4  custom-font">
          <p className="text-center text-2xl sm:text-3xl lg:text-6xl  my-4">Making Galactic Moves</p>
          <p className="text-center text-2xl sm:text-3xl lg:text-6xl my-4">for your Brand? Begin Here</p>
        </div>
        <div className="flex justify-evenly w-full max-w-xs sm:max-w-md lg:max-w-lg my-4 py-2 px-4">
          <button className="bg-rose-400 rounded-full flex-1 mx-2 py-2 text-black text-lg">Know more</button>
          <button className="border-white border-2 rounded-full flex-1 mx-2 py-2 text-white">Book a call</button>
        </div>
      </div>
      <About />
      <footer className="footer footer-center p-10  text-primary-content mt-[243px] ">
        <aside>
          
          <p className="font-bold text-white">
            oddeasy Studios Ltd. <br/>Providing reliable design since 
          </p> 
          <p className="text-white" >Copyright © 2024 - All right reserved</p>
        </aside> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              {/* SVG paths for social icons */}
            </svg></a>
            {/* Additional social icons */}
          </div>
        </nav>
      </footer>
    </main>
  );
}
