import Image from "next/image";

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
    <article className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-white ${className}`}>
      <a href={href} aria-label={title}>
        <div className="relative rounded-t-lg w-full h-48 md:h-56">
          <Image
            src={imgSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      </a>

      <div className="p-5">
        <a href={href} aria-label={title}>
          <div className="flex items-center mb-2">
            {iconSrc && (
              <Image
                className="mr-2"
                src={iconSrc}
                alt={`${title} icon`}
                width={24}
                height={24}
                loading="lazy"
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

