import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';


const initialGameBoard = [ 
    [null, null, null], 
    [null, null, null], 
    [null, null, null] 
];


function getActivePlayer(gameTurns) {
  var currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function handlePlayerNameChange(symbol, newName){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]: newName
    };
  });
}

function App() {
  const [ players, setPlayers ] = useState({
    'X': "Player 1",
    'O': "Player 2"
  });

  const [ gameTurns, setGameTurns ] = useState([]);

  var activePlayer = getActivePlayer(gameTurns);
  var winningPlayer = null;
  var endedInDraw = gameTurns.length === 9 && !winningPlayer;

  let gameBoard = [...initialGameBoard.map(array => [...array])]; // create a copy of the initial game board

  for(const turn of gameTurns) {
      const { square: { row, col }, player } = turn;
      gameBoard[row][col] = player; // 'X' or 'O'
  }

  for(const combination of WINNING_COMBINATIONS) {
    const symbol1 = gameBoard[combination[0].row][combination[0].column];
    const symbol2 = gameBoard[combination[1].row][combination[1].column];
    const symbol3 = gameBoard[combination[2].row][combination[2].column];

    if(symbol1 && symbol1 === symbol2 && symbol1 === symbol3) {
      // someone has won
      // alert(`Player ${symbol1} wins!`);
      winningPlayer = players[symbol1];
    }
   
  }

  function handlePlayerNameChange(symbol, name) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: name
      };
    });
  }
  
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

  function resetGame() {
    setGameTurns([]);
    winningPlayer = null;
    endedInDraw = false;
    gameBoard = initialGameBoard; // reset the game board
  }

  return (
    <main>
      <div id="game-container">
        {/* PLAYERS */}
          <ol id="players" className="highlight-player">

            <Player nameINIT="Player 1" symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerNameChange}/>
            <Player nameINIT="Player 2" symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerNameChange}/>
            
          </ol>
        {(winningPlayer || endedInDraw) && (
          <GameOver winningPlayer={!endedInDraw ? winningPlayer : "DRAW"} onRestart={resetGame} />
        )}
        {/* GAME BOARD */}
        <GameBoard onSelectCell={handleCellSelect} board={gameBoard}/>

      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
