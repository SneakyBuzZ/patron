// src/routes/app/profile/index.tsx
import AppSection from "@/components/shared/app-section";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

/* ===================================
   Dummy Wallet User Data
   Replace later with API/wallet data
=================================== */

const PROFILE = {
  name: "Kaushik",
  avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=wallet",
  wallet: "0x92fa3B1c5A9eCDE3219123456789abcdef123456",
  joinDate: "Jan 2026",
  xp: 12450,
  communities: 6,
  daos: 3,
  gamesPlayed: 82,
  achievements: 12,
};

const RECENT_ACTIVITY = [
  "Voted on Treasury Allocation proposal",
  "Joined Web3 Builders community",
  "Earned DAO Challenger badge",
  "Completed Governance Quiz",
];

/* ===================================
   Route
=================================== */

export const Route = createFileRoute("/app/profile/")({
  component: ProfilePage,
});

/* ===================================
   Page
=================================== */

function ProfilePage() {
  const shortened =
    PROFILE.wallet.slice(0, 6) + "..." + PROFILE.wallet.slice(-4);

  const copyWallet = () => navigator.clipboard.writeText(PROFILE.wallet);

  return (
    <AppSection>
      <div className="flex flex-col gap-8 w-full">
        {/* PROFILE HEADER */}
        <div className="border border-neutral-800 rounded-lg p-6 bg-midnight-200 flex flex-col md:flex-row gap-6 md:items-center">
          <img
            src={PROFILE.avatar}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{PROFILE.name}</h2>

            <div className="flex items-center gap-2 mt-2 text-neutral-400">
              <span>{shortened}</span>
              <button onClick={copyWallet}>
                <Copy size={16} />
              </button>
            </div>

            <p className="text-sm text-neutral-500 mt-1">
              Joined {PROFILE.joinDate}
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Stat value={PROFILE.xp} label="XP" />
            <Stat value={PROFILE.communities} label="Communities" />
            <Stat value={PROFILE.daos} label="DAOs" />
          </div>
        </div>

        {/* GAMING & GOVERNANCE STATS */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
          <StatCard label="Games Played" value={PROFILE.gamesPlayed} />

          <StatCard label="Achievements Earned" value={PROFILE.achievements} />

          <StatCard label="Governance Votes" value="18" />

          <StatCard label="Proposals Created" value="4" />
        </div>

        {/* RECENT ACTIVITY */}
        <div className="border border-neutral-800 rounded-lg bg-midnight-200 p-6">
          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

          <div className="flex flex-col gap-3">
            {RECENT_ACTIVITY.map((activity, i) => (
              <div
                key={i}
                className="bg-midnight-300 px-4 py-3 rounded-md text-sm text-neutral-400"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 flex-wrap">
          <Button>View My Votes</Button>
          <Button variant="outline">Achievements</Button>
          <Button variant="outline">Leaderboard</Button>
        </div>
      </div>
    </AppSection>
  );
}

/* ===================================
   Small Components
=================================== */

interface StatProps {
  value: number | string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-neutral-400">{label}</p>
    </div>
  );
}

function StatCard({ label, value }: StatProps) {
  return (
    <div className="border border-neutral-800 rounded-lg bg-midnight-200 px-5 py-4">
      <p className="text-neutral-400 text-sm">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}
