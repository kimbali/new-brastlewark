import React, { useEffect, useState } from 'react';
import { createTradesList } from '../global/methods';

export default function TradesList({ callTradeMembers }) {
    const [tradesList, setTradesList] = useState([])

    useEffect(() => {
        const list = createTradesList();
        setTradesList(list);
    }, [])

    if(tradesList.length === 0) return null;
    return (
        <select onChange={callTradeMembers}>
            <option>Find gnomes by trade</option>
            { tradesList.map(trade => (<option key={`trade-option-${trade}`} value={trade}>{trade}</option>))}
        </select>
    )
}
