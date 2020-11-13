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
        <form className="input-form" onSubmit={handleSubmit}>
            <label>
                <input autoFocus onChange={handleName} placeholder="Enter you hero name"/>
            </label>
            <button disabled={!heroName} type="submit">Introduce myself!</button>
        </form>
    )
}
