import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Search, Trophy } from "lucide-react";

/* ===================================
   Route
=================================== */

export const Route = createFileRoute("/app/games/leaderboard/")({
  component: LeaderboardPage,
});

/* ===================================
   Page
=================================== */

function LeaderboardPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Games Leaderboard
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Top players across all games ranked by XP.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
        <Search size={18} className="text-neutral-400" />
        <Input
          placeholder="Search players..."
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>

      {/* Leaderboard */}
      <div className="border border-neutral-800 rounded-lg overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-[80px_1fr_150px_150px] px-4 py-3 text-sm text-neutral-400 bg-midnight-300">
          <div>Rank</div>
          <div>Player</div>
          <div>XP</div>
          <div>Games Played</div>
        </div>

        {/* Rows */}
        {LEADERBOARD.map((user) => (
          <LeaderboardRow key={user.rank} {...user} />
        ))}
      </div>
    </div>
  );
}

/* ===================================
   Row Component
=================================== */

interface LeaderboardRowProps {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  gamesPlayed: number;
}

function LeaderboardRow({
  rank,
  name,
  avatar,
  xp,
  gamesPlayed,
}: LeaderboardRowProps) {
  return (
    <div className="grid grid-cols-[80px_1fr_150px_150px] px-4 py-3 items-center border-t border-neutral-800 hover:bg-midnight-300 transition">
      {/* Rank */}
      <div className="flex items-center gap-2 font-medium">
        {rank <= 3 && (
          <Trophy
            size={16}
            className={
              rank === 1
                ? "text-yellow-400"
                : rank === 2
                  ? "text-neutral-300"
                  : "text-amber-600"
            }
          />
        )}
        #{rank}
      </div>

      {/* Player */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>{name}</span>
      </div>

      {/* XP */}
      <div>{xp.toLocaleString()} XP</div>

      {/* Games */}
      <div>{gamesPlayed}</div>
    </div>
  );
}

const LEADERBOARD = [
  {
    rank: 1,
    name: "Kaushik",
    avatar:
      "https://i.pinimg.com/564x/99/f3/5a/99f35a4179e659ce63250408e68c8cf6.jpg",
    xp: 12450,
    gamesPlayed: 82,
  },
  {
    rank: 2,
    name: "BlockMaster",
    avatar:
      "https://i.pinimg.com/564x/db/8a/97/db8a97c6020e869c86f3a073099dbdf8.jpg",
    xp: 11200,
    gamesPlayed: 75,
  },
  {
    rank: 3,
    name: "DAOHunter",
    avatar:
      "https://i.pinimg.com/564x/3a/97/3a/3a973a4179e659ce63250408e68c8cf6.jpg",
    xp: 10420,
    gamesPlayed: 69,
  },
  {
    rank: 4,
    name: "ChainRunner",
    avatar:
      "https://i.pinimg.com/564x/1b/0a/6b/1b0a6b80404935ca8cbb78e731e65041.jpg",
    xp: 9870,
    gamesPlayed: 61,
  },
  {
    rank: 5,
    name: "QuestLord",
    avatar:
      "https://i.pinimg.com/564x/11/12/98/111298b52d6af98c918ebd23a97a60bf.jpg",
    xp: 9400,
    gamesPlayed: 58,
  },
];
