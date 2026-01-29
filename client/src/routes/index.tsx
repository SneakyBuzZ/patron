import HeroImage from "@/components/_home/hero-image";
import HeroSection from "@/components/_home/hero-section";
import Navbar from "@/components/layout/navbar";
import Loading from "@/components/shared/loading";
import { getAuthenticated } from "@/lib/api/user-api";
import { delay } from "@/utils/delay";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async () => {
    const result = await getAuthenticated();
    await delay(1000);
    return { data: result };
  },
  component: HomeComponent,
  pendingComponent: Loading,
});

function HomeComponent() {
  const { data: isAuthenticated } = Route.useLoaderData();
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-midnight-500">
      <Navbar isAuthenticated={isAuthenticated} />

      <main className="relative min-h-screen w-11/12 border-dashed border-x border-neutral-700 pt-28 overflow-hidden">
        <div className="relative z-10">
          <HeroSection />
          <HeroImage />
        </div>
      </main>
    </section>
  );
}
