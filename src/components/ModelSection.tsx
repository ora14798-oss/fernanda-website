"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContactRequest } from "@/context/ContactRequestContext";

const BRAND_NAME = "FERNANDA ESCOBAR";
const INSTAGRAM_HANDLE = "@mafemendieta_24";
const TAGLINE = "MODELING PORTFOLIO";
const MODEL_DESCRIPTION =
  "Professional model with experience in editorials, fashion campaigns and content for beauty and lifestyle brands. Fernanda combines a natural on-camera presence with a versatile look that adapts to every project.";

const MODEL_CONTACT_MESSAGE =
  "Hi Fernanda, I'd like to contact you about a modeling project.";

const MODEL_PHOTOS = [
  "/images/modelo-section-edge-1.jpeg",
  "/images/modelo-section-left.jpeg",
  "/images/modelo-section-center.jpeg",
  "/images/modelo-section-right.jpeg",
  "/images/modelo-section-edge-2.jpeg",
];

const ModelSection = () => {
  const { requestContact } = useContactRequest();

  return (
    <section
      id="model"
      className="w-full px-3 md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col overflow-hidden rounded-[32px] bg-[#7A2B2E] pt-8 md:min-h-[88vh] md:pt-12"
      >
        {/* TOP ROW */}
        <div className="relative z-30 flex items-start justify-between px-6 md:px-14">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {BRAND_NAME}
          </span>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/90 sm:text-sm">
            {INSTAGRAM_HANDLE}
          </span>
        </div>

        {/* MIDDLE: HEADLINE + PHOTOS */}
        <div className="flex flex-1 flex-col justify-center">
          {/* HEADLINE */}
          <div className="relative z-30 mt-2 text-center md:mt-4">
            <span className="inline-block rotate-[-4deg] font-[family-name:var(--font-script)] text-4xl text-[#E0A94B] sm:text-5xl md:text-6xl">
              Fashion
            </span>
            <h2 className="-mt-2 whitespace-nowrap font-[family-name:var(--font-heading)] text-[13vw] uppercase leading-[0.85] tracking-tight text-white sm:text-[11vw] md:-mt-4 md:text-[7.5rem] lg:text-[8.5rem]">
              Model
            </h2>
          </div>

          {/* PHOTO STRIP */}
          <div className="relative mt-[-6vw] flex w-full items-end sm:mt-[-5vw] md:mt-[-3.5rem]">
            {MODEL_PHOTOS.map((photo, index) => {
              return (
                <div
                  key={index}
                  className="relative z-0 mx-[2px] h-48 w-1/5 shrink-0 overflow-hidden bg-white/10 sm:h-64 md:h-80 lg:h-96"
                >
                  {photo ? (
                    <div
                      className="h-full w-full bg-white bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${photo}')` }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center border border-dashed border-white/30 bg-white/5 text-center text-[10px] font-semibold uppercase tracking-wide text-white/40 sm:text-xs">
                      Photo {index + 1}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="relative z-30 mx-auto max-w-2xl px-6 pt-6 text-center text-sm leading-relaxed text-white/85 sm:text-base md:px-14">
          {MODEL_DESCRIPTION}
        </p>

        {/* CTA */}
        <div className="relative z-30 mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => requestContact("modeling", MODEL_CONTACT_MESSAGE)}
            className="inline-flex items-center justify-center rounded-full bg-[#E0A94B] px-7 py-3 text-sm font-semibold text-[#7A2B2E] transition hover:bg-[#E0A94B]/85"
          >
            CONTACT FOR MODELING
          </button>
        </div>

        {/* BOTTOM ROW */}
        <div className="relative z-30 flex items-center px-6 py-5 md:px-14 md:py-7">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {TAGLINE}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export { ModelSection };
