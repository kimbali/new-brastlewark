import { URL } from '../global/config';

export default function getData () {
    return fetch(URL)
        .then(res => res.json())
        .then(response =>  response)
        .catch(err => console.error(err))
}