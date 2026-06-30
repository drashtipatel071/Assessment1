import React from 'react';

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Drashti Patel</span></h1>
                <h2>React Developer</h2>
                <p>I build beautiful, responsive web applications</p>
                <button 
                    className="btn-primary" 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    View My Work
                </button>
            </div>
        </section>
    );
}

export default Home;
