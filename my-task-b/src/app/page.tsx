import Image from "next/image";
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

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <div className="flex justify-content: flex-end">
      <div className="w-1/2 ml-10 pl-5">
        <About />
        <Gallery/>
        <Promo/>
        <Singers/>
        <Hotels/>
        <Clients/>
      </div>
      <div className="w-1/2 ml-10 pl-5">
        <Program />
      </div>
      </div>
      <Partners/>
      <Footer/>
    </main>
  );
}
