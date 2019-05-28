import React, {Component} from "react";

import {NavLink} from 'react-router-dom'

class Menu extends Component {
    state = {  }
    render() {
        return (
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add-muscle">Be strong!</NavLink>
                    <NavLink to="/healthy-delicious">Be healthy!</NavLink>
                    <NavLink to="/lose-weight">Be fit!</NavLink>
                    <NavLink to="/query">Your vote counts!</NavLink>
                </ul>
            </nav>
        );
    }
}

export default Menu;