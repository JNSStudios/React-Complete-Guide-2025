

export default function GameOver({ winningPlayer, onRestart }) {

    return (
        <div id="game-over">
            <h2>GAME OVER!</h2>
            <p>{winningPlayer === "DRAW" ? "It's a Draw!" : String(winningPlayer).toUpperCase() + " wins!"}</p>
            <p><button onClick={onRestart}>Play Again</button></p>
        </div>
    );

}