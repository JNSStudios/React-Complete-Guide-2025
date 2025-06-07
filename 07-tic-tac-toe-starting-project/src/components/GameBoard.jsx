import { useState } from 'react';

const initialGameBoard = [ 
    [null, null, null], 
    [null, null, null], 
    [null, null, null] 
];

export default function GameBoard({ onSelectCell, turns}) {

    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square: { row, col }, player } = turn;
        gameBoard[row][col] = player; // 'X' or 'O'
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleCellSelect(rowInd, colInd) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(row => [...row])];
    //         updatedBoard[rowInd][colInd] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectCell();
    // }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowInd) => (
                <li key={rowInd}>
                    <ol>
                        {row.map((symbol, colInd) => (
                            <li key={colInd}>
                                <button onClick={() => onSelectCell(rowInd, colInd)}>{symbol}</button>
                            </li>
                        ))}

                    </ol>
                </li>
            ))}
        </ol>
    );
}