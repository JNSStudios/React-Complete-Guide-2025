import { useState } from 'react';

export default function GameBoard({ onSelectCell, board}) {

    

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
            {board.map((row, rowInd) => (
                <li key={rowInd}>
                    <ol>
                        {row.map((symbol, colInd) => (
                            <li key={colInd}>
                                <button onClick={() => onSelectCell(rowInd, colInd)} disabled={symbol !== null ? true : false} >{symbol}</button>
                            </li>
                        ))}

                    </ol>
                </li>
            ))}
        </ol>
    );
}