import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { ImagePlus, Settings, UserPen } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/daos/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [isPublic, setIsPublic] = useState(true);
  const [tokenVoting, setTokenVoting] = useState(false);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cover" | "avatar",
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (type === "cover") setCoverPreview(url);
    else setAvatarPreview(url);
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col">
        <h2 className="text-2xl text-neutral-200 font-semibold tracking-tight">
          Create DAO
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Launch a decentralized organization governed by its members.
        </p>
      </div>

      <div className="flex justify-between items-start w-full gap-4">
        {/* LEFT — FORM */}
        <div className="flex flex-col gap-6 w-2/3">
          {/* Uploads */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>DAO Cover Image</Label>
              <label className="flex items-center justify-center h-36 bg-midnight-200 border border-neutral-800 rounded-lg cursor-pointer hover:bg-midnight-300">
                <ImagePlus />
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "cover")}
                />
              </label>
            </div>

            <div className="space-y-2">
              <Label>DAO Logo</Label>
              <label className="flex items-center justify-center h-36 bg-midnight-200 border border-neutral-800 rounded-lg cursor-pointer hover:bg-midnight-300">
                <UserPen />
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, "avatar")}
                />
              </label>
            </div>
          </div>

          {/* DAO Name */}
          <div className="space-y-2">
            <Label>DAO Name</Label>
            <Input
              placeholder="Open Builders DAO"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>DAO Mission</Label>
            <Textarea
              placeholder="Describe the mission and goals of your DAO..."
              className="min-h-36"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Settings */}
          <div className="flex flex-col gap-4 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Settings size={18} />
              <h3 className="font-medium">Governance Settings</h3>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Open Participation</p>
                <p className="text-xs text-neutral-400">
                  Anyone can join governance
                </p>
              </div>
              <Switch
                checked={isPublic}
                onCheckedChange={() => setIsPublic(!isPublic)}
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Token-Based Voting</p>
                <p className="text-xs text-neutral-400">
                  Voting power based on token ownership
                </p>
              </div>
              <Switch
                checked={tokenVoting}
                onCheckedChange={() => setTokenVoting(!tokenVoting)}
              />
            </div>
          </div>

          <Button className="w-full md:w-fit px-8">Create DAO</Button>
        </div>

        {/* RIGHT — LIVE PREVIEW */}
        <div className="hidden w-1/3 lg:flex flex-col gap-4 mt-8 border border-neutral-800 rounded-lg overflow-hidden">
          {coverPreview ? (
            <img src={coverPreview} className="h-40 w-full object-cover" />
          ) : (
            <div className="h-40 bg-midnight-200 flex items-center justify-center text-neutral-500">
              Cover Preview
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
            <h3 className="font-semibold text-lg">{name || "DAO Name"}</h3>
            <p className="text-sm text-neutral-400 mt-1">
              {description || "DAO mission preview"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
