import CommunityCard from "@/components/discover/community-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/app/communities/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold font-firacode tracking-tight">
          Communities
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Discover and join communities aligned with your interests.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search communities..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Most Active</Button>
          <Button variant="outline">Newest</Button>
          <Button variant="outline">Trending</Button>
        </div>
      </div>

      {/* Community Grid */}
      <div className="grid gap-4 grid-cols-4 w-full">
        {CommunityList.map((community, index) => (
          <CommunityCard key={index} {...community} />
        ))}
      </div>
    </div>
  );
}

const CommunityList = [
  {
    cover:
      "https://i.pinimg.com/736x/0a/d0/09/0ad009a7ff76cfd1020063217600fe9c.jpg",
    display:
      "https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg",
    name: "The Figmasters",
    subtitle:
      "A community for figma enthusiasts to share and learn about Figma.",
    members: 1250,
  },
  {
    cover:
      "https://i.pinimg.com/1200x/9a/8b/b7/9a8bb770d385cf503bf28a46ddde5c89.jpg",
    display:
      "https://i.pinimg.com/1200x/5d/2d/74/5d2d74556868a7825d13fabb30911b60.jpg",
    name: "Tech Enthusiasts",
    subtitle: "A place to discuss the latest in technology and gadgets.",
    members: 980,
  },
  {
    cover:
      "https://i.pinimg.com/736x/5e/14/69/5e1469e98475c79812f9d9420b9b3897.jpg",
    display:
      "https://i.pinimg.com/736x/6b/4f/f6/6b4ff6c989f7d6932bcc1c274a132a72.jpg",
    name: "Foodies United",
    subtitle: "Share recipes, reviews, and explore cuisines worldwide.",
    members: 1120,
  },
  {
    cover:
      "https://i.pinimg.com/736x/f1/76/c2/f176c27a350abfaaf1a50637e2b2fc90.jpg",
    display:
      "https://i.pinimg.com/736x/6d/0c/18/6d0c18a28c6090f963a1ccb3b7b03b12.jpg",
    name: "Startup Builders",
    subtitle: "Founders, developers, and designers building startups together.",
    members: 2030,
  },
  {
    cover:
      "https://i.pinimg.com/1200x/9a/8b/b7/9a8bb770d385cf503bf28a46ddde5c89.jpg",
    display:
      "https://i.pinimg.com/1200x/5d/2d/74/5d2d74556868a7825d13fabb30911b60.jpg",
    name: "Tech Enthusiasts",
    subtitle: "A place to discuss the latest in technology and gadgets.",
    members: 980,
  },
  {
    cover:
      "https://i.pinimg.com/736x/5e/14/69/5e1469e98475c79812f9d9420b9b3897.jpg",
    display:
      "https://i.pinimg.com/736x/6b/4f/f6/6b4ff6c989f7d6932bcc1c274a132a72.jpg",
    name: "Foodies United",
    subtitle: "Share recipes, reviews, and explore cuisines worldwide.",
    members: 1120,
  },
  {
    cover:
      "https://i.pinimg.com/736x/f1/76/c2/f176c27a350abfaaf1a50637e2b2fc90.jpg",
    display:
      "https://i.pinimg.com/736x/6d/0c/18/6d0c18a28c6090f963a1ccb3b7b03b12.jpg",
    name: "Startup Builders",
    subtitle: "Founders, developers, and designers building startups together.",
    members: 2030,
  },
];
