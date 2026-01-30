import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@radix-ui/react-progress";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/app/daos/proposals/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl text-neutral-200 font-semibold tracking-tight">
            Active Proposals
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Participate in governance decisions across DAOs.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
            <Search size={18} className="text-neutral-400" />
            <Input
              placeholder="Search proposals..."
              className="border-none bg-transparent focus-visible:ring-0"
            />
          </div>

          {/* DAO Selector */}
          <select className="bg-midnight-200 border border-neutral-800 rounded-lg px-3 py-2">
            {DAO_OPTIONS.map((dao) => (
              <option key={dao}>{dao}</option>
            ))}
          </select>

          {/* Filters */}
          <div className="flex gap-2">
            <Button variant="outline">Active</Button>
            <Button variant="outline">Passed</Button>
            <Button variant="outline">Rejected</Button>
          </div>
        </div>
      </div>

      {/* Proposal List */}
      <div className="flex flex-col gap-4">
        {PROPOSALS.map((proposal) => (
          <ProposalCard key={proposal.id} {...proposal} />
        ))}
      </div>
    </div>
  );
}

interface ProposalCardProps {
  image: string;
  title: string;
  daoDisplay: string;
  dao: string;
  description: string;
  status: string;
  timeRemaining: string;
  forVotes: number;
  againstVotes: number;
}

function ProposalCard({
  image,
  title,
  daoDisplay,
  dao,
  description,
  status,
  timeRemaining,
  forVotes,
  againstVotes,
}: ProposalCardProps) {
  const totalVotes = forVotes + againstVotes;
  const forPercent = totalVotes === 0 ? 0 : (forVotes / totalVotes) * 100;

  return (
    <div className="border border-neutral-800 rounded-lg bg-midnight-200 hover:bg-midnight-300 transition p-4">
      <div className="flex gap-4 items-start">
        {/* Proposal Image */}
        <img
          src={image}
          alt="proposal"
          className="w-32 h-32 rounded-md object-cover shrink-0"
        />

        {/* Proposal Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={daoDisplay}
                alt={title}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-md truncate text-neutral-200">
                  {title}
                </h3>
                <p className="text-sm text-neutral-400">{dao}</p>
              </div>
            </div>

            <StatusBadge status={status} />
          </div>

          <p className="text-neutral-400 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          <div className="mt-3 space-y-2">
            <Progress value={forPercent} />

            <div className="flex justify-between text-sm text-neutral-400">
              <span>For: {forVotes}</span>
              <span>Against: {againstVotes}</span>
            </div>
          </div>
        </div>

        {/* Proposal Stats */}
        <div className="flex flex-col justify-between items-end shrink-0 min-w-[130px]">
          <span className="text-xs text-neutral-500">{timeRemaining}</span>

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

const DAO_OPTIONS = [
  "All DAOs",
  "OpenGov Collective",
  "Web3 Creators DAO",
  "Sustainable Future DAO",
];

const PROPOSALS = [
  {
    id: 1,
    daoDisplay:
      "https://i.pinimg.com/736x/fe/1c/37/fe1c376072a1a97b8319d880261db2a5.jpg",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    title: "Treasury Allocation for Builder Grants",
    dao: "OpenGov Collective",
    description:
      "Allocate treasury funds to support ecosystem builders and open-source contributors.",
    status: "Active",
    timeRemaining: "2 days left",
    forVotes: 420,
    againstVotes: 120,
  },
  {
    id: 2,
    daoDisplay: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    title: "Governance Contract Upgrade",
    dao: "Web3 Creators DAO",
    description:
      "Upgrade governance contract to support delegated voting and batching.",
    status: "Passed",
    timeRemaining: "Ended",
    forVotes: 820,
    againstVotes: 90,
  },
  {
    id: 3,
    daoDisplay: "https://images.unsplash.com/photo-1621504450181-5d356f61d307",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307",
    title: "Treasury Diversification",
    dao: "Sustainable Future DAO",
    description:
      "Diversify treasury holdings to reduce market volatility risk.",
    status: "Rejected",
    timeRemaining: "Ended",
    forVotes: 140,
    againstVotes: 410,
  },
];
