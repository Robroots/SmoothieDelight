import React from 'react';
import Logo from './header/Logo';
import Menu from './header/Menu';

const Header = () => (
    <header className="container header">
        <Logo />
        <Menu />
    </header>
);

export default Header;