import { Button } from "../ui/button";
import { User, Vote } from "lucide-react";

interface DaoCardProps {
  cover: string;
  display: string;
  name: string;
  subtitle: string;
  members: number;
  proposals: number;
}

function DaoCard(data: DaoCardProps) {
  return (
    <div className="flex flex-col overflow-hidden border border-neutral-800 bg-midnight-200 rounded-lg w-full cursor-pointer shrink-0">
      <img
        src={data.cover}
        alt="DAO Cover"
        className="h-28 w-full object-cover"
      />

      <div className="flex flex-col flex-grow p-2 py-3 gap-3">
        <div className="flex gap-3 items-center">
          <img
            src={data.display}
            alt="DAO Logo"
            className="h-8 w-8 rounded-full object-cover border-2 border-neutral-500"
          />

          <div>
            <div className="text-neutral-200 font-semibold text-md">
              {data.name.toUpperCase()}
            </div>
            <div className="text-neutral-400 text-xs">
              {data.subtitle.slice(0, 50) + "...."}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <Button size="sm" className="px-4">
            Governance
          </Button>

          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <div className="flex items-center gap-1">
              <span>{data.proposals}</span>
              <Vote size={14} />
            </div>

            <div className="flex items-center gap-1">
              <span>{data.members}</span>
              <User size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoCard;
