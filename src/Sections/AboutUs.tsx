"use client";

import Image from "next/image";

const teamMembers = [
  { name: "Misael Armando", role: "Full-stack developer", location: "Lisboa, Portugal", imgSrc: "/misael.svg" },
  { name: "Samuel Santos", role: "Full-stack developer", location: "Loures, Portugal", imgSrc: "/samuel.svg" },
  { name: "Pedro Bonfim", role: "Product manager", location: "Loures, Portugal", imgSrc: "/pedro.svg" }
]

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center scroll-mt-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-12 relative z-10">
        {/* Intro */}
        <div className="w-full md:w-3/4 text-center mb-8">
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6 font-bebas uppercase font-bold tracking-tight">
            Sobre nós
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 font-nunito leading-relaxed">
            Somos a MPS Technologies, formada por Misael, Pedro e Samuel. Unimos experiência e dedicação para desenvolver sites completos e de confiança, ajudando pequenas empresas a crescer com soluções digitais simples e eficazes.
          </p>
        </div>
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {
            teamMembers.map((team, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-full">
                <div className="relative h-40 w-40 md:w-48 md:h-48 rounded-full shadow mb-4 overflow-hidden">
                  <Image
                    src={team.imgSrc}
                    alt={`${team.name} - MPS Technologies`}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 font-bebas">{team.name}</h3>
                  <p className="text-base text-gray-600 font-nunito">{team.role}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Image src="/location.svg" alt="location icon" width={16} height={16}/>
                    <p className="text-sm text-gray-500 font-nunito">{team.location}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
