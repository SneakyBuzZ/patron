import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "@tanstack/react-router";

const NavbarBreadcrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");

  return (
    <Breadcrumb className="hidden md:flex items-center absolute top-4 left-4">
      <BreadcrumbList>
        {paths.map((path, index) => {
          return (
            <BreadcrumbLink
              className="cursor-pointer flex gap-2 items-center"
              key={index}
            >
              <span className="text-md font-semibold text-neutral-300">
                {path.toLocaleUpperCase()}
              </span>
              {index != 0 && <BreadcrumbSeparator />}
            </BreadcrumbLink>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavbarBreadcrumb;
