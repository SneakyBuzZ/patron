import { cn } from "@/utils/cn";
import { SIDEBAR_LIST } from "@/utils/list";
import { Link, useLocation } from "@tanstack/react-router";

const ContentSidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ul className="h-full flex flex-col justify-start items-start gap-6 py-6 px-4 overflow-y-auto scrollbar-hide border-b border-b-neutral-800 w-full">
        {SIDEBAR_LIST.map((each) => {
          return (
            <li key={each.title} className="w-full flex flex-col">
              <h3
                className={cn(
                  " text-xs font-medium",
                  each.children.filter((each) => each.path === pathname)
                    .length > 0
                    ? "text-neutral-200"
                    : "text-neutral-300",
                )}
              >
                {each.title.toUpperCase()}
              </h3>

              {each.children && (
                <ul className="w-full border-l-2 border-neutral-800 flex flex-col gap-2 mt-2">
                  {each.children.map((child) => (
                    <li key={child.title}>
                      <Link
                        to={child.path}
                        className={cn(
                          "text-sm text-neutral-500 hover:text-neutral-400 flex items-center gap-2 px-3 py-1 rounded-r-md ",
                          pathname === child.path
                            ? "bg-midnight-100 text-neutral-200 border-y border-r"
                            : "text-neutral-500 bg-none ",
                        )}
                      >
                        <child.icon size={14} />
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContentSidebar;
