"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  "Hola mi hermosa",
  "Pienso en todo lo que vivimos juntos",
  "Quiero estar cerca de ti",
  "Abrazarte, besarte",
  "Y amarte como solo yo sé",
  "Hasta los momentos más simples",
  "Te necesito",
  "Una pregunta para ti",
];

type View = "intro" | "carousel";

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21.35c-.2 0-.39-.07-.54-.2C7.14 17.9 3 14.36 3 9.86 3 6.98 5.2 4.8 7.9 4.8c1.7 0 3.28.86 4.1 2.2.82-1.34 2.4-2.2 4.1-2.2 2.7 0 4.9 2.18 4.9 5.06 0 4.5-4.14 8.04-8.46 11.29-.15.13-.34.2-.54.2z" />
    </svg>
  );
}

export function Carousel() {
  const [view, setView] = useState<View>("intro");
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sources = ["/para-ti/cover.jpg", ...SLIDES.map((_, i) => `/para-ti/slide_${i + 1}.jpg`)];
    for (const src of sources) {
      const img = new Image();
      img.src = src;
    }
  }, []);

  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const target = Math.max(0, Math.min(SLIDES.length - 1, i));
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el || view !== "carousel") return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(Math.round(el.scrollLeft / el.clientWidth) + 1);
      if (e.key === "ArrowLeft") go(Math.round(el.scrollLeft / el.clientWidth) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [go, view]);

  const openCarousel = () => setView("carousel");

  const backToIntro = () => {
    setView("intro");
    setIndex(0);
    track.current?.scrollTo({ left: 0, behavior: "auto" });
  };

  const isLast = index === SLIDES.length - 1;

  return (
    <div className="pt-root">
      {/* INTRO SCREEN */}
      <div className={`pt-screen pt-intro ${view === "intro" ? "pt-active" : "pt-inactive"}`} aria-hidden={view !== "intro"}>
        {/* biome-ignore lint/performance/noImgElement: static cover photo */}
        <img src="/para-ti/cover.jpg" alt="" className="pt-intro-bg-mobile" aria-hidden />
        {/* biome-ignore lint/performance/noImgElement: static cover photo */}
        <img src="/para-ti/cover.jpg" alt="" className="pt-intro-bg-desktop" aria-hidden />
        <div className="pt-intro-gradient-mobile" />

        <div className="pt-intro-layout">
          <div className="pt-intro-card">
            {/* biome-ignore lint/performance/noImgElement: static cover photo */}
            <img src="/para-ti/cover.jpg" alt="" />
          </div>

          <div className="pt-intro-text">
            <HeartIcon className="pt-heart-icon" />
            <h1 className="pt-intro-title">Para ti, mi hermosa</h1>
            <p className="pt-intro-sub">Hice algo para ti</p>
            <button type="button" className="pt-open-btn" onClick={openCarousel} tabIndex={view === "intro" ? 0 : -1}>
              Ábrelo
              <HeartIcon className="pt-btn-heart" />
            </button>
          </div>
        </div>
      </div>

      {/* CAROUSEL SCREEN */}
      <div
        className={`pt-screen pt-carousel-screen ${view === "carousel" ? "pt-active" : "pt-inactive"}`}
        aria-hidden={view !== "carousel"}
      >
        <div className="pt-bg">
          {SLIDES.map((alt, i) => (
            // biome-ignore lint/performance/noImgElement: blurred background layer
            <img
              key={alt}
              src={`/para-ti/slide_${i + 1}.jpg`}
              alt=""
              aria-hidden
              className="pt-bg-img"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="pt-carousel-inner">
          <div className="pt-stage-wrap">
            <div className="pt-stage">
              <div ref={track} className="pt-track">
                {SLIDES.map((alt, i) => (
                  <div key={alt} className="pt-slide">
                    {/* biome-ignore lint/performance/noImgElement: static slides */}
                    <img src={`/para-ti/slide_${i + 1}.jpg`} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="Anterior"
              className="pt-arrow pt-arrow-left"
              onClick={() => go(index - 1)}
              style={{ opacity: index === 0 ? 0 : 1, pointerEvents: index === 0 ? "none" : "auto" }}
              tabIndex={view === "carousel" ? 0 : -1}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              className="pt-arrow pt-arrow-right"
              onClick={() => go(index + 1)}
              style={{ opacity: isLast ? 0 : 1, pointerEvents: isLast ? "none" : "auto" }}
              tabIndex={view === "carousel" ? 0 : -1}
            >
              ›
            </button>
          </div>

          <div className="pt-dots">
            {SLIDES.map((alt, i) => (
              <button
                key={alt}
                type="button"
                aria-label={`Foto ${i + 1}`}
                className={`pt-dot ${i === index ? "pt-dot-active" : ""}`}
                onClick={() => go(i)}
                style={{ width: i === index ? 22 : 8 }}
                tabIndex={view === "carousel" ? 0 : -1}
              />
            ))}
          </div>

          <p className="pt-counter">
            {index + 1} / {SLIDES.length}
          </p>

          {isLast && (
            <button type="button" className="pt-back-btn" onClick={backToIntro} tabIndex={view === "carousel" ? 0 : -1}>
              Volver al inicio
            </button>
          )}
        </div>
      </div>

      <style>{`
        .pt-root {
          font-family: var(--font-geist-sans), system-ui, sans-serif;
        }

        .pt-screen {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100dvh;
          overflow: hidden;
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .pt-active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .pt-inactive {
          opacity: 0;
          pointer-events: none;
        }
        .pt-intro.pt-inactive {
          transform: translateY(-16px);
        }
        .pt-carousel-screen.pt-inactive {
          transform: translateY(16px);
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-screen {
            transition: opacity 1ms linear;
            transform: none !important;
          }
        }

        /* Intro */
        .pt-intro {
          background: #241a16;
        }

        @keyframes ptIntroIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pt-intro-bg-mobile {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .pt-intro-bg-desktop {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          filter: blur(40px) brightness(0.45);
          transform: scale(1.15);
          display: none;
        }
        .pt-intro-gradient-mobile {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(20, 12, 10, 0) 45%, rgba(20, 12, 10, 0.85) 100%);
        }
        @media (min-width: 768px) {
          .pt-intro-bg-mobile {
            display: none;
          }
          .pt-intro-bg-desktop {
            display: block;
          }
          .pt-intro-gradient-mobile {
            display: none;
          }
        }

        .pt-intro-layout {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
        }
        @media (min-width: 768px) {
          .pt-intro-layout {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 64px;
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 32px;
          }
        }

        .pt-intro-card {
          display: none;
        }
        @media (min-width: 768px) {
          .pt-intro-card {
            display: block;
            flex-shrink: 0;
            height: min(72vh, 720px);
            aspect-ratio: 3 / 4;
            border-radius: 20px;
            border: 6px solid #f7f1ea;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
            transform: rotate(-2deg);
            overflow: hidden;
            animation: ptIntroIn 650ms ease both;
          }
          .pt-intro-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 35%;
            display: block;
          }
        }

        .pt-intro-text {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
          padding: 0 24px max(32px, env(safe-area-inset-bottom, 0px));
          animation: ptIntroIn 650ms ease both;
          animation-delay: 150ms;
        }
        @media (min-width: 768px) {
          .pt-intro-text {
            align-items: flex-start;
            text-align: left;
            max-width: 380px;
            width: auto;
            padding: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-intro-card,
          .pt-intro-text {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        .pt-heart-icon {
          width: 24px;
          height: 24px;
          color: #e8b4a6;
        }
        .pt-intro-title {
          font-family: var(--font-playfair-display), Georgia, serif;
          font-style: italic;
          font-weight: 700;
          font-size: 38px;
          color: #fbf6f1;
          margin: 0;
          text-wrap: balance;
        }
        @media (min-width: 768px) {
          .pt-intro-title {
            font-size: 56px;
          }
        }
        .pt-intro-sub {
          font-family: var(--font-geist-sans), system-ui, sans-serif;
          font-weight: 300;
          font-size: 16px;
          color: rgba(251, 246, 241, 0.8);
          margin: 0 0 4px;
        }
        @media (min-width: 768px) {
          .pt-intro-sub {
            font-size: 18px;
          }
        }
        .pt-open-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 52px;
          padding: 0 36px;
          border: none;
          border-radius: 999px;
          background: #f7f1ea;
          color: #3a2a24;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          max-width: 320px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }
        @media (min-width: 768px) {
          .pt-open-btn {
            width: auto;
            max-width: none;
          }
        }
        .pt-open-btn:hover {
          background: #fffdfa;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.4);
        }
        .pt-open-btn:active {
          transform: translateY(0) scale(0.97);
        }
        .pt-open-btn:focus-visible {
          outline: 3px solid rgba(176, 98, 82, 0.55);
          outline-offset: 3px;
        }
        .pt-btn-heart {
          width: 16px;
          height: 16px;
          color: #b06252;
        }

        /* Carousel screen */
        .pt-carousel-screen {
          background: #1b1310;
        }
        .pt-bg {
          position: absolute;
          inset: 0;
        }
        .pt-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(40px) brightness(0.55);
          transform: scale(1.15);
          transition: opacity 600ms ease;
        }
        .pt-carousel-inner {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: calc(16px + env(safe-area-inset-top, 0px)) 16px calc(16px + env(safe-area-inset-bottom, 0px));
          box-sizing: border-box;
        }

        .pt-stage-wrap {
          position: relative;
          height: calc(100dvh - 140px);
          width: calc((100dvh - 140px) * 0.8);
          max-width: 92vw;
          border-radius: 24px;
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.45);
        }
        .pt-stage {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          overflow: hidden;
        }
        .pt-track {
          position: absolute;
          inset: 0;
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .pt-track::-webkit-scrollbar {
          display: none;
        }
        .pt-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          scroll-snap-align: center;
        }
        .pt-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pt-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 250, 245, 0.88);
          color: #3a2a24;
          font-size: 22px;
          line-height: 44px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: opacity 200ms ease, transform 150ms ease;
        }
        .pt-arrow:hover {
          transform: translateY(-50%) scale(1.06);
        }
        .pt-arrow-left {
          left: -18px;
        }
        .pt-arrow-right {
          right: -18px;
        }
        @media (hover: none), (pointer: coarse), (max-width: 640px) {
          .pt-arrow {
            display: none;
          }
        }

        .pt-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .pt-dot {
          height: 8px;
          border-radius: 4px;
          border: none;
          padding: 0;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.4);
          transition: width 250ms ease, background 250ms ease;
        }
        .pt-dot-active {
          background: #f7f1ea;
        }

        .pt-counter {
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          color: rgba(255, 249, 243, 0.75);
          margin: 0;
        }

        .pt-back-btn {
          background: none;
          border: none;
          padding: 4px 8px;
          color: rgba(255, 249, 243, 0.85);
          font-size: 0.85rem;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
