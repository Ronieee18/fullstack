import React, { useState } from "react";
import "./CurrencyConverter.css"; // Import your CSS file

function CurrencyConverter({ rates }) {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const convertCurrency = () => {
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];
        const convertedAmount = (amount * toRate) / fromRate;
        return convertedAmount.toFixed(2);
    };

    return (
        <div className="currency-converter-container">
            <h1 className="converter-title ">Currency Converter</h1>
            <div className="input-container">
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className="select-container">
                <label>
                    From Currency:
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="select-container">
                <label>
                    To Currency:
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {Object.keys(rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="result-container">
                <p className="conversion-result">{`${amount} ${fromCurrency} = ${convertCurrency()} ${toCurrency}`}</p>
            </div>
        </div>
    );
}

export default CurrencyConverter;
