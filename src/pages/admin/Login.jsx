import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './Admin.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      if (onLogin) onLogin(data.user);
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page container section-void-large">
      <div className="login-card">
        <span className="label-sm">Security Gateway</span>
        <h1 className="display-md">ADMIN ACCESS</h1>
        <form onSubmit={handleLogin} className="login-form">
          <Input 
            label="Security Email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            label="Access Token (Password)" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Authenticating...' : 'Enter System'}
          </Button>
          {error && <p className="error-text label-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
