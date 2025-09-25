// ...existing code...
import Card from "@/Components/Card";
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
          <span className="text-4xl md:text-7xl text-white text-center mb-12 font-bebas uppercase tracking-wide relative z-10">
            Transformamos a sua ideia numa ferramenta capaz de fazer o seu negócio progredir
          </span>
          <button className="bg-white cursor-pointer text-black rounded px-8 py-3 font-semibold shadow transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:translate-x-2 relative z-10">
            Contacte-nos
          </button>
        </section>

        {/* Serviços Section */}
        <section
          id="services"
          className="min-h-screen w-full py-16 px-4 md:px-8 lg:px-16 relative"
          style={{
            backgroundImage: 'url("/service-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div> {/* Optional overlay */}
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl text-white text-left mb-12 font-bebas uppercase tracking-wide">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 self-center">
              <Card
                imgSrc="/site.png"
                title="SITES"
                text="Desenvolvimento de sites full-stack custimazados com base nas necessidades do seu negócio"
                href="#services"
              />
              <Card
                imgSrc="/mobile.png"
                title="APLICAÇÕES"
                text="Aplicações móveis que vão tornar a sua ideia numa realidade"
                href="#services"
              />
              <Card
                imgSrc="/design.png"
                title="DESIGN"
                text="Tornamos o seu produto não apenas funcional mas também esteticamente apelativo"
                href="#services"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// ...existing code...