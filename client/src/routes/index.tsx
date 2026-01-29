import HeroImage from "@/components/_home/hero-image";
import HeroSection from "@/components/_home/hero-section";
import Navbar from "@/components/layout/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <Navbar />
      <main className="relative min-h-screen w-11/12 border-dashed border-x border-neutral-700 pt-28">
        <HeroSection />
        <HeroImage />
      </main>
    </section>
  );
}
