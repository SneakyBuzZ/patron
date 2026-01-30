import DaoCard from "@/components/discover/dao-card";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Route = createFileRoute("/app/daos/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold font-firacode tracking-tight">
          Discover DAOs
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Participate in decentralized governance and shape communities.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search DAOs..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Most Active</Button>
          <Button variant="outline">Trending</Button>
          <Button variant="outline">New</Button>
        </div>
      </div>

      {/* DAO Grid */}
      <div className="grid gap-3 grid-cols-4 w-full">
        {DaoList.map((dao, index) => (
          <DaoCard key={index} {...dao} />
        ))}
      </div>
    </div>
  );
}

const DaoList = [
  {
    cover:
      "https://i.pinimg.com/736x/fe/1c/37/fe1c376072a1a97b8319d880261db2a5.jpg",
    display:
      "https://i.pinimg.com/736x/fa/49/1c/fa491c6017c1ad976ff8e6d20f9a3a8d.jpg",
    name: "OpenGov Collective",
    subtitle: "Transparent governance powered by community proposals.",
    members: 1450,
    proposals: 32,
  },
  {
    cover:
      "https://i.pinimg.com/736x/38/11/d7/3811d7e9715f4756dfeebdffe2f94ac3.jpg",
    display:
      "https://i.pinimg.com/736x/44/e1/12/44e1127e4d50f17f5d00fd411db26750.jpg",
    name: "Web3 Creators DAO",
    subtitle: "Supporting builders and creators across Web3.",
    members: 980,
    proposals: 21,
  },
  {
    cover:
      "https://i.pinimg.com/736x/61/60/be/6160bef5f61621cbba138351fd7a6d6c.jpg",
    display:
      "https://i.pinimg.com/736x/a8/e5/c5/a8e5c5f756ad1179e194bc3205d8b144.jpg",
    name: "Sustainable Future DAO",
    subtitle: "Funding climate-positive initiatives worldwide.",
    members: 670,
    proposals: 14,
  },
];
