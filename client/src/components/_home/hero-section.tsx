import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="rounded-full text-sm text-neutral-400 bg-midnight-200 border border-midnight-100 mb-4 px-5 p-1">
        Welcome to Patron Beta!
      </span>
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-6">
        <h1 className="text-[2.8rem] font-medium text-neutral-300 font-audiowide tracking-tight leading-none">
          Build your <span className="text-amethyst">Communities</span>, share
          you <span className="text-mustard">Passion</span> <br /> and{" "}
          <span className="text-cyan">Connect</span>, with{" "}
          <span className="text-white">Patron</span>
        </h1>
        <p className="text-md font-extralight text-neutral-500">
          Its a platform designed to foster meaningful connections and spark
          <br />
          discussions within groups focused on shared passions.
        </p>
        <div className="flex justify-center items-center gap-2">
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
