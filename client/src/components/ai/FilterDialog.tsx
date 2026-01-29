import Lottie from 'lottie-react';
import AIFilter from '../../lib/animation/ai.json';

interface FilterDialogProps {
  open: boolean;
}

const FilterDialog = ({ open }: FilterDialogProps) => {
  if (!open) return null;
  return (
    <div className="h-screen z-50 absolute w-full bg-transparent backdrop-blur-sm inset-0 flex justify-center items-center">
      <div className="bg-neutral-900 rounded-lg w-1/3 p-4 border border-neutral-800 shadow-sm flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <h1 className="text-4xl font-audio-wide font-bold text-neutral-100">AI Filter</h1>
          <p className="text-sm w-4/5 font-fira-code text-PATRON_TEXT_WHITE_SECONDARY text-center">
            This feature is currently under development. Please stay tuned for updates.
          </p>
          <Lottie className="m-4" animationData={AIFilter} style={{ width: 150, height: 150 }} />
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
