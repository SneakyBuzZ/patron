// src/routes/app/games/index.tsx
import GameCard from "@/components/discover/game-card";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

/* ===================================
   Dummy Games Data (replace via API)
=================================== */

const GAMES = [
  {
    cover:
      "https://i.pinimg.com/736x/f3/33/4c/f3334c9149203253dcbd2f369dd02f8e.jpg",
    logo: "https://i.pinimg.com/736x/9f/dd/07/9fdd079015783a9a7c4c582a7458ee1b.jpg",
    title: "Chain Clash",
    subtitle: "Battle players and earn on-chain rewards.",
    activePlayers: 1240,
    rewards: "500 USDC",
  },
  {
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game2",
    title: "Quest DAO",
    subtitle: "Complete governance quests to gain XP.",
    activePlayers: 860,
    rewards: "XP + NFT",
  },
  {
    cover: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game3",
    title: "Block Runner",
    subtitle: "Collect tokens in endless runner missions.",
    activePlayers: 2030,
    rewards: "300 Tokens",
  },
  {
    cover: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game4",
    title: "Treasure Hunt",
    subtitle: "Solve puzzles and unlock rare treasures.",
    activePlayers: 540,
    rewards: "Rare NFT",
  },
];

/* ===================================
   Route
=================================== */

export const Route = createFileRoute("/app/games/")({
  component: GamesPage,
});

/* ===================================
   Page
=================================== */

function GamesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Discover Games
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Play, compete, and earn rewards across Web3 games.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search games..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Trending</Button>
          <Button variant="outline">Most Played</Button>
          <Button variant="outline">New</Button>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] w-full">
        {GAMES.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}
