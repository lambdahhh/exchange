import React, {useEffect, useState} from 'react';
import CbrService from "../../services/cbr-service";

const Rates = () => {
    const [rates, setRates] = useState([]);
    const service = new CbrService();

    useEffect(() => {
        service
            .getRates()
            .then(rates => {
                setRates(rates);
            })
    }, [])

    const renderRates = rates.map(rate => {
        return <li key={rate.CharCode}>{rate.CharCode}</li>
    })

    return (
        <ul>
            {renderRates}
        </ul>
    )
}

export default Rates;

/*
CharCode: "AUD"
ID: "R01010"
Name: "Австралийский доллар"
Nominal: 1
NumCode: "036"
Previous: 38.0768
Value: 36.8529
 */
