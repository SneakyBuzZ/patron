import ProfileBadge from '@/components/shared/ProfileBadge';
import { Link } from 'react-router-dom';
import AddressBadge from '@/components/shared/AddressBadge';
import { ToggleTheme } from '@/components/shared/ToggleTheme';
import { cn } from '@/lib/utils';
import { useAccount, useDisconnect } from 'wagmi';
import { Button } from '../ui/button';

interface NavBarType {
  showAddress?: boolean;
  className?: string;
}

const NavBar = ({ showAddress = false, className }: NavBarType) => {
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();

  console.log('address', address);

  const handleDisconnect = async () => {
    await disconnectAsync();
    console.log('DISCONNECTED: ');
  };

  return (
    <nav
      className={cn(
        'flex glassmorphism sticky top-0 items-center justify-between w-full border-b border-neutral-300 dark:border-b-PATRON_BORDER_COLOR px-10 h-[8%]',
        className
      )}
    >
      <div className="flex justify-center items-center gap-2">
        <Link to={'/'} className="flex justify-start items-center gap-2">
          <img
            className="h-5 invert dark:invert-0 select-none pointer-events-none"
            src="/logo.svg"
            alt="logo"
          />
          <h1 className="text-xl font-audio-wide text-black dark:text-white">Patron</h1>
        </Link>

        {address && address.length > 0 && showAddress && <AddressBadge address={address} />}
      </div>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        {address && address.length > 0 && showAddress && (
          <Button
            onClick={handleDisconnect}
            className="h-7 px-2 text-xs bg-neutral-800 border border-neutral-700 text-neutral-400"
          >
            Disconnect
          </Button>
        )}
        {address && address.length > 0 && showAddress && <ProfileBadge />}
      </div>
    </nav>
  );
};

export default NavBar;
