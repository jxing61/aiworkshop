import { Nav, Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Skills } from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}