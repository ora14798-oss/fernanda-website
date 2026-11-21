import type { Metadata } from "next";
import { Carousel } from "./Carousel";

export const metadata: Metadata = {
  title: "Para ti, mi hermosa",
  description: "🤍",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Para ti, mi hermosa",
    description: "🤍",
    images: ["/para-ti/cover.jpg"],
  },
};

export default function ParaTiPage() {
  return <Carousel />;
}
