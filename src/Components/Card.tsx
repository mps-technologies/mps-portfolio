// ...existing code...
export interface CardProps {
  imgSrc?: string;
  title?: string;
  text?: string;
  href?: string;
  iconSrc?: string;
  className?: string;
}

export default function Card({
  imgSrc = "/bgImg.svg",
  title = "SITES",
  text = "Desenvolvimento de sites full-stack custimazados com base nas necessidades do seu negócio",
  href = "#",
  iconSrc,
  className = "",
}: CardProps) {
  return (
    <article className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${className}`}>
      <a href={href} aria-label={title}>
        <img
          className="rounded-t-lg w-full object-cover h-48 md:h-56"
          src={imgSrc}
          alt={title}
        />
      </a>

      <div className="p-5">
        <a href={href} aria-label={title}>
          <div className="flex items-center mb-2">
            {iconSrc && (
              <img
                src={iconSrc}
                alt={`${title} icon`}
                className="w-6 h-6 mr-2"
              />
            )}
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-bebas">
              {title}
            </h5>
          </div>
        </a>

        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 font-nunito">
          {text}
        </p>

      </div>
    </article>
  );
}
// ...existing code...