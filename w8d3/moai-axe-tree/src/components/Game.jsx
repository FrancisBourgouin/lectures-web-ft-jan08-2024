import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import {
  declareWinner,
  pickOppositeChoice,
  pickRandomChoice,
} from "../helpers/gameHelpers";

export default function Game(props) {
  const [isCheating, setIsCheating] = useState(true);
  const [gameResult, setGameResult] = useState(undefined); // undefined | tie | computer | player

  const toggleCheating = () => setIsCheating(!isCheating);

  const generateGameResult = (playerChoice) => {
    setTimeout(() => {
      if (isCheating) {
        return setGameResult("computer");
      }

      const computerChoice = pickRandomChoice(Math.random());

      const result = declareWinner(computerChoice, playerChoice);
      setGameResult(result);
    }, 1500);
  };
  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} toggleCheating={toggleCheating} />
        <Player onClick={generateGameResult} />
      </main>
      <Result gameResult={gameResult} />
    </div>
  );
}
