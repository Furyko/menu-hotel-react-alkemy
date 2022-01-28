import React, {Component} from 'react';

class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: props.dishes
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    removeDish(index) {
        this.setState({
            dishes: this.state.dishes.filter((e, i) => {
                return i !== index
            })
        })
    }

    handleSubmit(item) {
        console.log(item);
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
                                {item.precio ? 
                                <div><hr/>
                                <p>Precio: {item.precio}</p>
                                <p>Healt Score: {item.healtScore}</p></div> : <div></div>}
                                {item.vegano ? <p className='badge bg-success text-wrap'>Vegano</p> : <div></div>}
                            </div>
                            <div className='card-footer'>
                                {item.precio ? <div><button className='btn btn-secondary'>Mostrar caracteristicas</button>
                                <button id="delete_dish" className='btn btn-danger' onClick={this.removeDish.bind(this, key)}>Eliminar</button></div> : 
                                <div><button id='add_dish' className="btn btn-success" onClick={this.handleSubmit.bind(this, item)}>Añadir al menú</button></div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Dishes;