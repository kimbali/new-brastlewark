import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout';
import { findGnomeByID } from '../global/methods';
import { getStorageJSON } from '../global/methods';
import { storageDataKey } from '../global/config';

export default function GnomeDetails({params}) {
    const [gnomeDetails, setGnomeDetails] = useState(null)

    useEffect(() => {
        const currentGnomeID = parseInt(params.id);
        const gnomesData = getStorageJSON(storageDataKey);
        const currentGnomeDetails = findGnomeByID(currentGnomeID, gnomesData);
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
