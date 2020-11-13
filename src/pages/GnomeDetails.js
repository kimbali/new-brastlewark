import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout';
import { findGnomeInStorage } from '../global/methods';

export default function GnomeDetails({params}) {
    const [gnomeDetails, setGnomeDetails] = useState(null)

    useEffect(() => {
        const currentGnomeID = parseInt(params.id);
        const currentGnomeDetails = findGnomeInStorage(currentGnomeID);
        setGnomeDetails(currentGnomeDetails);
    }, [params])

    if (!gnomeDetails) return null;
    return (
        <Layout id="gnome-detail">
            <h2>GNOME DETAIL</h2>
            <p>{gnomeDetails.id}</p>
        </Layout>
    )
}
