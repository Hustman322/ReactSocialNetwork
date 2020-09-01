import React from 'react';
import s from './Header.module.css';


function Header() {
    return (
        <header className={s.header_menu}>
            <a href='http://www.youtube.com/'> <img src="123.png" width='40px' alt='logo'/> </a>
            <p>Blog</p>
        </header>

    );

}

export default Header;