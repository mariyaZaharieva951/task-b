'use client';
import NavBar from "./Components/Header/NavBar";
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./Components/Hero/Hero";
import Boxes from "./Components/Hero/Boxes";
import About from "./Components/About/About";
import Program from "./Components/Program/Program";
import Gallery from "./Components/About/Gallery";
import Promo from "./Components/About/Promo";
import Singers from "./Components/About/Singers";
import Hotels from "./Components/About/Hotels";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import Clients from "./Components/About/Clients";
import Covers from "./Components/Covers/Covers";
import { useEffect, useState } from 'react';


export default function Home() {

  const [rightHeight, setRightHeight] = useState(0);

  useEffect(() => {
    const rightElement = document.getElementById('right-content');
    if (rightElement) {
      const height = rightElement.clientHeight;
      
      setRightHeight(height);
    }
  }, []);


  return (
    <main className="overflow-y-auto">
      <NavBar/>
      <Hero/>
      <div className="flex justify-content: flex-end ml-10 pl-10">
      <div className="w-1/2 ml-12 pl-12 pr-5 overflow-y-auto my-2">
        <div className=""  style={{ height: `${rightHeight}px`, scrollbarWidth: 'none' }}>
        <About />
        <Gallery/>
        <Promo/>
        <Singers/>
        <Hotels/>
        <Clients/>
        </div>
      </div>
      <div className="w-1/2">
        <Program />
      </div>
      </div>
      <div className="bg-gray-bg pt-1">
        <Covers/>
        <Partners/>
      </div>
      
      <Footer/>
    </main>
  );
}
