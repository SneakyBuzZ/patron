import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/games/highlow/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CrashGame />;
}

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type GameResult = "WIN" | "LOSE";

interface CrashGameProps {
  disabled?: boolean;
  onGameEnd?: (result: GameResult, cashOutMultiplier?: number) => void;
  resetSignal?: number | string;
  tickIntervalMs?: number;
  growthRate?: number;
  maxAutoCrash?: number;
}

const CrashGame: React.FC<CrashGameProps> = ({
  disabled = false,
  onGameEnd,
  resetSignal,
  tickIntervalMs = 100,
  growthRate = 0.02,
  maxAutoCrash = 10,
}) => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [crashed, setCrashed] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [running, setRunning] = useState(false);

  const crashPointRef = useRef<number>(1);
  const intervalRef = useRef<number | null>(null);
  const initializedRef = useRef(false);

  const generateCrashPoint = () => {
    const r = Math.random();
    const point = 1 / (1 - r);
    return Math.min(Math.max(1.05, parseFloat(point.toFixed(2))), maxAutoCrash);
  };

  const resetGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    crashPointRef.current = generateCrashPoint();
    setMultiplier(1.0);
    setCrashed(false);
    setCashedOut(false);
    setRunning(false);
  };

  useEffect(() => {
    resetGame();
    initializedRef.current = true;
  }, []);

  useEffect(() => {
    if (!initializedRef.current) return;
    resetGame();
  }, [resetSignal]);

  const startGame = () => {
    if (disabled || running) return;

    setRunning(true);

    intervalRef.current = window.setInterval(() => {
      setMultiplier((prev) => {
        const next = parseFloat((prev + prev * growthRate).toFixed(2));

        if (next >= crashPointRef.current) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setCrashed(true);
          setRunning(false);

          if (!cashedOut) onGameEnd?.("LOSE");

          return crashPointRef.current;
        }

        return next;
      });
    }, tickIntervalMs);
  };

  const cashOut = () => {
    if (!running || crashed || cashedOut) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setCashedOut(true);
    setRunning(false);
    onGameEnd?.("WIN", multiplier);
  };

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div
        className={`flex flex-col items-center gap-6 bg-midnight-200 border border-neutral-800 rounded-xl p-8 shadow-lg w-[320px] ${
          disabled ? "opacity-60" : ""
        }`}
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            🚀 Crash Game
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Cash out before it crashes.
          </p>
        </div>

        {/* Multiplier */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-neutral-400">Multiplier</span>

          <div
            className={`text-5xl font-extrabold mt-2 ${
              crashed
                ? "text-red-500"
                : cashedOut
                  ? "text-emerald-500"
                  : "text-neutral-200"
            }`}
          >
            {multiplier.toFixed(2)}x
          </div>
        </div>

        {/* Buttons */}
        {!running && !crashed && !cashedOut && (
          <Button onClick={startGame} disabled={disabled} className="w-full">
            START
          </Button>
        )}

        {running && (
          <Button
            onClick={cashOut}
            className="w-full bg-emerald-600 hover:bg-emerald-500"
          >
            CASH OUT
          </Button>
        )}

        {(crashed || cashedOut) && (
          <Button onClick={resetGame} variant="outline" className="w-full">
            PLAY AGAIN
          </Button>
        )}

        {/* Status */}
        {crashed && (
          <div className="text-red-500 font-semibold">Crashed 💥</div>
        )}

        {cashedOut && (
          <div className="text-emerald-500 font-semibold">Cashed Out 🎉</div>
        )}
      </div>
    </div>
  );
};

export default CrashGame;
