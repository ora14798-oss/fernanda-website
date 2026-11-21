"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { useContactRequest } from "@/context/ContactRequestContext";

const BRAND_NAME = "FERNANDA ESCOBAR";
const INSTAGRAM_HANDLE = "@mafemendieta_24";
const ROLE_LABEL = "SOCIAL MEDIA MANAGER";
const TAGLINE = "SOCIAL MEDIA MANAGEMENT";

const SMM_DESCRIPTION =
  "Content strategy, editorial calendars and measurable growth: every month translates into more reach, more engagement and a growing community.";

const SMM_CONTACT_MESSAGE =
  "Hi Fernanda, I'd like to contact you about managing my social media.";

const MONTH_LABEL = "My average monthly results for clients";

const MONTH_HIGHLIGHTS = [
  {
    value: "28K",
    label: "Reel and post views",
    delta: "+162% vs. previous month",
  },
  {
    value: "68%",
    label: "Reach from non-followers",
    delta: "+203% vs. previous month",
  },
  {
    value: "2.2K",
    label: "New followers",
    delta: "+461 vs. previous month",
  },
];

const DASHBOARD_RANGE = "Jun 7 – Jul 6";

const DASHBOARD_STATS = [
  { label: "Views", value: "153.1K", trendUp: true },
  { label: "Interactions", value: "1.3K", trendUp: true },
  { label: "New followers", value: "473", trendUp: true },
  { label: "Content shared", value: "45", trendUp: false },
];

const parseStatValue = (value: string) => {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: value, decimals: 0 };
  const [, numberPart, suffix] = match;
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  return { target: parseFloat(numberPart), suffix, decimals };
};

const AnimatedStatValue = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const { target, suffix, decimals } = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(`${(0).toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(`${latest.toFixed(decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

const TrendArrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className="shrink-0"
  >
    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SocialMediaManagerSection = () => {
  const { requestContact } = useContactRequest();

  return (
    <section id="social-media-manager" className="w-full px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] bg-[#123A32] px-6 pt-8 pb-10 md:px-14 md:pt-12 md:pb-14"
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

        {/* HEADLINE */}
        <div className="mt-10 text-center md:mt-12">
          <span className="inline-block rotate-[-3deg] font-[family-name:var(--font-script)] text-4xl text-[#E0A94B] sm:text-5xl">
            Strategy
          </span>
          <h2 className="-mt-1 font-[family-name:var(--font-heading)] uppercase leading-[0.9] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl">
            Results
          </h2>
          <span className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {ROLE_LABEL}
          </span>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {SMM_DESCRIPTION}
          </p>

          <button
            type="button"
            onClick={() => requestContact("social-media", SMM_CONTACT_MESSAGE)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E0A94B] px-7 py-3 text-sm font-semibold text-[#123A32] transition hover:bg-[#E0A94B]/85"
          >
            CONTACT FOR SOCIAL MEDIA
          </button>
        </div>

        {/* MONTH HIGHLIGHTS */}
        <div className="mt-12 border-t border-white/10 pt-10 md:mt-16">
          <p className="text-center font-serif text-base italic text-white/70 sm:text-lg">
            {MONTH_LABEL}
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3 md:gap-10">
            {MONTH_HIGHLIGHTS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-heading)] text-4xl text-white sm:text-5xl">
                  <AnimatedStatValue value={stat.value} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs font-semibold text-emerald-400 sm:text-sm">
                  {stat.delta}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL DASHBOARD */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-6 py-6 md:mt-16 md:px-8 md:py-8">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
              Professional dashboard
            </span>
            <span className="text-xs text-white/50 sm:text-sm">
              {DASHBOARD_RANGE}
            </span>
          </div>
          <div className="mt-3 divide-y divide-white/10">
            {DASHBOARD_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-3"
              >
                <span className="text-sm text-white/80 sm:text-base">
                  {stat.label}
                </span>
                <span
                  className={`flex items-center gap-1 text-sm font-semibold sm:text-base ${
                    stat.trendUp ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {stat.trendUp && <TrendArrow />}
                  <AnimatedStatValue value={stat.value} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-10 border-t border-white/10 pt-8 md:mt-14">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#E0A94B] sm:text-sm">
            {TAGLINE}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export { SocialMediaManagerSection };
