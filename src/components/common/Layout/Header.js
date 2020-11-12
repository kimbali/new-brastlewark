import React from 'react'
import { Link } from 'wouter';
import { storageHeroName } from '../../../global/config'
import { getStorageValue } from '../../../global/methods'

export default function Header() {
    const heroName = getStorageValue(storageHeroName);

    return (
        <header>
            <Link to={'/'}><h1>BRASTLEWARK</h1></Link>
            {
                heroName ? <p>{heroName}</p> : null
            }
        </header>
    )
}
