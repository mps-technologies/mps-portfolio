"use client";

import Card from "@/Components/Card";
import Image from "next/image";

export default function OurServices() {
  return (
    <>
      <section
        id="services"
        className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 bg-centered relative flex flex-col justify-center">

      <Image
          src="/service-bg.png"
          alt="Our services background image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay */}
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl text-dark text-left mb-12 font-bebas uppercase font-bold tracking-tight">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-center">
            <Card
              imgSrc="/site.png"
              title="SITES"
              text="Desenvolvimento de sites full-stack custimizados com base nas necessidades do seu negócio"
              href="#services"
              iconSrc="/website-icon.svg"
            />
            <Card
              imgSrc="/mobile.png"
              title="APLICAÇÕES"
              text="Aplicações móveis que vão tornar a sua ideia numa realidade"
              href="#services"
              iconSrc="/mobile-icon.svg"
            />
            <Card
              imgSrc="/design.png"
              title="DESIGN"
              text="Tornamos o seu produto não apenas funcional mas também esteticamente apelativo"
              href="#services"
              iconSrc="/design-icon.svg"
            />
          </div>
        </div>
      </section>
      </>
  );
}
