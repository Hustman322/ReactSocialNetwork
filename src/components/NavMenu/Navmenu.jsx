import React from 'react';
import s from './Navmenu.module.css'
import {NavLink} from "react-router-dom";

function Navmenu() {
    return (
        <nav className={s.menu}>

            <ul className={s.sidebarmenu}>
               <NavLink to="/Profile" activeClassName={s.active}> <li><img alt='homepic' src='home.png' width='20px'/>My Profile</li></NavLink>
                <NavLink to="/Dialogs" activeClassName={s.active}><li><img alt='msgpic' src='msg.png' width='20px'/>Messages</li></NavLink>
                <NavLink to="/Feed" activeClassName={s.active}><li><img alt='feedpic' src='feed.png' width='20px'/>Feed</li></NavLink>
                <NavLink to="/Music" activeClassName={s.active}><li><img alt='musicpic' src='music.png' width='15px'/>Music</li></NavLink>
                <NavLink to="/Settings" activeClassName={s.active}><li><img alt='setpic' src='set.png' width='15px'/>Settings</li></NavLink>

            </ul>

        </nav>


    );


}


export default Navmenu;