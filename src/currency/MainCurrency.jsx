import React, { useState, useEffect } from "react";
import CurrencyConverter from "./CurrencyConverter";

function Main() {
    const [ratesData, setRatesData] = useState(null);

    useEffect(() => {
        fetch("https://open.er-api.com/v6/latest/USD")
            .then((res) => res.json())
            .then((data) => setRatesData(data.rates))
            .catch((error) => console.error("Error fetching rates:", error));
    }, []);

    return (
        <div>
            <h1 className="text-2xl">Currency Converter App</h1>
            {ratesData ? <CurrencyConverter rates={ratesData} /> : <p>Loading rates...</p>}
        </div>
    );
}

export default Main;
