import AppSection from "@/components/shared/app-section";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app/communities")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AppSection>
      <Outlet />
    </AppSection>
  );
}
