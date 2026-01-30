import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Trophy, Users } from "lucide-react";

/* ===================================
   Dummy Data (replace via API)
=================================== */

const QUIZZES = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Web3 Basics Quiz",
    subtitle: "Test your blockchain fundamentals knowledge.",
    participants: 1240,
    difficulty: "Easy",
    reward: "50 XP",
  },
  {
    id: 2,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    title: "DAO Governance Challenge",
    subtitle: "How well do you understand DAO voting systems?",
    participants: 820,
    difficulty: "Medium",
    reward: "NFT Badge",
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "Smart Contract Quiz",
    subtitle: "Identify vulnerabilities and contract logic.",
    participants: 540,
    difficulty: "Hard",
    reward: "100 XP",
  },
];

/* ===================================
   Route
=================================== */

export const Route = createFileRoute("/app/games/quizzes/")({
  component: QuizzesPage,
});

/* ===================================
   Page
=================================== */

function QuizzesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Discover Quizzes
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Test your knowledge and earn rewards.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search quizzes..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Easy</Button>
          <Button variant="outline">Medium</Button>
          <Button variant="outline">Hard</Button>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] w-full">
        {QUIZZES.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  );
}

/* ===================================
   Quiz Card
=================================== */

interface QuizCardProps {
  cover: string;
  title: string;
  subtitle: string;
  participants: number;
  difficulty: string;
  reward: string;
}

function QuizCard({
  cover,
  title,
  subtitle,
  participants,
  difficulty,
  reward,
}: QuizCardProps) {
  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden bg-midnight-200 hover:bg-midnight-300 transition cursor-pointer">
      <img src={cover} alt="quiz cover" className="h-32 w-full object-cover" />

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-neutral-400 mt-1 line-clamp-2">
            {subtitle}
          </p>
        </div>

        <div className="flex justify-between items-center text-sm text-neutral-400">
          <div className="flex items-center gap-1">
            <Users size={14} />
            {participants}
          </div>

          <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
            {difficulty}
          </span>

          <div className="flex items-center gap-1">
            <Trophy size={14} />
            {reward}
          </div>
        </div>

        <Button size="sm" className="w-full">
          Start Quiz
        </Button>
      </div>
    </div>
  );
}
