import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const styles = {
        backgroundColor: '#04395e',
        padding: '1rem',
    }
    return (
        <ul className="nav" style={styles}>
            <NavLink exact to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
    );
}

export { Nav }