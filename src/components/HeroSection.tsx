"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContactRequest } from "@/context/ContactRequestContext";

const PHOTO_URL = "/images/hero-right-image.jpeg";

const CANDLES_PHOTO_URL = "/images/fernanda-candles.jpeg";

const HERO_CONTACT_MESSAGE =
  "Hi Fernanda, I saw your page and I'd like to get in touch with you.";

const HeroSection = () => {
  const { requestContact } = useContactRequest();

  return (
    <section className="w-full bg-white px-3 md:px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-[#FF6A3D] px-6 pt-24 pb-12 md:px-16 md:pt-32 md:pb-20 md:min-h-[88vh]">

        {/* CONTENT GRID */}
        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">

          {/* LEFT: TEXT */}
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-black/70"
            >
              Model &amp; Business Woman
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-heading)] uppercase leading-[0.9] text-black text-6xl sm:text-7xl md:text-8xl mt-3"
            >
              Fernanda
              <br />
              Escobar
            </motion.h1>

            <div className="mt-6 flex items-start gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="max-w-xs italic text-black/80 text-xl"
              >
                Style. Strategy. Empowerment.
              </motion.p>

              <motion.svg
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                className="mt-1 shrink-0"
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-md text-lg text-black/70"
            >
              Model, content creator and digital strategist, helping
              brands and individuals tell their story and shine on social
              media.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <button
                type="button"
                onClick={() => requestContact("general", HERO_CONTACT_MESSAGE)}
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                CONTACT
              </button>
            </motion.div>
          </div>

          {/* RIGHT: PHOTO COLLAGE */}
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-end md:gap-0">
            {/* Card 2 — candles photo, sits behind/left */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-0 w-64 sm:w-80 md:w-[26rem] rounded-[24px] border-[10px] border-white bg-white shadow-2xl overflow-hidden md:mt-16 md:mr-[-6rem]"
            >
              <div
                className="aspect-[4/5] w-full bg-white bg-no-repeat bg-cover grayscale"
                style={{
                  backgroundImage: `url('${CANDLES_PHOTO_URL}')`,
                  backgroundPosition: "center 20%",
                }}
              />
            </motion.div>

            {/* Card 1 — main photo, sits in front/right */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-64 sm:w-80 md:w-[26rem] rounded-[24px] border-[10px] border-white bg-white shadow-2xl overflow-hidden md:mr-[-2rem]"
            >
              <div
                className="aspect-[4/5] w-full bg-white bg-no-repeat bg-cover grayscale"
                style={{
                  backgroundImage: `url('${PHOTO_URL}')`,
                  backgroundPosition: "100% 20%",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
