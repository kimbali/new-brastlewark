import React from 'react';
import FAIRY_IMG from '../../images/fairy.png';
import { GiFairyWand } from 'react-icons/gi';

export default function DialogHelper({ text = '' }) {
    return (
        <div className="dialog-helper">
            <img src={FAIRY_IMG} alt='Fairy'/>
            <div className="dialog-helper-circle">
                <p>{text || <GiFairyWand/>}</p>
            </div>
        </div>
    )
}
