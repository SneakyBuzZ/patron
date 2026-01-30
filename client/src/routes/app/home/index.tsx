import { createFileRoute } from "@tanstack/react-router";

const PROFILE = {
  address: "0x92fa3B1c5A9eCDE3219123456789abcdef123456",
  username: "Kaushik",
  avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=wallet-user",
  joinDate: "Jan 2026",
};

const IDENTITY_STATUS = {
  communities: 12,
  daos: 4,
  roles: ["Member", "Moderator"],
};

const PROOFS = [
  "Contributor Badge",
  "DAO Governance Pass",
  "Hackathon Winner NFT",
];

const DAO_ACTIVITY = {
  proposals: ["Treasury Allocation Vote", "Upgrade Governance Contract"],
  votes: ["Budget Proposal #12", "Token Emission Change"],
};

const COMMUNITIES = ["Lumini Builders", "Open Web3 Devs", "Hackathon India"];

const GAMIFICATION = {
  level: 5,
  xp: 640,
  nextLevelXp: 1000,
  achievement: "Top Contributor",
  rank: 18,
};

const ACTIVITY = [
  "Joined Lumini Builders",
  "Voted on Treasury Proposal",
  "Earned Contributor Badge",
  "Promoted to Moderator",
];

const shortenAddress = (addr: string) =>
  addr.slice(0, 6) + "..." + addr.slice(-4);

const copyAddress = () => navigator.clipboard.writeText(PROFILE.address);

export const Route = createFileRoute("/app/home/")({
  component: RouteComponent,
});

export default function RouteComponent() {
  const xpPercent = (GAMIFICATION.xp / GAMIFICATION.nextLevelXp) * 100;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* PROFILE CARD */}
      <section className="bg-zinc-900 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={PROFILE.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <h2 className="text-xl font-semibold">{PROFILE.username}</h2>

            <p className="text-sm text-zinc-400">
              {shortenAddress(PROFILE.address)}
            </p>

            <p className="text-xs text-zinc-500">Joined {PROFILE.joinDate}</p>
          </div>
        </div>

        <button
          onClick={copyAddress}
          className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-500"
        >
          Copy Wallet
        </button>
      </section>

      {/* IDENTITY STATUS */}
      <section className="grid md:grid-cols-3 gap-4">
        <StatCard
          label="Communities Joined"
          value={IDENTITY_STATUS.communities}
        />
        <StatCard label="DAOs Joined" value={IDENTITY_STATUS.daos} />
        <StatCard label="Roles" value={IDENTITY_STATUS.roles.join(", ")} />
      </section>

      {/* PROOFS */}
      <section className="bg-zinc-900 p-6 rounded-xl">
        <Header title="Credentials / Proofs" />
        <ul className="space-y-2 mt-4">
          {PROOFS.map((proof) => (
            <li key={proof} className="bg-zinc-800 px-4 py-2 rounded-md">
              {proof}
            </li>
          ))}
        </ul>

        <button className="mt-4 text-indigo-400">View all →</button>
      </section>

      {/* DAO ACTIVITY */}
      <section className="bg-zinc-900 p-6 rounded-xl">
        <Header title="DAO Activity" />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <InfoBlock title="Active Proposals" items={DAO_ACTIVITY.proposals} />
          <InfoBlock title="Recent Votes" items={DAO_ACTIVITY.votes} />
        </div>

        <button className="mt-4 text-indigo-400">Go to Governance →</button>
      </section>

      {/* COMMUNITIES */}
      <section className="bg-zinc-900 p-6 rounded-xl">
        <Header title="Communities Snapshot" />

        <div className="flex flex-wrap gap-2 mt-4">
          {COMMUNITIES.map((c) => (
            <span key={c} className="px-3 py-1 bg-zinc-800 rounded-md">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* GAMIFICATION */}
      <section className="bg-zinc-900 p-6 rounded-xl">
        <Header title="Gamification Snapshot" />

        <div className="mt-4 space-y-2">
          <p>Level {GAMIFICATION.level}</p>

          <div className="w-full bg-zinc-800 h-3 rounded">
            <div
              className="h-3 bg-indigo-600 rounded"
              style={{ width: `${xpPercent}%` }}
            />
          </div>

          <p className="text-sm text-zinc-400">
            Achievement: {GAMIFICATION.achievement}
          </p>

          <p className="text-sm text-zinc-400">
            Leaderboard Rank: #{GAMIFICATION.rank}
          </p>
        </div>
      </section>

      {/* ACTIVITY FEED */}
      <section className="bg-zinc-900 p-6 rounded-xl">
        <Header title="Recent Activity" />

        <ul className="space-y-2 mt-4">
          {ACTIVITY.map((a) => (
            <li key={a} className="bg-zinc-800 px-4 py-2 rounded-md">
              {a}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/* =========================
   REUSABLE COMPONENTS
========================= */

function Header({ title }: { title: string }) {
  return (
    <h3 className="text-lg font-semibold border-b border-zinc-800 pb-2">
      {title}
    </h3>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      <p className="text-zinc-400">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-medium mb-2">{title}</p>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i} className="bg-zinc-800 px-4 py-2 rounded-md">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
