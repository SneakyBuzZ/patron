import { Button } from "../ui/button";
import { User } from "lucide-react";

interface CommunityCardProps {
  cover: string;
  display: string;
  name: string;
  subtitle: string;
  members: number;
}

function CommunityCard(data: CommunityCardProps) {
  return (
    <div className="flex flex-col overflow-hidden border border-neutral-800 bg-midnight-200 rounded-lg w-full cursor-pointer shrink-0">
      <img
        src={data.cover}
        alt={"Community Cover Image"}
        className="h-28 w-full object-cover"
      />
      <div className="flex flex-col flex-grow items-start justify-between p-2 py-3 gap-3">
        <div className="flex justify-center items-center gap-3">
          <img
            src={data.display}
            alt={"Community Display Image"}
            className="h-8 w-8 rounded-full object-cover border-2 border-neutral-500"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="text-neutral-200 font-dmsans text-md font-semibold text-start">
              {data.name.toUpperCase()}
            </div>
            <div className="text-neutral-400 text-xs text-start">
              {data.subtitle.slice(0, 50) + "...."}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex justify-start items-center gap-2">
            <Button size={"sm"} className="flex items-center p-2 px-4">
              Visit
            </Button>
          </div>
          <div className="text-sm text-neutral-400 text-start px-2 flex justify-center items-center gap-1">
            <span>{data.members} </span>
            <User size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
