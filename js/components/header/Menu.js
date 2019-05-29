import React, {Component} from "react";

import {NavLink} from 'react-router-dom'
import Home from "../pages/Home";

class Menu extends Component {
    state = {  }
    navItems = [
        {name: "Home", link: "/home" },
        {name: "Be strong!", link: "/add-muscle" },
        {name: "Be healthy!", link: "/healthy-delicious" },
        {name: "Be fit!", link: "/lose-weight" },
        {name: "Your vote counts!", link: "/query" },
        {name: "Newsletter", link: "/newsletter"}
    ]
    render() {
        let jsxNavItems = this.navItems.map(item => 
            <NavLink
                key={item.link} 
                className="nav__list__item" 
                activeClassName="nav__list__item--active" 
                to={item.link}>{item.name}
            </NavLink>
        )
        return (
            <nav className="nav">
                <ul className="nav__list">
                    {jsxNavItems}
                </ul>
            </nav>
        );
    }
}

export default Menu;