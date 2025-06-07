import { useState } from 'react';

export default function Log({ turns }) {



    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>
                    <span className="log-entry">
                        {`Player ${turn.player} selected (${turn.square.row}, ${turn.square.col})`}
                    </span>
                </li>
            ))}
            {turns.length === 0 && <li><span className="log-entry">No moves yet!</span></li>}
            
            
        </ol> 
    );
}