import React from 'react';

export default function DishesList({dishesList}) {
    const dish = dishesList.results;
    return (
        <div className="row">
                {dish.map((item, index) => (
                <div key={index} className="col m-4">
                    <div className='card' style={{minWidth: "200px", maxWidth: "240px"}}>
                        <img src={item.image} alt="Este plato no tiene imagen."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <hr/>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    )
}