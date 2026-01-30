import { SiInstagram, SiLinkedin, SiX } from "react-icons/si";

import {
  BadgePlus,
  BetweenHorizontalStart,
  Gamepad2,
  Landmark,
  List,
  Telescope,
  ThumbsUp,
  TrendingUp,
  Users,
  BadgeHelp,
  Star,
} from "lucide-react";

export const AvatarList = [
  {
    id: 1,
    name: "Alice",
    image:
      "https://i.pinimg.com/564x/99/f3/5a/99f35a4179e659ce63250408e68c8cf6.jpg",
  },
  {
    id: 2,
    name: "Bob",
    image:
      "https://i.pinimg.com/564x/db/8a/97/db8a97c6020e869c86f3a073099dbdf8.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    image:
      "https://i.pinimg.com/564x/a2/8f/1d/a28f1d6e34caa6e0103c3b3eab83d4d3.jpg",
  },
  {
    id: 4,
    name: "David",
    image:
      "https://i.pinimg.com/564x/1b/0a/6b/1b0a6b80404935ca8cbb78e731e65041.jpg",
  },
  {
    id: 5,
    name: "Eve",
    image:
      "https://i.pinimg.com/564x/11/12/98/111298b52d6af98c918ebd23a97a60bf.jpg",
  },
  {
    id: 6,
    name: "Frank",
    image:
      "https://i.pinimg.com/736x/e7/83/47/e783474bcedfd09b96a689fdfda0f6b6.jpg",
  },
  {
    id: 7,
    name: "Grace",
    image:
      "https://i.pinimg.com/736x/b3/d4/8d/b3d48da0f5fd543cacf6b21bebdc4579.jpg",
  },
  {
    id: 8,
    name: "Henry",
    image:
      "https://i.pinimg.com/736x/88/95/1b/88951b14c1692cab712f77a692567182.jpg",
  },
  {
    id: 9,
    name: "Ian",
    image:
      "https://i.pinimg.com/564x/2f/98/17/2f98172f0a31207b3b67b076e2bcc534.jpg",
  },
  {
    id: 10,
    name: "Jack",
    image:
      "https://i.pinimg.com/736x/60/cb/81/60cb8167adc7b1b61ee1eba8a4c98af3.jpg",
  },
  {
    id: 11,
    name: "Kate",
    image:
      "https://i.pinimg.com/564x/9b/b0/66/9bb066864b0d225c324551ee2c83125d.jpg",
  },
];

export const featureGrid = [
  {
    id: 1,
    title: "Decentralized Identity Management",
    description:
      "Foster dynamic and secure interactions within a decentralized, blockchain-powered community.",
  },
  {
    id: 2,
    title: "End-to-End Encryption",
    description:
      "Ensure user privacy with encrypted communication and data-sharing protocols throughout the platform.",
  },
  {
    id: 3,
    title: "Immutable Record Keeping",
    description:
      "Store all interactions and transactions on a tamper-proof blockchain ledger for complete transparency.",
  },
  {
    id: 4,
    title: "Smart Contract Integration",
    description:
      "Automate and streamline community governance and transactions with self-executing smart contracts.",
  },
  {
    id: 5,
    title: "Tokenized Reputation System",
    description:
      "Reward positive contributions with tokens, allowing users to build trust and influence within the community.",
  },
  {
    id: 6,
    title: "Privacy-Focused Data Sharing",
    description:
      "Provide users with full control over their data, enabling secure and permission-based sharing.",
  },
];

export const SIDEBAR_LIST = [
  {
    title: "General",
    children: [
      {
        title: "Discover",
        path: "/app/discover",
        icon: Telescope,
      },
    ],
  },
  {
    title: "Communitiy",
    children: [
      {
        title: "Communities",
        path: "/app/communities",
        icon: Users,
      },
      {
        title: "Joined",
        path: "/app/communities/joined",
        icon: BetweenHorizontalStart,
      },
      {
        title: "Create",
        path: "/app/communities/create",
        icon: BadgePlus,
      },
    ],
  },
  {
    title: "Organizations",
    children: [
      {
        title: "DAOs",
        path: "/app/daos",
        icon: List,
      },
      {
        title: "Proposals",
        path: "/app/daos/proposals",
        icon: Landmark,
      },
      {
        title: "Create",
        path: "/app/daos/create",
        icon: BadgePlus,
      },
      {
        title: "Votes",
        path: "/app/daos/votes",
        icon: ThumbsUp,
      },
    ],
  },
  {
    title: "Challenges",
    children: [
      {
        title: "Games",
        path: "/app/games",
        icon: Gamepad2,
      },
      {
        title: "Quizzes",
        path: "/app/games/quizzes",
        icon: BadgeHelp,
      },
      {
        title: "Leaderboard",
        path: "/app/games/leaderboard",
        icon: TrendingUp,
      },
      {
        title: "Achievements",
        path: "/app/games/achievements",
        icon: Star,
      },
    ],
  },
];

export const FOOTER_LISTS = [
  {
    id: 1,
    title: "Popular",
    subMenu: [
      {
        id: 1,
        name: "javascript",
        route: "/",
      },
      {
        id: 2,
        name: "react",
        route: "/docs",
      },
      {
        id: 3,
        name: "nextjs",
        route: "/docs/nextjs",
      },
      {
        id: 4,
        name: "tailwindcss",
        route: "/docs/tailwindcss",
      },
    ],
  },
  {
    id: 2,
    title: "Nxtgen",
    subMenu: [
      {
        id: 1,
        name: "What is Nxtgen?",
        route: "/docs/getting-started",
      },
      {
        id: 2,
        name: "why Nxtgen?",
        route: "/docs/api",
      },
      {
        id: 3,
        name: "How to contribute?",
        route: "/docs/contribute",
      },
    ],
  },
  {
    id: 3,
    title: "Community",
    subMenu: [
      {
        id: 1,
        name: "GitHub",
        route: "https://github.com",
      },
      {
        id: 3,
        name: "Twitter",
        route: "https://twitter.com",
      },
      {
        id: 7,
        name: "Instagram",
        route: "https://instagram.com",
      },
    ],
  },
  {
    id: 4,
    title: "Legal",
    subMenu: [
      {
        id: 1,
        name: "Privacy Policy",
        route: "/privacy",
      },
      {
        id: 2,
        name: "Terms of Service",
        route: "/terms",
      },
    ],
  },
];

export const NAVBAR_LIST = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "NFTs",
    href: "/nfts",
  },
  {
    id: 3,
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    id: 4,
    label: "Trading",
    href: "/trading",
  },
  {
    id: 5,
    label: "Rewards",
    href: "/rewards",
  },
];

export const SOCIAL_LISTS = [
  {
    id: 2,
    url: "https://www.twitter.com",
    component: SiX,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    component: SiLinkedin,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    component: SiInstagram,
  },
];
