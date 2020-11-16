
import { setStorageJSON } from '../global/methods';
import { storageDataKey, URL } from '../global/config';

export default function getData () {
    return fetch(URL)
            .then(res => res.json())
            .then(data => {
                if(data.Brastlewark) {
                    setStorageJSON(storageDataKey, data.Brastlewark)
                }
            })
            .catch(err => console.error(err))
}
