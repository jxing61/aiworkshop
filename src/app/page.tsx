import { Nav, Hero } from "@/app/components/hero";
import { Summary } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Skills } from "@/app/components/skills";
import { Education } from "@/app/components/education";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-canvas">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}