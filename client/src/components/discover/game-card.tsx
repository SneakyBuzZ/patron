import { Button } from "../ui/button";
import { Gamepad2, Trophy } from "lucide-react";

interface GameCardProps {
  cover: string;
  logo: string;
  title: string;
  subtitle: string;
  activePlayers: number;
  rewards?: string;
}

function GameCard(data: GameCardProps) {
  return (
    <div className="flex flex-col overflow-hidden border border-neutral-800 bg-midnight-200 rounded-lg w-full h-60 cursor-pointer shrink-0">
      <img
        src={data.cover}
        alt="Game Cover"
        className="h-28 w-full object-cover"
      />

      <div className="flex flex-1 flex-col flex-grow p-2 py-3 gap-3 justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={data.logo}
            alt="Game Logo"
            className="h-8 w-8 rounded-md object-cover border-2 border-neutral-500"
          />

          <div>
            <div className="text-neutral-200 font-semibold text-md">
              {data.title}
            </div>
            <div className="text-neutral-400 text-xs">
              {data.subtitle.slice(0, 50) + "...."}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <Button size="sm" className="px-4">
            Play
          </Button>

          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <div className="flex items-center gap-1">
              <span>{data.activePlayers}</span>
              <Gamepad2 size={14} />
            </div>

            {data.rewards && (
              <div className="flex items-center gap-1">
                <span>{data.rewards}</span>
                <Trophy size={14} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
