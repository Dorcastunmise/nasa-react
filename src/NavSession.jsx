import React from "react";
import './NavSession.css';
import logo from './logo.jpg';

function NavSession() {
    return (
        <nav className="begin">
            <img src={logo} className='logo'></img>
            <ul className="separate">
                <li>About</li>
                <li>History</li>
                <li>Discoveries</li>
                <li>Funding</li>
            </ul>
        </nav>
    )
}
export default NavSession