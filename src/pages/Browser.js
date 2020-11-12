import React, { useState } from 'react'
import GnomesList from '../components/common/GnomesList/GnomesList';
import Layout from '../components/common/Layout/Layout';
import TradesList from '../components/common/TradesList';
import { createCouncilOfWisdomList, createWarriorsList, createTradesMembersList } from '../global/methods'

export default function Browser() {
    const [calledGnomes, setCalledGnomes] = useState([]);
    const [helperText, setHelperText] = useState("Let meet some gnomes!");

    const callCouncilOfWisdom = () => {
        const councilList = createCouncilOfWisdomList();
        setCalledGnomes(councilList);
    }

    const callWarriors = () => {
        const warriorsList = createWarriorsList();
        setCalledGnomes(warriorsList);
    }

    const callTradeMembers = (event) => {
        event.preventDefault();
        const trade = event.target.value;
        const tradeMembers = createTradesMembersList(trade);
        setCalledGnomes(tradeMembers);
    }

    return (
        <Layout id='browser' dialogHelperText={helperText}>
            <h2>Assemble members</h2>
            <div className="centered-responsive">
                <button type="button" onClick={callCouncilOfWisdom}>Council of Wisdom</button>
                <button type="button" onClick={callWarriors}>The Warriors</button>
                <TradesList callTradeMembers={callTradeMembers}/>
            </div>
            <div>
                <GnomesList list={calledGnomes}/>
            </div>
        </Layout>
    )
}
