"use client";
import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal */}
      <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg">
          {/* header */}
          <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contacte‑nos</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-2xl leading-none"
              aria-label="Fechar modal"
            >
              &times;
            </button>
          </div>

          {/* body / form */}
          <div className="px-6 py-6">
            <form
              action="https://formspree.io/f/xnqvjqwv"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Serviço de interesse
                </label>

                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Website", value: "Website" },
                    { label: "Aplicação Mobile", value: "Aplicação Mobile" },
                    { label: "Outro", value: "Outro" },
                  ].map((option, idx) => (
                    <label key={option.value} className="inline-flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="service"
                        value={option.value}
                        className="sr-only peer"
                        defaultChecked={idx === 0}
                      />
                      <span className="inline-flex items-center px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition
                        peer-checked:bg-blue-700 peer-checked:text-white peer-checked:dark:bg-blue-700 peer-checked:dark:text-white
                      ">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Escolha um serviço para começarmos.</p>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Descrição (mais pormenores sobre o projeto)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Explique o que precisa, funcionalidades desejadas, prazos, orçamento, etc."
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}