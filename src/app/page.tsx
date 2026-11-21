// Temporary homepage: showing only the Carousel.
// To restore the old homepage, import OldHome from "./_old-home/OldHome"
// and render <OldHome /> instead of <Carousel />.
import type { Metadata } from "next";
import { Carousel } from "./para-ti-mi-hermosa/Carousel";

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

export default function Home() {
  return <Carousel />;
}
