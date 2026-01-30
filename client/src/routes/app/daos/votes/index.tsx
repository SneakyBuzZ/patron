import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/daos/votes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">My Votes</h2>
        <p className="text-neutral-400 text-sm mt-1">
          Track proposals where you have participated in governance.
        </p>
      </div>

      {/* Votes List */}
      <div className="flex flex-col gap-4">
        {MY_VOTES.map((vote) => (
          <VoteCard key={vote.id} {...vote} />
        ))}
      </div>
    </div>
  );
}

interface VoteCardProps {
  image: string;
  title: string;
  dao: string;
  status: string;
  voted: string;
  forVotes: number;
  againstVotes: number;
}

function VoteCard({
  image,
  title,
  dao,
  status,
  voted,
  forVotes,
  againstVotes,
}: VoteCardProps) {
  const totalVotes = forVotes + againstVotes;
  const forPercent = totalVotes === 0 ? 0 : (forVotes / totalVotes) * 100;

  return (
    <div className="border border-neutral-800 rounded-lg bg-midnight-200 hover:bg-midnight-300 transition p-4">
      <div className="flex gap-4 items-start">
        {/* Proposal Image */}
        <img
          src={image}
          alt="proposal"
          className="w-24 h-24 rounded-md object-cover shrink-0"
        />

        {/* Proposal Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg truncate">{title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{dao}</p>
            </div>

            <StatusBadge status={status} />
          </div>

          {/* Vote Stats */}
          <div className="mt-3">
            <div className="w-full h-2 bg-neutral-800 rounded overflow-hidden">
              <div
                className="h-2 bg-neutral-500"
                style={{ width: `${forPercent}%` }}
              />
            </div>

            <div className="flex justify-between text-sm text-neutral-400 mt-2">
              <span>For: {forVotes}</span>
              <span>Against: {againstVotes}</span>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex flex-col justify-between items-end shrink-0 min-w-[130px]">
          <VoteChoice voted={voted} />

          <Button size="sm">View Proposal</Button>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-green-900 text-green-400",
    Passed: "bg-blue-900 text-blue-400",
    Rejected: "bg-red-900 text-red-400",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

function VoteChoice({ voted }: { voted: string }) {
  const styles: Record<string, string> = {
    For: "bg-green-900 text-green-400",
    Against: "bg-red-900 text-red-400",
    Abstain: "bg-neutral-700 text-neutral-300",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${styles[voted]}`}>
      Voted {voted}
    </span>
  );
}

const MY_VOTES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    title: "Treasury Allocation for Builder Grants",
    dao: "OpenGov Collective",
    status: "Active",
    voted: "For",
    forVotes: 420,
    againstVotes: 120,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    title: "Governance Contract Upgrade",
    dao: "Web3 Creators DAO",
    status: "Passed",
    voted: "For",
    forVotes: 820,
    againstVotes: 90,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307",
    title: "Treasury Diversification",
    dao: "Sustainable Future DAO",
    status: "Rejected",
    voted: "Against",
    forVotes: 140,
    againstVotes: 410,
  },
];
