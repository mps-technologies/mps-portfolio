import Image from "next/image";
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
      {/* ...existing page content... */}
    </div>
  );
}
