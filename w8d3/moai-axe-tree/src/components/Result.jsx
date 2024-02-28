export default function Result(props) {
  const { gameResult } = props;
  return (
    <footer>
      {!gameResult && <h2>Waiting for your choice!</h2>}
      {gameResult === "tie" && (
        <h2 data-testid="result-message">Windsor or double Windsor ?</h2>
      )}
      {gameResult === "player" && <h2 data-testid="result-message">Man over machine!</h2>}
      {gameResult === "computer" && (
        <h2 data-testid="result-message">Skynet has risen.</h2>
      )}
    </footer>
  );
}
