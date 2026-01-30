import NavbarBreadcrumb from "./breadcrumb";

interface AppSectionProps {
  children: React.ReactNode;
}

function AppSection({ children }: AppSectionProps) {
  return (
    <section className="relative w-full justify-center items-start p-7 pt-16 flex flex-col gap-6 min-w-0">
      <NavbarBreadcrumb />
      {children}
    </section>
  );
}

export default AppSection;
