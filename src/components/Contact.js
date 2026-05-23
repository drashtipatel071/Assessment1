import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>📧 drashti@example.com</p>
                        <p>📞 +91 1237498765 </p>
                        <p>📍 Gujrat, india</p>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows="5" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn-primary">Send Message</button>
                        {submitted && <p className="success-msg">Message sent! 🎉</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;