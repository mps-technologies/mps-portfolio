import Card from "@/Components/Card";
import ProjectCard from "@/Components/ProjectCard";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full font-sans p-0 m-0">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="flex flex-col items-center justify-center min-h-screen w-full gap-8 px-4 relative"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay for text readability */}
          <span className="text-4xl md:text-7xl text-white text-center mb-12 font-bebas uppercase relative z-10 font-bold tracking-tight">
            Transformamos a sua ideia numa ferramenta capaz de fazer o seu negócio progredir
          </span>
          <button className="bg-white cursor-pointer text-black rounded px-8 py-3 font-semibold shadow transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:translate-x-2 relative z-10">
            Contacte-nos
          </button>
        </section>

        {/* Serviços Section */}
        <section
          id="services"
          className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 bg-centered relative flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/service-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
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
        {/* Projects Section */}
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
                hrefProject="https://connected-barbershop.netlify.app/"
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
                text="Site não funcional (demonstração) focado em administração em vez de venda de produto onde o foco é gerencia interna neste de caso de um frota de carros"
                href="#projects"
                hrefProject="https://gestor-frota.netlify.app/"
                />


            </div>
          </div>
        </section>
          {/* AboutUs Section */}
          <section
            id="about"
            className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center scroll-mt-16 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-12">
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
                {/* Misael */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-full">
                  <img
                    src="/misael.svg"
                    alt="Misael Armando — MPS Technologies"
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 font-bebas">Misael Armando</h3>
                    <p className="text-base text-gray-600 font-nunito">Desenvolvedor full-stack</p>
                    <p className="text-sm text-gray-500 font-nunito">Lisboa, Portugal</p>
                  </div>
                </div>
                {/* Pedro */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-full">
                  <img
                    src="/pedro.svg"
                    alt="Pedro Bonfim — MPS Technologies"
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 font-bebas">Pedro Bonfim</h3>
                    <p className="text-base text-gray-600 font-nunito">Product Manager</p>
                    <p className="text-sm text-gray-500 font-nunito">Loures, Portugal</p>
                  </div>
                </div>
                {/* Samuel */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-full">
                  <img
                    src="/samuel.svg"
                    alt="Samuel Santos — MPS Technologies"
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 font-bebas">Samuel Santos</h3>
                    <p className="text-base text-gray-600 font-nunito">Desenvolvedor full-stack</p>
                    <p className="text-sm text-gray-500 font-nunito">Loures, Portugal</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
