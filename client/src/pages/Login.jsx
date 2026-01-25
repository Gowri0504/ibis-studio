import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);
      localStorage.setItem('userName', res.data.user.name);
      if (res.data.user.role === 'admin') navigate('/admin');
      else navigate('/dashboard');
    } catch {
      setAlertMsg('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-6 max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 rounded-2xl border border-white/10">
          <h1 className="text-3xl font-serif font-bold mb-6">Login</h1>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input name="email" type="email" value={form.email} onChange={onChange} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" required />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <input name="password" type="password" value={form.password} onChange={onChange} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" required />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-gold-shine text-black font-bold py-3 rounded-lg">{loading ? 'Authenticating...' : 'Login'}</button>
          </form>
        </motion.div>
      </div>
      {alertMsg && (
        <div className="alert-center">
          <div className="alert-card">
            <div className="text-xl font-serif font-bold mb-2">Alert</div>
            <div className="text-gray-200 mb-4">{alertMsg}</div>
            <button onClick={() => setAlertMsg('')} className="btn-gold-shine px-6 py-2 rounded">OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
