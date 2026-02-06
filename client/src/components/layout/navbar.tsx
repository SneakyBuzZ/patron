import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NAVBAR_LIST } from "@/utils/list";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import ConnectWallet from "./cta/connect-wallet";
import { useConnection } from "wagmi";
import { useSignIn } from "@/lib/api/mutations/auth-mutations";
import Spinner from "@/components/shared/spinner";
import { useEffect } from "react";
import { toast } from "sonner";
import { disconnect } from "@wagmi/core";
import { config } from "@/lib/config/wagmi-config";

const Navbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const { isConnected, address } = useConnection();
  const { mutateAsync: signIn, isPending, isSuccess } = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast("Successfully signed in!");
      navigate({ to: "/app/discover" });
    }
  }, [isSuccess, navigate]);

  return (
    <nav className="absolute z-30 top-5 w-11/12 h-[56px] flex justify-between items-center bg-midnight-400/80 backdrop-blur-md border-dashed border-y border-neutral-700">
      <div className="w-full h-full flex justify-between items-center border-dashed border-x border-neutral-700 px-8">
        <Link to="/" className="w-60">
          <Logo withText />
        </Link>
        <MenuBar />
        <div className="flex justify-end items-center gap-4">
          <div className="hidden md:flex justify-end items-center gap-2 w-60">
            {isConnected && address ? (
              <>
                {isAuthenticated ? (
                  <>
                    <Button onClick={() => navigate({ to: "/app/discover" })}>
                      Application
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant={"outline"}
                      onClick={() => disconnect(config)}
                    >
                      Disconnect
                    </Button>
                    <Button
                      variant={"secondary"}
                      onClick={() => signIn(address)}
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Spinner />
                          Loading
                        </>
                      ) : (
                        <>Sign with Wallet</>
                      )}
                    </Button>
                  </>
                )}
              </>
            ) : (
              <>
                <ConnectWallet />
              </>
            )}
          </div>
        </div>
      </div>
      <img
        src="/assets/icons/plus.svg"
        alt=""
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-3 w-3 opacity-50"
      />

      {/* Top Right */}
      <img
        src="/assets/icons/plus.svg"
        alt=""
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-3 w-3 opacity-50"
      />

      {/* Bottom Left */}
      <img
        src="/assets/icons/plus.svg"
        alt=""
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 h-3 w-3 opacity-50"
      />

      {/* Bottom Right */}
      <img
        src="/assets/icons/plus.svg"
        alt=""
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-3 w-3 opacity-50"
      />
    </nav>
  );
};

const MenuBar = () => {
  const { location } = useRouterState();
  const { pathname } = location;
  return (
    <ul className="w-fit flex justify-center items-center gap-4 p-1 rounded-lg">
      {NAVBAR_LIST.map((item) => (
        <Link
          key={item.id}
          className={`text-md p-1 px-3 ${
            item.href === pathname ? "text-neutral-200" : "text-neutral-400"
          }`}
          to={item.href}
        >
          {item.label}
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
