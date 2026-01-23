"use client";

import ContactModal from "@/Components/contactModal";
import AboutUs from "@/Sections/AboutUs";
import Hero from "@/Sections/Hero";
import OurProjects from "@/Sections/OurProjects";
import OurServices from "@/Sections/OurServices";
import { useState } from "react";
import Navbar from "../Components/Navbar";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-screen font-sans p-0 m-0">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
      <Hero onContactClick={() => setIsModalOpen(true)} />
      <main>
        {/* Serviços Section */}
        <OurServices />

        {/* Projects Section */}
        <OurProjects /> 

        {/* AboutUs Section */}
        <AboutUs />
      </main>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
