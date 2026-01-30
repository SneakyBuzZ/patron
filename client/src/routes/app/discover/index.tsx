import CommunityCard from "@/components/discover/community-card";
import DaoCard from "@/components/discover/dao-card";
import GameCard from "@/components/discover/game-card";
import AppSection from "@/components/shared/app-section";
import { createFileRoute } from "@tanstack/react-router";

const CommunityList = [
  {
    cover:
      "https://i.pinimg.com/736x/0a/d0/09/0ad009a7ff76cfd1020063217600fe9c.jpg",
    display:
      "https://i.pinimg.com/736x/9f/4c/25/9f4c2598ee3f12d78d35065639f8e243.jpg",
    name: "The Figmasters",
    subtitle:
      "A community for figma enthusiasts to share and learn about Figma. Community events, tutorials, and resources for all skill levels.",
    members: 1250,
  },
  {
    cover:
      "https://i.pinimg.com/1200x/9a/8b/b7/9a8bb770d385cf503bf28a46ddde5c89.jpg",
    display:
      "https://i.pinimg.com/1200x/5d/2d/74/5d2d74556868a7825d13fabb30911b60.jpg",
    name: "Tech Enthusiasts",
    subtitle:
      "A place to discuss the latest in technology and gadgets. Join us for tech news, reviews, and more.",
    members: 980,
  },
  {
    cover:
      "https://i.pinimg.com/736x/5e/14/69/5e1469e98475c79812f9d9420b9b3897.jpg",
    display:
      "https://i.pinimg.com/736x/6b/4f/f6/6b4ff6c989f7d6932bcc1c274a132a72.jpg",
    name: "Foodies United",
    subtitle:
      "A community for food lovers to share recipes, restaurant reviews, cooking tips, and explore cuisines from around the world.",
    members: 1120,
  },
  {
    cover:
      "https://i.pinimg.com/736x/3b/2d/ed/3b2dedf3f4f4f4f4f4f4f4f4f4f4f4f4.jpg",
    display:
      "https://i.pinimg.com/736x/1c/2e/3f/1c2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a.jpg",
    name: "Travel Buddies",
    subtitle:
      "A community for travel enthusiasts to share experiences, tips, and destination recommendations. Join us for travel stories and adventures.",
    members: 890,
  },
];

const DaoList = [
  {
    cover:
      "https://i.pinimg.com/736x/fe/1c/37/fe1c376072a1a97b8319d880261db2a5.jpg",
    display:
      "https://i.pinimg.com/736x/fa/49/1c/fa491c6017c1ad976ff8e6d20f9a3a8d.jpg",
    name: "OpenGov Collective",
    subtitle:
      "A decentralized governance DAO focused on transparent decision-making, community proposals, and fair voting mechanisms.",
    members: 1450,
    proposals: 32,
  },
  {
    cover:
      "https://i.pinimg.com/736x/38/11/d7/3811d7e9715f4756dfeebdffe2f94ac3.jpg",
    display:
      "https://i.pinimg.com/736x/44/e1/12/44e1127e4d50f17f5d00fd411db26750.jpg",
    name: "Web3 Creators DAO",
    subtitle:
      "A creator-led DAO supporting designers, developers, and writers building open and decentralized digital products.",
    members: 980,
    proposals: 21,
  },
  {
    cover:
      "https://i.pinimg.com/736x/61/60/be/6160bef5f61621cbba138351fd7a6d6c.jpg",
    display:
      "https://i.pinimg.com/736x/a8/e5/c5/a8e5c5f756ad1179e194bc3205d8b144.jpg",
    name: "Sustainable Future DAO",
    subtitle:
      "A DAO dedicated to funding and supporting sustainability, climate action, and green technology initiatives.",
    members: 670,
    proposals: 14,
  },
  {
    cover:
      "https://i.pinimg.com/736x/7c/ed/ae/7cedae1f3f3f4f4f4f4f4f4f4f4f4f4f.jpg",
    display:
      "https://i.pinimg.com/736x/2d/3a/5b/2d3a5b6c7e8f9a0b1c2d3e4f5a6b7c8d.jpg",
    name: "Artisans Guild DAO",
    subtitle:
      "A community-driven DAO supporting artists, craftsmen, and creators through funding, collaboration, and resource sharing.",
    members: 820,
    proposals: 19,
  },
];

const GameList = [
  {
    cover:
      "https://i.pinimg.com/736x/f3/33/4c/f3334c9149203253dcbd2f369dd02f8e.jpg",
    logo: "https://i.pinimg.com/736x/9f/dd/07/9fdd079015783a9a7c4c582a7458ee1b.jpg",
    title: "Chain Clash",
    subtitle: "Battle other players and earn on-chain rewards.",
    activePlayers: 1240,
    rewards: "500 USDC",
  },
  {
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game2",
    title: "Quest DAO",
    subtitle: "Complete governance quests to gain XP and badges.",
    activePlayers: 860,
    rewards: "XP + NFT",
  },
  {
    cover: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game3",
    title: "Block Runner",
    subtitle: "Endless runner collecting tokens on-chain.",
    activePlayers: 2030,
    rewards: "300 Tokens",
  },
  {
    cover: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=game4",
    title: "Treasure Hunt",
    subtitle: "Solve puzzles to unlock community treasures.",
    activePlayers: 540,
    rewards: "Rare NFT",
  },
];

export const Route = createFileRoute("/app/discover/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppSection>
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-xl font-semibold font-firacode tracking-tighter">
          Popular Communities
        </h3>

        <div className="grid gap-4 grid-cols-4 w-full">
          {CommunityList.map((community, index) => (
            <div key={index} className="shrink-0">
              <CommunityCard {...community} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-xl font-semibold font-firacode tracking-tighter">
          Popular DAOs
        </h3>

        <div className="grid gap-4 grid-cols-4 w-full">
          {DaoList.map((dao, index) => (
            <div key={index} className="shrink-0">
              <DaoCard {...dao} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-xl font-semibold font-firacode tracking-tighter">
          Popular Games
        </h3>

        <div className="grid gap-4 grid-cols-4 w-full">
          {GameList.map((game, index) => (
            <div key={index} className="shrink-0">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </AppSection>
  );
}
