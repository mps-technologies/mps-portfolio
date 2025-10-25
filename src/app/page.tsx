"use client";

import AboutUs from "@/Sections/AboutUs";
import Navbar from "../Components/Navbar";
import Hero from "@/Sections/Hero";
import OurProjects from "@/Sections/OurProjects";
import OurServices from "@/Sections/OurServices";


export default function Home() {

  return (
    <div className="relative w-full h-screen font-sans p-0 m-0">
      <Navbar />
      <Hero />
      <main>
        {/* Serviços Section */}
        <OurServices />

        {/* Projects Section */}
        <OurProjects /> 

        {/* AboutUs Section */}
        <AboutUs />
      </main>
    </div>
  );
}
