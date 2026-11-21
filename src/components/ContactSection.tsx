"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContactRequest } from "@/context/ContactRequestContext";

const BRAND_NAME = "FERNANDA ESCOBAR";
const INSTAGRAM_HANDLE = "@mafemendieta_24";
const TAGLINE = "WRITE TO ME";

const CONTACT_EMAIL = "fernandaescobar1824@gmail.com";
const CONTACT_PHOTO_URL = "/images/contact%20section.jpeg";

const CONTACT_DESCRIPTION =
  "Tell me what project you have in mind and I'll gladly get back to you by email.";

const TOPICS = [
  { id: "general", label: "General inquiry" },
  { id: "modeling", label: "Modeling" },
  { id: "social-media", label: "Social Media Manager" },
  { id: "business", label: "Business Woman / Other" },
];

const ContactSection = () => {
  const { request } = useContactRequest();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0].id);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (request.requestId === 0) return;
    setTopic(request.topic);
    setMessage(request.message);
  }, [request]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const topicLabel = TOPICS.find((t) => t.id === topic)?.label ?? "";
    const subject = `Contact from the website – ${topicLabel}`;
    const body = `Name: ${name}\nEmail: ${email}\nReason: ${topicLabel}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="w-full px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] bg-[#1B2340] px-6 pt-8 pb-10 md:px-14 md:pt-12 md:pb-14"
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

        {/* HEADER: PHOTO + FORM */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          {/* PHOTO */}
          <div className="mx-auto flex w-full max-w-sm items-center justify-center md:mx-0 md:max-w-none">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${CONTACT_PHOTO_URL}')` }}
              />
            </div>
          </div>

          {/* TEXT + FORM */}
          <div>
            <span className="inline-block rotate-[-3deg] font-[family-name:var(--font-script)] text-4xl text-[#E0A94B] sm:text-5xl">
              Let&apos;s Talk
            </span>
            <h2 className="-mt-1 font-[family-name:var(--font-heading)] uppercase leading-[0.9] tracking-tight text-white text-5xl sm:text-6xl md:text-7xl">
              Contact
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
              {CONTACT_DESCRIPTION}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-white/60"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#E0A94B]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-white/60"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#E0A94B]"
                  />
                </div>
              </div>

              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/60">
                  What would you like to contact me about?
                </span>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((t) => {
                    const isActive = topic === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTopic(t.id)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                          isActive
                            ? "bg-[#E0A94B] text-[#1B2340]"
                            : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-white/60"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me how I can help you..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#E0A94B]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#E0A94B] px-7 py-3 text-sm font-semibold text-[#1B2340] transition hover:bg-[#E0A94B]/85"
              >
                SEND MESSAGE
              </button>
            </form>
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

export { ContactSection };
