import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy, Settings } from "lucide-react";
import { useState } from "react";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function FooterSidebar() {
  // TODO: replace with real user data
  const user = {
    name: "Kaushik",
    address: "0xe5b8c74cE5C016cccFa206E961e8E43d0E505521",
    image:
      "https://i.pinimg.com/564x/99/f3/5a/99f35a4179e659ce63250408e68c8cf6.jpg",
  };

  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    await navigator.clipboard.writeText(user.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="z-20 h-[70px] p-2 py-4 flex justify-between items-center border-t border-neutral-800 bg-midnight-300/60 backdrop-blur-md">
      {/* Profile Row */}
      <div className="flex items-center gap-3">
        <Avatar className="h-7 w-7">
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-medium text-neutral-200 truncate">
            {user.name}
          </span>

          <button
            onClick={copyAddress}
            className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 transition"
          >
            {shortenAddress(user.address)}
            <Copy size={12} />
            {copied && <span className="text-emerald-400 ml-1">Copied</span>}
          </button>
        </div>
      </div>

      <Button size="icon" className="h-7 w-7 mr-2">
        <Settings size={16} />
      </Button>
    </div>
  );
}

export default FooterSidebar;
