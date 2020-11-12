import React from 'react'
import GnomesListItem from './GnomesListItem';

export default function GnomesList({ list = []}) {
    if(list.length === 0) return null;
    return (
        <ul>
            {
                list.map(itemData => <GnomesListItem key={`gnome-list-item-${itemData.id}`} gnomeData={itemData}/>)
            }
        </ul>
    )
}
