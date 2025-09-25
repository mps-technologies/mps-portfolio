
import React from "react";

export interface CardProps {
  imgSrc?: string;
  title?: string;
  text?: string;
  href?: string;
  className?: string;
}

export default function Card({
  imgSrc = "/bgImg.svg",
  title = "SITES",
  text = "Desenvolvimento de sites full-stack custimazados com base nas necessidades do seu negócio",
  href = "#",
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-bebas">
            {title}
          </h5>
        </a>

        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 font-nunito">
          {text}
        </p>

        <a
          href={href}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
        >
          Ler mais
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </article>
  );
}
