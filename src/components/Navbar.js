import React, { useState } from 'react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo">Portfolio</h1>
                
                <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme} 
                        aria-label="Toggle Theme"
                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'inherit' }}
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '✕' : '☰'}
                    </div>
                </div>

                <ul className={isOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;