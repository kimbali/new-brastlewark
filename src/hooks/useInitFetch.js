import React, { useEffect } from 'react'
import getData from '../services/getData';
import { setStorageJSON } from '../global/methods';
import { storageDataKey } from '../global/config';

export default function useInitFetch() {
    useEffect(() => {
        getData().then(data => {
            if(data.Brastlewark) {
                setStorageJSON(storageDataKey, data.Brastlewark)
            }
        })
    }, [])
}
