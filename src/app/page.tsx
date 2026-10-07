import { Navbar } from "@/components/navbar";
import { SnowCanvas } from "@/components/snow-canvas";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Steps } from "@/components/sections/steps";
import { Season } from "@/components/sections/season";
import { Sponsors } from "@/components/sections/sponsors";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SnowCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Steps />
        <Impact />
        <Season />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
