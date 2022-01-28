import React, {Component} from 'react';
import menu from '../menu.json';
import Dishes from './Dishes';
import emptyFolder from '../images/emptyDish.png';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menu: menu.menu
        }
    }
    render() {
        const menuLength = this.state.menu.length > 0
        const emptyMenu = {
            "menu": [
                {
                    "title": "Sin platos",
                    "image": emptyFolder,
                    "precio": 0.0,
                    "healtScore": 0,
                    "vegano": false
                }
            ]}
        return (
            <div>
                { menuLength ? <Dishes dishes={this.state.menu}/> : <Dishes dishes={emptyMenu.menu}/>}
            </div>
        )
    }
}

export default Menu;