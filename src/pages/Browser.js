import React, { useState } from 'react'
import GnomesList from '../components/GnomesList/GnomesList';
import Layout from '../components/Layout/Layout';
import TradesList from '../components/TradesList';
import { createCouncilOfWisdomList, createWarriorsList, createTradesMembersList, getStorageJSON } from '../global/methods'
import { storageDataKey } from '../global/config'

export default function Browser() {
    const [calledGnomes, setCalledGnomes] = useState([]);
    const [helperText, setHelperText] = useState("Let meet some gnomes!");

    const callCouncilOfWisdom = () => {
        const gnomesData = getStorageJSON(storageDataKey);
        const councilList = createCouncilOfWisdomList(gnomesData);
        setCalledGnomes(councilList);
    }

    const callWarriors = () => {
        const gnomesData = getStorageJSON(storageDataKey);
        const warriorsList = createWarriorsList(gnomesData);
        setCalledGnomes(warriorsList);
    }

    const callTradeMembers = (event) => {
        event.preventDefault();
        const trade = event.target.value;
        if(trade === 'default') setCalledGnomes([])
        const gnomesData = getStorageJSON(storageDataKey);
        const tradeMembers = createTradesMembersList(trade, gnomesData);
        setCalledGnomes(tradeMembers);
    }

    return (
        <Layout id='browser' dialogHelperText={helperText}>
            <h2>Call gnomes</h2>
            <p>
            Gnomes in this town are not really social because they have too much work to do. Thats the reason they can have more than one job and may have few or even no friends at all. This is the perfect town to find workers that can repair succesfully your armour and weapons, they live to work so they will help you thankfully.
            </p>
            <p>
            Find below the workers that you need:
            </p>
            <div className="centered-responsive">
                <button type="button" onClick={callCouncilOfWisdom}>Call the Council of Wisdom</button>
                <button type="button" onClick={callWarriors}>Call the Warriors</button>
                <TradesList callTradeMembers={callTradeMembers}/>
            </div>
            <div>
                <GnomesList list={calledGnomes}/>
            </div>
        </Layout>
    )
}
