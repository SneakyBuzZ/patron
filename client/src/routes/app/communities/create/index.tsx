import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCreateCommunity } from "@/lib/api/mutations/community-mutations";
import { UserPen } from "lucide-react";
import { writeContract } from "@wagmi/core";
import { config } from "@/lib/config/wagmi-config";
import { CONTRACT_ABI, DEPLOYED_CONTRACT_ADDRESS } from "@/utils/constant";

const DEFAULT_BANNER =
  "https://i.pinimg.com/1200x/32/3e/6b/323e6b482c0fcbc38e71fc1788e581e2.jpg";
const DEFAULT_AVATAR =
  "https://i.pinimg.com/1200x/c5/d7/46/c5d7462a672e07ee74f81ef1a5ee518a.jpg";

export const Route = createFileRoute("/app/communities/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mutateAsync: createCommunity } = useCreateCommunity();

  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "banner" | "avatar",
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (type === "banner") {
      setBannerPreview(url);
      setBannerFile(file);
    } else {
      setAvatarPreview(url);
      setAvatarFile(file);
    }
  }

  async function handleCreateCommunity() {
    try {
      console.log("STARTED");
      setLoading(true);

      const metadataCid = "QmYwAPJzv5CZsnA2345s3Xf2nemtYgPpHdWEz79ojWnPbdG";

      await writeContract(config, {
        abi: CONTRACT_ABI,
        address: DEPLOYED_CONTRACT_ADDRESS,
        functionName: "mintCommunity",
        args: [metadataCid],
      });

      await await createCommunity({
        name,
        description,
        banner: DEFAULT_BANNER,
        avatar: DEFAULT_AVATAR,
        metadataCid: "0x12435123411343465432wefghjmmnbvfds",
        txHash: "0x1238735486745654334rfg567ytr",
      });
      console.log("Community created successfully in backend");
    } catch (err) {
      console.error(err);
      alert("Failed to create community");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl text-neutral-200 font-semibold tracking-tight">
          Create Community
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Build a space where people collaborate, discuss and grow together.
        </p>
      </div>
      <div className="flex justify-between items-start w-full gap-4">
        <div className="flex flex-col gap-6 w-2/3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Banner Image</Label>
              <label className="flex items-center justify-center bg-midnight-200 border border-neutral-800 rounded-lg cursor-pointer hover:bg-midnight-300">
                <span className="text-sm p-2 ">Upload Banner</span>
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "banner")}
                />
              </label>
            </div>
            <div className="space-y-2">
              <Label>Community Avatar</Label>
              <label className="flex items-center justify-center bg-midnight-200 border border-neutral-800 rounded-lg cursor-pointer hover:bg-midnight-300">
                <span className="text-sm p-2 ">Upload Avatar</span>
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "avatar")}
                />
              </label>
            </div>
          </div>
          {/* Name */}
          <div className="space-y-2">
            <Label>Community Name</Label>
            <Input
              placeholder="Lumini Builders"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Describe your community..."
              className="min-h-36"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            disabled={loading}
            onClick={handleCreateCommunity}
            className="w-full md:w-fit px-8"
          >
            {loading ? "Uploading..." : "Create Community"}
          </Button>
        </div>
        {/* Preview */}
        <div className="hidden w-1/3 lg:flex flex-col gap-4 mt-8 border border-neutral-800 rounded-lg overflow-hidden">
          {bannerPreview ? (
            <img src={bannerPreview} className="h-40 w-full object-cover" />
          ) : (
            <div className="h-40 bg-midnight-200 flex items-center justify-center text-neutral-500">
              Banner Preview
            </div>
          )}
          <div className="px-4">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                className="h-20 w-20 rounded-full border-4 border-black -translate-y-10 object-cover"
              />
            ) : (
              <div className="h-20 w-20 rounded-full bg-midnight-200 border-4 border-black -translate-y-10 flex items-center justify-center">
                <UserPen size={20} />
              </div>
            )}
          </div>
          <div className="px-4 pb-4 -mt-6">
            <h3 className="font-semibold text-lg">
              {name || "Community Name"}
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              {description || "Community description preview"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
