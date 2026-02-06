import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trophy, Lock } from "lucide-react";

export const Route = createFileRoute("/app/games/achievements/")({
  component: AchievementsPage,
});

/* ===================================
   Page
=================================== */

function AchievementsPage() {
  const unlockedCount = ACHIEVEMENTS.filter((a) => a.unlocked).length;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Achievements</h2>
        <p className="text-neutral-400 text-sm mt-1">
          Track milestones and rewards earned across games.
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex gap-4 flex-wrap">
        <StatCard
          label="Unlocked"
          value={`${unlockedCount}/${ACHIEVEMENTS.length}`}
        />

        <StatCard label="Total XP Earned" value="820 XP" />

        <StatCard label="Rare Rewards" value="3 NFTs" />
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
        <Search size={18} className="text-neutral-400" />
        <Input
          placeholder="Search achievements..."
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.id} {...achievement} />
        ))}
      </div>
    </div>
  );
}

/* ===================================
   Achievement Card
=================================== */

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress: number;
  reward: string;
}

function AchievementCard({
  title,
  description,
  icon,
  unlocked,
  progress,
  reward,
}: AchievementCardProps) {
  return (
    <div
      className={`border border-neutral-800 rounded-lg p-4 flex flex-col gap-3 transition ${
        unlocked
          ? "bg-midnight-200 hover:bg-midnight-300"
          : "bg-midnight-300 opacity-80"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="text-3xl">{icon}</div>

          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-neutral-400">{description}</p>
          </div>
        </div>

        {!unlocked && <Lock size={18} className="text-neutral-500" />}
      </div>

      {/* Progress */}
      {!unlocked && (
        <div className="space-y-1">
          <div className="w-full h-2 bg-neutral-800 rounded overflow-hidden">
            <div
              className="h-2 bg-indigo-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-neutral-400">{progress}% complete</p>
        </div>
      )}

      {/* Reward */}
      <div className="flex justify-between items-center text-sm text-neutral-400">
        <div className="flex items-center gap-1">
          <Trophy size={14} />
          Reward: {reward}
        </div>

        {unlocked && <Button size="sm">View Reward</Button>}
      </div>
    </div>
  );
}

/* ===================================
   Stat Card
=================================== */
interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-midnight-200 border border-neutral-800 rounded-lg px-4 py-3 min-w-[160px]">
      <p className="text-neutral-400 text-sm">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "First Victory",
    description: "Win your first game match.",
    icon: "🏆",
    unlocked: true,
    progress: 100,
    reward: "50 XP",
  },
  {
    id: 2,
    title: "DAO Challenger",
    description: "Participate in 10 governance quizzes.",
    icon: "⚖️",
    unlocked: true,
    progress: 100,
    reward: "Badge NFT",
  },
  {
    id: 3,
    title: "Game Marathon",
    description: "Play 50 games across platforms.",
    icon: "🎮",
    unlocked: false,
    progress: 70,
    reward: "150 XP",
  },
  {
    id: 4,
    title: "Quiz Master",
    description: "Score above 80% in 20 quizzes.",
    icon: "🧠",
    unlocked: false,
    progress: 35,
    reward: "Rare NFT",
  },
];
