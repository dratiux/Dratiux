import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './Admin.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [view, setView] = useState('projects'); // projects, contacts, add-project
  const [newProject, setNewProject] = useState({
    title: '',
    slug: '',
    description: '',
    category: '',
    year: new Date().getFullYear(),
    cover_image: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: projData } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    const { data: contData } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (projData) setProjects(projData);
    if (contData) setContacts(contData);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('projects').insert([newProject]);
    if (!error) {
      setView('projects');
      fetchData();
      setNewProject({ title: '', slug: '', description: '', category: '', year: new Date().getFullYear(), cover_image: '' });
    } else {
      alert(error.message);
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm('Confirm deletion of architectural record?')) {
      await supabase.from('projects').delete().eq('id', id);
      fetchData();
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm('Purge this request from the system?')) {
      await supabase.from('contacts').delete().eq('id', id);
      fetchData();
    }
  };

  return (
    <div className="admin-dashboard container section-void">
      <header className="admin-header">
        <div className="admin-title-area">
          <span className="label-sm">Command Center</span>
          <h1 className="title-lg">SYSTEM DASHBOARD</h1>
        </div>
        <div className="admin-controls">
          <div className="nav-group">
            <button className={`admin-nav-btn ${view === 'projects' ? 'active' : ''}`} onClick={() => setView('projects')}>PROJECTS</button>
            <button className={`admin-nav-btn ${view === 'contacts' ? 'active' : ''}`} onClick={() => setView('contacts')}>REQUESTS</button>
          </div>
          <Button variant="tertiary" onClick={() => supabase.auth.signOut()} className="logout-btn">LOGOUT</Button>
        </div>
      </header>

      {view === 'projects' && (
        <div className="admin-grid">
          <div className="admin-card add-card-trigger" onClick={() => setView('add-project')}>
             <div className="add-icon">+</div>
             <span className="label-sm">ADD NEW RECORD</span>
          </div>
          {projects.map(p => (
            <div key={p.id} className="admin-card">
               <div className="admin-card-header">
                <div>
                  <span className="label-sm">{p.category}</span>
                  <span className="label-sm" style={{opacity: 0.5, marginLeft: '0.5rem'}}>{p.year}</span>
                </div>
                <Button variant="tertiary" onClick={() => deleteProject(p.id)} className="delete-icon-btn">✕</Button>
              </div>
              <h3 className="title-lg" style={{marginTop: '0.5rem'}}>{p.title}</h3>
            </div>
          ))}
        </div>
      )}

      {view === 'contacts' && (
        <div className="table-wrapper">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>MESSAGE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c.id}>
                  <td className="label-sm">{new Date(c.created_at).toLocaleDateString()}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td className="on-surface-variant">{c.message}</td>
                  <td>
                    <Button variant="tertiary" onClick={() => deleteContact(c.id)} className="delete-btn">PURGE</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'add-project' && (
        <form className="admin-card add-project-form" onSubmit={handleAddProject}>
          <h2 className="title-lg">NEW ARCHITECTURAL RECORD</h2>
          <div className="form-grid">
            <Input label="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
            <Input label="Slug" value={newProject.slug} onChange={e => setNewProject({...newProject, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} required />
            <Input label="Category" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} />
            <Input label="Year" type="number" value={newProject.year} onChange={e => setNewProject({...newProject, year: e.target.value})} />
          </div>
          <Input label="Cover Image URL" value={newProject.cover_image} onChange={e => setNewProject({...newProject, cover_image: e.target.value})} />
          <div className="input-group">
            <label className="input-label label-sm">Description</label>
            <textarea className="input-field" rows={4} value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
          </div>
          <div className="form-actions">
            <Button type="submit">CREATE RECORD</Button>
            <Button type="button" variant="tertiary" onClick={() => setView('projects')}>CANCEL</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
