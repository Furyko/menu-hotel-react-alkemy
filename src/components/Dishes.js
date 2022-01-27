import React from 'react';

const Dishes = ({dishes = []}) => {
    return (
        <div className="row m-4">
            {dishes.map((item, key) => (
                <div key={key} className="col mb-4 d-flex justify-content-center">
                    <div className="card" style={{minWidth: "200px"}, {maxWidth: "305px"}}>
                        <div className="card-body">
                            <h5 className="card-title d-flex justify-content-center">Nombre del plato</h5>
                            <img src={item.image} alt="imagen" style={{maxWidth: "260px"}}/>
                            <hr/>
                            <p>Caracteristicas</p>
                        </div>
                        <div className='card-footer'>
                            <p>Acciones para ver el detalle o eliminarlo del menú</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dishes;