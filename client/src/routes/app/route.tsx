import AppSidebar from "@/components/layout/sidebar/app-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="w-full h-screen flex">
      <AppSidebar />
      <main className="flex-1 min-w-0 min-h-0 h-full overflow-auto flex flex-col">
        <Outlet />
      </main>
    </section>
  );
}
