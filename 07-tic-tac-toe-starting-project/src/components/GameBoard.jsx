import { useState } from 'react';

const initialGameBoard = [ 
    [null, null, null], 
    [null, null, null], 
    [null, null, null] 
];

export default function GameBoard({ onSelectCell, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleCellSelect(rowInd, colInd) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(row => [...row])];
            updatedBoard[rowInd][colInd] = activePlayerSymbol;
            return updatedBoard;
        });
        onSelectCell();
    }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowInd) => (
                <li key={rowInd}>
                    <ol>
                        {row.map((symbol, colInd) => (
                            <li key={colInd}>
                                <button onClick={() => handleCellSelect(rowInd, colInd)}>{symbol}</button>
                            </li>
                        ))}

                    </ol>
                </li>
            ))}
        </ol>
    );
}