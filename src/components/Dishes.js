import React, {Component} from 'react';

class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: props.dishes
        };
    }

    removeDish(index) {
        console.log(index);
        this.setState({
            dishes: this.state.dishes.filter((e, i) => {
                return i !== index
            })
        })
    }

    render() {
        return (
            <div className="row m-4">
                {this.state.dishes.map((item, key) => (
                    <div key={key} className="col mb-4 d-flex justify-content-center">
                        <div className="card" style={{minWidth: "200px", maxWidth: "305px"}}>
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-center">{item.title}</h5>
                                <img src={item.image} alt="Este plato no tiene imagen." style={{maxWidth: "260px"}}/>
                                <hr/>
                                <p>Precio: {item.precio}</p>
                                <p>Healt Score: {item.healtScore}</p>
                                {item.vegano ? <p className='badge bg-success text-wrap'>Vegano</p> : <div></div>}
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-secondary'>Mostrar caracteristicas</button>
                                <button className='btn btn-danger' onClick={this.removeDish.bind(this, key)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Dishes;