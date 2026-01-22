"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const MainFeatureSection = () => {
  const focusAreas = [
    {
      title: "Roles que busco",
      description:
        "Project Management, asistencia administrativa, operaciones, soporte remoto y roles de coordinación.",
    },
    {
      title: "Modalidad de trabajo",
      description:
        "Abierta a oportunidades remotas, híbridas o internacionales.",
    },
    {
      title: "Experiencia profesional",
      description:
        "Gestión administrativa, coordinación de tareas, atención al cliente y soporte operativo.",
    },
    {
      title: "Fortalezas clave",
      description:
        "Organización, comunicación efectiva, seguimiento de procesos y cumplimiento de objetivos.",
    },
  ];

  return (
    <section className="relative w-screen py-28 overflow-hidden">
      
      {/* WHITE TOP LINE */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white z-20" />

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dvietxyfp/video/upload/v1769028823/ps3-wave.1920x1080_sm3omw.mp4"
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <h2 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl">
          Sobre mí & oportunidades
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-lg font-medium leading-relaxed text-white">
          Actualmente estoy explorando nuevas oportunidades laborales y
          agradezco mucho su apoyo.
          <br /><br />
          He trabajado como{" "}
          <strong>Administrative & Virtual Assistant</strong>, colaborando con
          equipos y clientes en la organización de procesos, seguimiento de
          proyectos y soporte operativo.
          <br /><br />
          Si deseas conectar o conocer una oportunidad alineada con mi perfil,
          estaré encantada de conversar.
        </p>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl border-2 border-black bg-white/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-lg font-serif font-bold text-black">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium leading-relaxed text-gray-800">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <motion.a
            href="https://wa.link/tn3jqy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 15px 35px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Button className="rounded-full bg-green-500 px-12 py-6 text-lg font-bold text-white hover:bg-green-600">
              Contactar por WhatsApp
            </Button>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export { MainFeatureSection };
