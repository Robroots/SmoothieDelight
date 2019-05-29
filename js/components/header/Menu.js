import React, {Component} from "react";

import {NavLink} from 'react-router-dom'

class Menu extends Component {
    state = {  }
    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <NavLink 
                        className="nav__list__item" 
                        activeClassName="nav__list__item--active" 
                        to="/home">Home</NavLink>
                    <NavLink 
                        className="nav__list__item" 
                        activeClassName="nav__list__item--active" 
                        to="/add-muscle">Be strong!
                    </NavLink>
                    <NavLink 
                        className="nav__list__item" 
                        activeClassName="nav__list__item--active" 
                        to="/healthy-delicious">Be healthy!
                    </NavLink>
                    <NavLink 
                        className="nav__list__item" 
                        activeClassName="nav__list__item--active" 
                        to="/lose-weight">Be fit!
                    </NavLink>
                    <NavLink 
                        className="nav__list__item" 
                        activeClassName="nav__list__item--active" 
                        to="/query">Your vote counts!
                    </NavLink>
                </ul>
            </nav>
        );
    }
}

export default Menu;