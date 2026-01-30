import HeaderSidebar from "@/components/layout/sidebar/header-sidebar";
import ContentSidebar from "@/components/layout/sidebar/content-sidebar";
import FooterSidebar from "./footer-sidebar";

const AppSidebar = () => {
  return (
    <div className="h-full w-[16%] flex flex-col border-r border-r-neutral-800">
      <HeaderSidebar />
      <ContentSidebar />
      <FooterSidebar />
    </div>
  );
};

export default AppSidebar;
