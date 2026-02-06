import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useGetUser } from "@/lib/api/queries/user-queries";
import { AvatarList } from "@/utils/list";
import { Copy, Settings } from "lucide-react";
import { useConnection } from "wagmi";

function FooterSidebar() {
  const { data: user } = useGetUser();
  const { address } = useConnection();

  if (!user) return null;

  return (
    <Dialog>
      <div className="z-20 h-[70px] p-2 py-4 flex justify-between items-center border-t border-neutral-800 bg-midnight-300/60 backdrop-blur-md">
        <DialogTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-midnight-200 w-full p-2 rounded-md transition">
            <img
              src={
                user.image ||
                "https://i.pinimg.com/564x/a2/8f/1d/a28f1d6e34caa6e0103c3b3eab83d4d3.jpg"
              }
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-medium text-neutral-100 text-sm">
                {user.fullname || "Full Name"}
              </span>
              <span className="text-xs text-neutral-400">@{user.username}</span>
            </div>
            <Button size={"icon"} className="h-6 w-6 ml-auto mr-3">
              <Settings />
            </Button>
          </div>
        </DialogTrigger>
      </div>

      {/* Profile Dialog */}
      <DialogContent className="max-w-lg bg-midnight-300 border border-neutral-800 text-neutral-300 outline-none">
        <DialogTitle className="text-xl text-center p-4 border-b border-neutral-800">
          Your Profile
        </DialogTitle>

        <div className="h-28 flex justify-center items-center gap-6 m-6">
          <div className="h-full gap-2 flex flex-col justify-between items-center">
            <img
              src={
                user.image ||
                "https://i.pinimg.com/564x/a2/8f/1d/a28f1d6e34caa6e0103c3b3eab83d4d3.jpg"
              }
              alt="User Avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex items-center">
              <span className="h-6 px-3 flex justify-start items-center rounded-l-md text-xs border border-neutral-800">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <button className="h-6 rounded-l-none rounded-r-md border border-neutral-800 flex items-center gap-2">
                <Copy className="h-3" />
              </button>
            </div>
          </div>
          <div className="h-full gap-2 flex flex-col justify-between items-center">
            <div className="space-y-2">
              <Input placeholder="Full Name" value={user.fullname} />
              <Input placeholder="Username" value={user.username} />
            </div>
            <Button className="w-full">Save</Button>
          </div>
        </div>

        {/* ADD SELECT PROFILES HERE */}
        <div className="grid grid-cols-7 gap-1 px-12 pb-6">
          {AvatarList.map((avatar, index) => (
            <img
              key={index}
              src={avatar.image}
              alt="avatar"
              className="w-12 h-12 rounded-full cursor-pointer border border-neutral-800 hover:scale-105 transition"
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FooterSidebar;
