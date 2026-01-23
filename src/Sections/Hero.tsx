"use client";

import Image from "next/image";

type HeroProps = {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <>
        <Image
          src="/hero-bg.jpg"
          alt="Landing page hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <section className="flex flex-col items-center justify-center min-h-screen w-full gap-8 px-4 relative">
          <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay for text readability */}
          <span className="text-4xl md:text-7xl text-white text-center mb-12 font-bebas relative z-10 font-bold tracking-tight">
            Transformamos a sua ideia numa ferramenta capaz de fazer o seu negócio progredir
          </span>
          <button
            onClick={onContactClick}
            className="bg-white cursor-pointer text-black rounded px-8 py-3 font-semibold shadow transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:translate-x-2 relative z-10"
          >
            Contacte-nos
          </button>
        </section>
    </>
  )
}
