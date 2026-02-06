import Logo from "@/components/shared/logo";

const HeaderSidebar = () => {
  return (
    <div className="z-20 h-[60px] flex items-center border-b border-b-neutral-800 p-2 px-4">
      <div className="flex items-center w-full gap-2">
        <Logo withText imgClassName="h-5" textClassName="text-lg" />
      </div>
    </div>
  );
};

export default HeaderSidebar;
