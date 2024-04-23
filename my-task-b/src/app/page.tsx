import Image from "next/image";
import NavBar from "./Components/Header/NavBar";
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./Components/Hero/Hero";
import Boxes from "./Components/Hero/Boxes";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
    </main>
  );
}
