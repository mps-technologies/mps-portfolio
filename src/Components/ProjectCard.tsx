export interface CardProps {
  imgSrc?: string;
  title?: string;
  text?: string;
  href?: string;
  hrefProject?: string;
  className?: string;
}

export default function ProjectCard({
  imgSrc = "/bgImg.svg",
  title = "SITES",
  text = "Desenvolvimento de sites full-stack custimazados com base nas necessidades do seu negócio",
  href = "#",
  hrefProject = "/",
  className = "",
}: CardProps) {
  return (
    <article className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-white ${className}`}>
      <a href={href} aria-label={title}>
        <img
          className="rounded-t-lg w-full object-cover h-48 md:h-56"
          src={imgSrc}
          alt={title}
        />
      </a>

      <div className="p-5">
        <a href={hrefProject} aria-label={title}>
          <div className="flex items-center mb-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-bebas">
              {title}
            </h5>
          </div>
        </a>

        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 font-nunito">
          {text}
        </p>
        <a href= {hrefProject} target="_blank" rel="noopener noreferrer">
          <button  className="bg-black cursor-pointer text-white rounded px-4 py-2 font-semibold shadow transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:translate-x-2">
          Saber mais
          </button>
        </a>
        

      </div>
    </article>
  );
}