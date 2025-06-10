import { useState } from 'react';

export default function InputBox({ parameters, updateParameters }) {

    function handleInputChange(event) {
        const newParameters = {
            ...parameters,       
            [event.target.id]: +event.target.value 
        };
        updateParameters(newParameters);

    }

    return (
        <div id="user-input" className="center">
            <div className="input-group">
                <div>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="number" id="initialInvestment" min="0.00" value={parameters.initialInvestment} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" id="annualInvestment" min="0.00" value={parameters.annualInvestment} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" id="expectedReturn" min="0.00" value={parameters.expectedReturn} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" min="1" value={parameters.duration} onChange={handleInputChange}/>
                </div>
            </div>

        </div>
    );
}