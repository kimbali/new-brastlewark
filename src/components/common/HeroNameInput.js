import React, { useState } from 'react';

export default function HeroNameInput({ formSubmit }) {
    const [heroName, setHeroName] = useState(null);

    const handleName = (event) => {
        setHeroName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formSubmit(heroName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your hero name
                <input onChange={handleName} placeholder="Hero"/>
            </label>
            <button type="submit">Enter</button>
        </form>
    )
}
