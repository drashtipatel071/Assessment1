import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo">Portfolio</h1>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;