"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-black">
      
      {/* 1️⃣ BASE DARK BACKGROUND */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* 2️⃣ DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 3️⃣ WHITE LIGHT GLOW — UNDER PHOTO */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          z-20
          bg-[radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.45),rgba(255,255,255,0.25),rgba(255,255,255,0.08),transparent_60%)]
        "
      />

      {/* 4️⃣ PHOTO — TOP VISUAL LAYER */}
      <div
        className="
          absolute inset-0
          z-30
          bg-no-repeat
          bg-right-top
          bg-cover
          md:bg-contain
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvietxyfp/image/upload/v1768979162/FERNANDA_MARIA_ESCOBAR_MENDIETA_5_a9kctb.png')",
        }}
      />

      {/* 5️⃣ CONTENT */}
      <div className="relative z-40 flex min-h-screen items-start px-6 pt-24 md:px-16 md:pt-32">
        <div className="max-w-xl text-left">
          
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl md:text-6xl"
          >
            HOLA, SOY SU MUJER   
            <br />
            Y ME LLAMAN 
            <br />
            <span className="font-extrabold">FERNANDA</span>
          </motion.h1>

          {/* DESKTOP SUBTEXT + BUTTON */}
          <div className="hidden md:block">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 max-w-md text-base text-white/90 sm:text-lg"
            >
              Sí, escaneaste una camiseta.
              <br />
              Ahora conocés a Fernanda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a
                href="https://wa.link/tn3jqy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                CONTACTAR POR WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE BOTTOM CONTENT */}
      <div className="md:hidden absolute bottom-[90px] left-0 right-0 z-40 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-base text-white/90"
        >
          Sí, escaneaste una camiseta.
          <br />
          Ahora conocés a Fernanda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-3"
        >
          <a
            href="https://wa.link/tn3jqy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </motion.div>
      </div>

      {/* ⬇️ SCROLL INDICATOR — ENHANCED */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-50 -translate-x-1/2 flex flex-col items-center gap-2">
        
        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm text-white/80 text-center max-w-[260px]"
        >
          Para ver más sobre mí y lo que estoy buscando, desliza hacia abajo
        </motion.p>

        {/* Animated indicator */}
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            y: [0, 6, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center gap-3"
        >
          <div className="h-1 w-20 bg-green-500 rounded-full" />
          <div className="text-green-500 text-2xl font-black leading-none">∨</div>
          <div className="h-1 w-20 bg-green-500 rounded-full" />
        </motion.div>
      </div>

    </section>
  );
};

export { HeroSection };
