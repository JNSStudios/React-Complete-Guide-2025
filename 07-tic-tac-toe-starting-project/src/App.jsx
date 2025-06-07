import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

function getActivePlayer(gameTurns) {
  var currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [ gameTurns, setGameTurns ] = useState([]);

  var activePlayer = getActivePlayer(gameTurns);
  
  function handleCellSelect(rowInd, colInd) {
    setGameTurns(prevTurns => {
      let currentPlayer = getActivePlayer(prevTurns);
      const updatedTurns = [{
        square: {
          row: rowInd,
          col: colInd
        },
        player: currentPlayer
      }, ...prevTurns];
      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
          <ol id="players" className="highlight-player">

            <Player nameINIT="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player nameINIT="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
            
          </ol>

        {/* GAME BOARD */}
        <GameBoard onSelectCell={handleCellSelect} turns={gameTurns}/>

      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
