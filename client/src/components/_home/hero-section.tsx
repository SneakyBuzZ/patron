import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="rounded-full text-sm text-neutral-100 bg-midnight-100 border border-neutral-600 mb-4 px-5 p-1">
        Welcome to Patron Beta! ✨
      </span>
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-6">
        <h1 className="text-[2.8rem] font-medium text-neutral-300 font-audiowide tracking-tight leading-none z-20">
          Build your <span className="text-amethyst">Communities</span>, share
          you <span className="text-mustard">Passion</span> <br /> and{" "}
          <span className="text-cyan">Connect</span>, with{" "}
          <span className="text-white">Patron</span>
        </h1>
        <p className="text-lg font-extralight text-neutral-400 z-20">
          Its a platform designed to foster meaningful connections and spark
          discussions within <br />
          groups focused on shared passions.
        </p>
        <div className="flex justify-center items-center gap-2 z-20">
          <Button>Learn More</Button>
          <Button variant={"seafoam"}>
            Get Started
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
