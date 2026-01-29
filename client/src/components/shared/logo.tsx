import { cn } from "@/utils/cn";

interface LogoProps {
  withText?: boolean;
  imgClassName?: string;
  className?: string;
}

const Logo = ({ withText = false, imgClassName, className }: LogoProps) => {
  if (!withText) {
    return (
      <div className={cn("flex justify-start items-center gap-2", className)}>
        <img
          src="/assets/icons/logo.svg"
          alt="Logo Image"
          className={cn("h-3", imgClassName)}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={cn("flex justify-start items-center gap-2", className)}>
        <img
          src="/assets/icons/logo.svg"
          alt="Logo Image"
          className={cn("h-5", imgClassName)}
        />
        <span className="tracking-tight text-[23px] text-white font-audiowide">
          Patron
        </span>
      </div>
    </div>
  );
};

export default Logo;
