import React from 'react';
import { Link } from "wouter";

export default function GnomesListItem({ gnomeData }) {
    return (
     <li><Link to={`/gnome/${gnomeData.id}`}>{gnomeData.name}</Link></li>
    )
}
