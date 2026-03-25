import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import Input from '../components/Input';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('contacts')
      .insert([formData]);

    if (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page container section-void-large">
      <Helmet>
        <title>Contact — Dratiux</title>
        <meta name="description" content="Start your brand identity or interactive document project with Dratiux. Clear process, structured execution, precise results." />
        <meta property="og:title" content="Contact — Dratiux" />
        <meta property="og:description" content="Start your brand identity or interactive document project with Dratiux. Clear process, structured execution, precise results." />
        <meta name="twitter:title" content="Contact — Dratiux" />
        <meta name="twitter:description" content="Start your brand identity or interactive document project with Dratiux. Clear process, structured execution, precise results." />
        <link rel="canonical" href="https://dratiux.com/contact" />
      </Helmet>

      <div className="contact-layout">
        <div className="contact-info">
          <span className="label-sm">Engagement</span>
          <h1 className="display-lg">START A<br/>PROJECT</h1>
          <p className="body-lg on-surface-variant">
            Connect with our architectural design studio to bring precision and authority to your digital presence.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <div className="success-message">
              <h2 className="title-lg">SYSTEM RECEIVED</h2>
              <p className="on-surface-variant">Your transmission has been logged. We will respond within 24 cycles.</p>
              <Button type="button" onClick={() => setStatus('idle')}>Send Another</Button>
            </div>
          ) : (
            <>
              <Input 
                label="Full Name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input 
                label="Email Address" 
                type="email" 
                placeholder="john@vanguard.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <div className="input-group">
                <label className="input-label label-sm">Project Details</label>
                <textarea 
                  className="input-field textarea-field" 
                  placeholder="Describe the structural requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Transmitting...' : 'Initiate Transmission'}
              </Button>
              {status === 'error' && <p className="label-sm error-text">Transmission failed. Try again.</p>}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
