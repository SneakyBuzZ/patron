import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import OrElement from "@/components/ui/or-element";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useConnectors } from "wagmi";

function ConnectWallet() {
  const [close, setClose] = useState(false);
  const connectors = useConnectors();

  const handleConnect = (connectorId: string) => {
    const connector = connectors.find((c) => c.id === connectorId);
    if (connector) {
      connector.connect();
    }
    setClose(false);
  };

  return (
    <Dialog open={close} onOpenChange={setClose}>
      <DialogTrigger asChild>
        <Button>Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[405px] p-0 gap-4">
        <DialogHeader className="w-full py-4">
          <DialogTitle className="text-xl border-b py-3 px-4">
            Connect Your Wallet
          </DialogTitle>
          <DialogDescription className="px-4 pt-2 text-sm text-neutral-500">
            Connect your cryptocurrency wallet to access exclusive features and
            services.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 px-4 pb-4">
          {connectors.map((connector) => (
            <Button
              key={connector.id}
              onClick={() => handleConnect(connector.id)}
              className="h-10 w-full flex items-center gap-2 justify-between text-md text-neutral-200 bg-midnight-200/70 border border-neutral-800/70 hover:bg-midnight-100/80"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={connector.icon}
                  alt={connector.name}
                  className="h-5 w-5"
                />
                {connector.name}
              </div>
              <ChevronRight />
            </Button>
          ))}
          <OrElement />
          <div className="flex flex-col items-start gap-2">
            <Input placeholder="you@mail.com" />
            <Button
              variant={"bright"}
              className="w-full bg-neutral-400 border-white/20 hover:bg-neutral-300"
            >
              Submit
            </Button>
            <span className="text-xs text-neutral-600 px-1">
              Email login is currently in beta. Please use a wallet for the best
            </span>
          </div>
        </div>
        <DialogFooter className="p-4 flex flex-col gap-2 bg-midnight-200/80 border-t border-t-neutral-800">
          <span className="text-xs text-neutral-600 text-center">
            By connecting your wallet, you agree to our Terms of Service and
            Privacy Policy.
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConnectWallet;
