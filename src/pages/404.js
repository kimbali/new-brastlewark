import React from 'react';
import GNOME_IN_BATH from '../images/gnome-in-bath.png';
import { Link } from 'wouter';

export default function ErrorPage() {
    return (
        <>
            <img src={GNOME_IN_BATH} alt="Gnome in bathroom"/>
            <p>This is not the way</p>
            <Link className="button" to="/search">Go back to Brastlewark</Link>
        </>
    )
}
