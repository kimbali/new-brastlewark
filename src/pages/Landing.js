import React, { useEffect, useState } from 'react'
import HeroNameInput from '../components/common/HeroNameInput'
import { Link, useLocation } from "wouter";
import Layout from '../components/common/Layout/Layout';
import { setStorageValue, getStorageValue } from '../global/methods';
import { storageHeroName } from '../global/config';

export default function Landing() {
    const [heroName, setHeroName] = useState('');
    const [helperText, setHelperText] = useState("Let's anoncunce to the inhabitants that a hero has arrived at town!");
    const [, setLocation] = useLocation();

    useEffect(() => {
       const heroNameInStorage = getStorageValue(storageHeroName)
       if (heroNameInStorage) setHeroName(heroNameInStorage)
    }, [])

    const handleSubmit = (name) => {
        setHeroName(name);
        setStorageValue(storageHeroName, name);
        setLocation('/search');
    }

    const changeHeroName = () => {
        setStorageValue(storageHeroName, '');
        setHeroName('');
        setHelperText('Choose the right one this time!')
    }

    return (
        <Layout id="landing" dialogHelperText={helperText}>
            <h2>Welcome to Brastlewark</h2>
            { 
                heroName ? <section>
                                <p>Would you like to change your name, {heroName}?</p>
                                <button type="button" onClick={changeHeroName}>Change name</button> 
                                <Link to={`/search`}>Find Brastlewartienses</Link>
                            </section>  
                        :   <section>
                                <p>Which hero are you?</p>  
                                <HeroNameInput formSubmit={handleSubmit} />
                            </section>
            }
        </Layout>
    )
}
