"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContactRequest } from "@/context/ContactRequestContext";

const BRAND_NAME = "FERNANDA ESCOBAR";
const INSTAGRAM_HANDLE = "@mafemendieta_24";
const TAGLINE = "PROFESSIONAL BACKGROUND";

const BIO_FACTS = "Model · 26 years old · Colombia";

const ABOUT_CONTACT_MESSAGE =
  "Hi Fernanda, I'd like to talk with you about a possible collaboration or business opportunity.";

const INTRO_TEXT =
  "Hi! I'm Fernanda Escobar, a model and entrepreneur from Colombia. Alongside my modeling career, I've founded and partnered in a range of businesses, including a drone photography studio, a website design and SEO agency, a restaurant, and a business consulting firm. I'm passionate about building brands from the ground up, combining a model's eye for aesthetics with a strategic approach to growth. At 26, every project I take on reflects the same authenticity, creativity, and drive.";

const ABOUT_PHOTOS = [
  "/images/about-me-section-1.jpeg",
  "/images/about-me-section-2.jpeg",
];

const AboutSection = () => {
  const { requestContact } = useContactRequest();

  return (
    <section
      id="about-me"
      className="w-full px-3 md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] bg-[#141414] px-6 pt-8 pb-10 md:px-14 md:pt-12 md:pb-14"
      >
        {/* TOP ROW */}
        <div className="flex items-start justify-between">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {BRAND_NAME}
          </span>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/90 sm:text-sm">
            {INSTAGRAM_HANDLE}
          </span>
        </div>

        {/* HEADER: PHOTOS + TEXT */}
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* PHOTO COLLAGE */}
          <div className="order-2 mx-auto flex shrink-0 items-center justify-center md:order-1 md:mx-0 md:ml-6">
            <div className="relative z-0 mt-12 w-48 -rotate-6 overflow-hidden rounded-2xl border-4 border-white/10 bg-white/5 sm:w-60 md:mt-20 md:w-72 md:mr-[-3rem] lg:w-80">
              <div className="aspect-[4/5] w-full">
                {ABOUT_PHOTOS[0] ? (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ABOUT_PHOTOS[0]}')` }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center text-xs font-semibold uppercase tracking-wide text-white/30">
                    Photo 1
                  </div>
                )}
              </div>
            </div>
            <div className="relative z-10 w-48 rotate-3 overflow-hidden rounded-2xl border-4 border-white/10 bg-white/5 sm:w-60 md:w-72 lg:w-80">
              <div className="aspect-[4/5] w-full">
                {ABOUT_PHOTOS[1] ? (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ABOUT_PHOTOS[1]}')` }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-center text-xs font-semibold uppercase tracking-wide text-white/30">
                    Photo 2
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="order-1 max-w-2xl md:order-2">
            <span className="inline-block rotate-[-3deg] font-[family-name:var(--font-script)] text-4xl text-[#E0A94B] sm:text-5xl">
              Get to Know Me
            </span>
            <h2 className="-mt-1 font-[family-name:var(--font-heading)] uppercase leading-[0.9] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl">
              About Me
            </h2>
            <span className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
              {BIO_FACTS}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {INTRO_TEXT}
            </p>

            <button
              type="button"
              onClick={() => requestContact("business", ABOUT_CONTACT_MESSAGE)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E0A94B] px-7 py-3 text-sm font-semibold text-[#141414] transition hover:bg-[#E0A94B]/85"
            >
              LET'S WORK TOGETHER
            </button>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {TAGLINE}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export { AboutSection };
