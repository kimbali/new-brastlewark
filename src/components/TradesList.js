import React, { useEffect, useState } from 'react';
import { createTradesList, getStorageJSON } from '../global/methods';
import { storageDataKey } from '../global/config';

export default function TradesList({ callTradeMembers }) {
    const [tradesList, setTradesList] = useState([])

    useEffect(() => {
        const gnomesData = getStorageJSON(storageDataKey);
        const list = createTradesList(gnomesData);
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
