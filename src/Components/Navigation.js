import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (

        <ul className='Navbar'>
            <li><NavLink to="/" activeClassName="nav-active">Accueil</NavLink></li>
            <li><NavLink to="/About" activeClassName="nav-active">A propos</NavLink></li>
            <li><NavLink to="/Contact" activeClassName="nav-active">Contact</NavLink></li>
            <li><NavLink to="/Infos" activeClassName="nav-active">Infos</NavLink></li>
            <li><NavLink to="/Pays" activeClassName="nav-active">Pays</NavLink></li>
            
        </ul>

    );
};

export default Navigation;