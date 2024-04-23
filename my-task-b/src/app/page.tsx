import Image from "next/image";
import NavBar from "./Components/Header/NavBar";
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./Components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
    </main>
  );
}
