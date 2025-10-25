"use client"; 

import ProjectCard from "@/Components/ProjectCard";

export default function OurProjects() {
  return (
        <section
          id="projects"
          className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 bg-centered relative flex flex-col justify-center"
          style={{
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl text-dark text-left mb-12 font-bebas uppercase font-bold tracking-tight">
              Nossos Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-center">
              {/* O objetivo na escolha destes projetos é cada um deles demonstrar uma habilidade ou tecnologia específica */}
                <ProjectCard
                imgSrc="/BarberShop.png"
                title="Barbearia"
                text="Site para barbearia não funcional, apenas para demonstração de layout e design"
                href="#projects"
                hrefProject="https://barbershop-mps.netlify.app"
                />

                <ProjectCard
                imgSrc="/moviefy.png"
                title="Moviefy"
                text="Site de informações sobre filmes onde o foco é o uso e manipulação de APIs"
                href="#projects"
                hrefProject="https://wearemoviefy.netlify.app/"
                />

                <ProjectCard
                imgSrc="/frota.png"
                title="Frota"
                text="Demonstração focada em administração em vez de venda de produto onde o foco é gerencia interna neste de caso de um frota de carros"
                href="#projects"
                hrefProject="https://gestor-frota.netlify.app/"
                />


            </div>
          </div>
        </section>
  );
}
