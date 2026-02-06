import CommunityCard from "@/components/discover/community-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAll } from "@/lib/api/community-api";
import { delay } from "@/utils/delay";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

export const Route = createFileRoute("/app/communities/")({
  loader: async ({ context }) => {
    await delay(1000);
    const response = await context.queryClient.ensureQueryData({
      queryKey: ["communities"],
      queryFn: getAll,
    });
    return { data: response };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = Route.useLoaderData();
  console.log("Communities Data:", data);
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold font-firacode tracking-tight">
          Communities
        </h2>
        <p className="text-neutral-400 text-sm mt-1">
          Discover and join communities aligned with your interests.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center gap-2 flex-1 bg-midnight-200 border border-neutral-800 rounded-lg px-3">
          <Search size={18} className="text-neutral-400" />
          <Input
            placeholder="Search communities..."
            className="border-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Most Active</Button>
          <Button variant="outline">Newest</Button>
          <Button variant="outline">Trending</Button>
        </div>
      </div>

      {/* Community Grid */}
      <div className="grid gap-4 grid-cols-4 w-full">
        {data.length > 0 && (
          <>
            {data.map((community, index) => (
              <CommunityCard
                key={index}
                cover={community.banner}
                display={community.avatar}
                name={community.name}
                subtitle={community.description}
                members={community.membersCount || 0}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
