import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim() || formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters long.';
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }
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
                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                style={errors.name ? { borderColor: 'red' } : {}}
                            />
                            {errors.name && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.name}</span>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                style={errors.email ? { borderColor: 'red' } : {}}
                            />
                            {errors.email && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.email}</span>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <textarea 
                                name="message"
                                placeholder="Your Message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                style={errors.message ? { borderColor: 'red' } : {}}
                            />
                            {errors.message && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{errors.message}</span>}
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                        {submitted && <p className="success-msg">Message sent! 🎉</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;