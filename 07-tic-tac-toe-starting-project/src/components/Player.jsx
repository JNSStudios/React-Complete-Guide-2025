import { useState } from 'react';

export default function Player({nameINIT, symbol, isActive, onNameChange}){

    const [ name, setName ] = useState(nameINIT);
    const [ isEditing, setIsEditing ] = useState(false);

    var playerNameDisplay = <span className="player-name">{name}</span>;

    if (isEditing){
        playerNameDisplay = <input type="text" defaultValue={name} required maxLength={15} onChange={handleChange} />;
    }

    function handleChange(event){
        setName(event.target.value);
        onNameChange(symbol, event.target.value);
    }

    return (
        <li className={isActive ? 'active': ''}>
            <span className="player">
                {playerNameDisplay}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}