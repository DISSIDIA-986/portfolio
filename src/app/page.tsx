import Hero from "@/components/sections/Hero";
import HowIThink from "@/components/sections/HowIThink";
import HowIBuild from "@/components/sections/HowIBuild";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Exploring from "@/components/sections/Exploring";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HowIThink />
      <HowIBuild />
      <Experience />
      <Projects />
      <Exploring />
      <Skills />
      <Contact />
    </>
  );
}
