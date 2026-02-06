import CommunityCard from "@/components/discover/community-card";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/app/communities/joined/")({
  component: RouteComponent,
});

function RouteComponent() {
  const hasCommunities = JoinedCommunities.length > 0;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold font-firacode tracking-tight">
          Joined Communities
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Communities you're currently part of.
        </p>
      </div>

      {/* Search */}
      {hasCommunities && (
        <div className="flex items-center gap-2 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search joined communities..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>
      )}

      {/* Grid */}
      {hasCommunities ? (
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] w-full">
          {JoinedCommunities.map((community, index) => (
            <CommunityCard key={index} {...community} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-neutral-400 gap-3">
      <div className="text-lg font-medium text-neutral-300">
        No communities joined yet
      </div>
      <p className="text-sm max-w-md">
        Join communities to collaborate, learn, and participate in discussions
        with like-minded people.
      </p>
    </div>
  );
}

const JoinedCommunities = [
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
      "https://i.pinimg.com/736x/5e/14/69/5e1469e98475c79812f9d9420b9b3897.jpg",
    display:
      "https://i.pinimg.com/736x/6b/4f/f6/6b4ff6c989f7d6932bcc1c274a132a72.jpg",
    name: "Foodies United",
    subtitle: "Share recipes, reviews, and explore cuisines worldwide.",
    members: 1120,
  },
];
