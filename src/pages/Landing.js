import React, { useEffect, useState } from 'react'
import HeroNameInput from '../components/common/HeroNameInput'
import { Link } from "wouter";
import Layout from '../components/common/Layout/Layout';
import { setStorageValue, getStorageValue } from '../global/methods';
import { storageHeroName } from '../global/config';

export default function Landing() {
    const [heroName, setHeroName] = useState('');

    useEffect(() => {
       const heroNameInStorage = getStorageValue(storageHeroName)
       if (heroNameInStorage) setHeroName(heroNameInStorage)
    }, [])

    const handleSubmit = (name) => {
        setHeroName(name);
        setStorageValue(storageHeroName, name);
    }

    const changeHeroName = () => {
        setStorageValue(storageHeroName, '');
        setHeroName('');
    }

    return (
        <Layout id="landing" heroName={heroName}>
            <h2>LANDING</h2>    
            { 
                heroName ? <button type="button" onClick={changeHeroName}>Change your name</button> 
                        : <HeroNameInput formSubmit={handleSubmit} />
            }

            {
                heroName ? <Link to={`/search`}>Meet Brastlewartienses</Link> : <p>Enter a hero name please!</p>
            }
        </Layout>
    )
}
