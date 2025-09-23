import Navbar from "../Components/Navbar";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans grid grid-rows-[auto_1fr_auto] p-0 m-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: 'url("/blueskies.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full w-full gap-8">
        <span className="text-5xl text-white text-center fonts-bold">
          Transformamos a sua ideia numa ferramenta capaz de fazer o seu negócio progredir
        </span>
        <button className="bg-white cursor-pointer text-black rounded px-8 py-3 font-semibold shadow transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:translate-x-2">
          Contacte-nos
        </button>
      </div>
    </div>
  );
}
