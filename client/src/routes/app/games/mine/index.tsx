import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/games/mine/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Minesweeper4x4 />;
}

type Cell = {
  isMine: boolean;
  revealed: boolean;
};

const GRID_SIZE = 4;
const TOTAL_MINES = 4;

function Minesweeper4x4() {
  const [grid, setGrid] = useState<Cell[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const cells: Cell[] = Array(GRID_SIZE * GRID_SIZE)
      .fill(null)
      .map(() => ({
        isMine: false,
        revealed: false,
      }));

    let minesPlaced = 0;
    while (minesPlaced < TOTAL_MINES) {
      const index = Math.floor(Math.random() * cells.length);
      if (!cells[index].isMine) {
        cells[index].isMine = true;
        minesPlaced++;
      }
    }

    setGrid(cells);
    setGameOver(false);
    setWon(false);
  };

  const revealCell = (index: number) => {
    if (gameOver || grid[index].revealed) return;

    const newGrid = [...grid];
    newGrid[index].revealed = true;

    if (newGrid[index].isMine) {
      setGameOver(true);
      setGrid(newGrid);
      return;
    }

    setGrid(newGrid);
    checkWin(newGrid);
  };

  const checkWin = (cells: Cell[]) => {
    const safeCells = cells.filter((c) => !c.isMine);
    const revealedSafeCells = safeCells.filter((c) => c.revealed);

    if (safeCells.length === revealedSafeCells.length) {
      setWon(true);
      setGameOver(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="flex flex-col items-center gap-6 bg-midnight-200 border border-neutral-800 rounded-xl p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            🧨 Minesweeper
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            Reveal all safe tiles without hitting a mine.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-2">
          {grid.map((cell, index) => (
            <button
              key={index}
              onClick={() => revealCell(index)}
              className={`
                w-14 h-14 rounded-md flex items-center justify-center
                text-lg font-medium transition
                ${
                  cell.revealed
                    ? cell.isMine
                      ? "bg-red-500"
                      : "bg-emerald-500"
                    : "bg-midnight-300 hover:bg-midnight-400"
                }
              `}
            >
              {cell.revealed ? (cell.isMine ? "💣" : "✅") : "?"}
            </button>
          ))}
        </div>

        {/* Game Status */}
        {gameOver && (
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-lg font-medium">
              {won ? "🎉 You Won!" : "💥 Game Over"}
            </h3>

            <Button onClick={resetGame}>Play Again</Button>
          </div>
        )}
      </div>
    </div>
  );
}
