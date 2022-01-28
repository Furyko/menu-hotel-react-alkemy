import React from 'react';
import Dishes from './Dishes';

export default function DishesList({dishesList}) {
    const dish = dishesList.results;
    return (
        <div className="row">
            <Dishes dishes={dish}/>
        </div>
    )
}