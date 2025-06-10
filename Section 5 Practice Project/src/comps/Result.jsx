import { useState } from 'react';
import { calculateInvestmentResults } from '../util/investment.js';


export default function Result({ parameters }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = parameters;

    
    const results = calculateInvestmentResults({
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration
    });

    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, idx) => {
                        const totalInterest = results
                            .slice(0, idx + 1)
                            .reduce((sum, r) => sum + r.interest, 0);
                        const investedCapital =
                            parameters.initialInvestment +
                            parameters.annualInvestment * (idx + 1);
                        return (
                            <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>${Math.round(result.valueEndOfYear)}</td>
                                <td>${Math.round(result.interest)}</td>
                                <td>${Math.round(totalInterest)}</td>
                                <td>${Math.round(investedCapital)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}