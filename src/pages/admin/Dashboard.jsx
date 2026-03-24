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

  return (
    <div className="admin-dashboard container section-void">
      <header className="admin-header">
        <div>
          <span className="label-sm">Command Center</span>
          <h1 className="title-lg">SYSTEM DASHBOARD</h1>
        </div>
        <div className="form-actions">
          <Button variant="tertiary" onClick={() => setView('projects')}>PROJECTS</Button>
          <Button variant="tertiary" onClick={() => setView('contacts')}>REQUESTS</Button>
          <Button onClick={() => setView('add-project')}>+ RECORD</Button>
          <Button variant="tertiary" onClick={() => supabase.auth.signOut()}>LOGOUT</Button>
        </div>
      </header>

      {view === 'projects' && (
        <div className="admin-grid">
          {projects.map(p => (
            <div key={p.id} className="admin-card">
              <span className="label-sm">{p.category} | {p.year}</span>
              <h3 className="title-lg">{p.title}</h3>
              <div className="form-actions">
                <Button variant="tertiary" onClick={() => deleteProject(p.id)}>DELETE</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === 'contacts' && (
        <table className="contacts-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MESSAGE</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td className="label-sm">{new Date(c.created_at).toLocaleDateString()}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td className="on-surface-variant">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {view === 'add-project' && (
        <form className="admin-card" onSubmit={handleAddProject}>
          <h2 className="title-lg">NEW ARCHITECTURAL RECORD</h2>
          <Input label="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
          <Input label="Slug" value={newProject.slug} onChange={e => setNewProject({...newProject, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} required />
          <Input label="Category" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} />
          <Input label="Year" type="number" value={newProject.year} onChange={e => setNewProject({...newProject, year: e.target.value})} />
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
