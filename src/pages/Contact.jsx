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
          <span className="label-sm">Get in Touch</span>
          <h1 className="display-lg">HAVE A VISION<br />IN MIND?</h1>
          <p className="body-lg on-surface-variant">
            Have a project in mind? Reach out and let’s create it.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <div className="success-message">
              <h2 className="title-lg">MESSAGE SENT</h2>
              <p className="on-surface-variant">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
              <Button type="button" onClick={() => setStatus('idle')}>Send Another</Button>
            </div>
          ) : (
            <>
              <Input
                label="Full Name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="What's your email?"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div className="input-group">
                <label className="input-label label-sm">Project Details</label>
                <textarea
                  className="input-field textarea-field"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'error' && <p className="label-sm error-text">Message failed to send. Please try again.</p>}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
