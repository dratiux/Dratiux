import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Login from './Login';
import Dashboard from './Dashboard';

const AdminPanel = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div className="container section-void label-sm">Verifying Credentials...</div>;

  return (
    <div className="admin-panel">
      {!session ? (
        <Login onLogin={(user) => console.log('Logged in:', user)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default AdminPanel;
