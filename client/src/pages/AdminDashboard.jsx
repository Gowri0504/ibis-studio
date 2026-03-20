import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../utils/api';
import { FaUsers, FaCalendarCheck, FaRupeeSign, FaChartBar, FaStar } from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ userEmail: '', title: '', url: '', driveLink: '', type: 'image' });
  const [bookings, setBookings] = useState([]);
  const [reply, setReply] = useState({ id: '', status: 'Approved', adminResponse: '' });
  const [alertMsg, setAlertMsg] = useState('');
  const [file, setFile] = useState(null);

  const stats = {
    totalUsers: users.length,
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'Pending').length,
    estimatedRevenue: bookings.filter(b => b.status === 'Approved').length * 15000,
    avgRating: (bookings.filter(b => b.userReview?.rating).reduce((acc, curr) => acc + curr.userReview.rating, 0) / 
                (bookings.filter(b => b.userReview?.rating).length || 1)).toFixed(1)
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${API_BASE_URL}/api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUsers(res.data)).catch(() => setUsers([]));
    axios.get(`${API_BASE_URL}/api/admin/bookings`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setBookings(res.data)).catch(() => setBookings([]));
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (file) {
        const fd = new FormData();
        fd.append('userEmail', form.userEmail);
        fd.append('title', form.title);
        fd.append('type', form.type);
        fd.append('file', file);
        await axios.post(`${API_BASE_URL}/api/admin/media`, fd, {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
        });
      } else {
        const payload = { userEmail: form.userEmail, title: form.title, type: form.type, driveLink: form.driveLink || form.url, url: form.url };
        await axios.post(`${API_BASE_URL}/api/admin/media`, payload, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      setAlertMsg('Media uploaded to user account');
      setForm({ userEmail: '', title: '', url: '', driveLink: '', type: 'image' });
      setFile(null);
    } catch {
      setAlertMsg('Upload failed');
    }
  };

  const sendReply = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.patch(`${API_BASE_URL}/api/admin/bookings/${reply.id}`, {
        status: reply.status,
        adminResponse: reply.adminResponse
      }, { headers: { Authorization: `Bearer ${token}` } });
      const res = await axios.get(`${API_BASE_URL}/api/admin/bookings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
      setAlertMsg('Response updated');
      setReply({ id: '', status: 'Approved', adminResponse: '' });
    } catch {
      setAlertMsg('Update failed');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-ibis-dark text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-6">Admin Panel</h1>
        <p className="text-gray-400 mb-12">Monitor studio performance and manage all operations from one place.</p>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Clients', value: stats.totalUsers, icon: <FaUsers />, color: 'from-blue-500/20 to-blue-600/5' },
            { label: 'Total Bookings', value: stats.totalBookings, icon: <FaCalendarCheck />, color: 'from-ibis-gold/20 to-ibis-gold/5' },
            { label: 'Pending Requests', value: stats.pendingBookings, icon: <FaChartBar />, color: 'from-orange-500/20 to-orange-600/5' },
            { label: 'Estimated Revenue', value: `₹${stats.estimatedRevenue.toLocaleString()}`, icon: <FaRupeeSign />, color: 'from-green-500/20 to-green-600/5' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${stat.color} relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-white/10 transition-colors">
                {React.cloneElement(stat.icon, { size: 60 })}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-4 flex items-center gap-1 text-[10px] text-ibis-gold uppercase tracking-tighter font-semibold">
                Live Data <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 rounded-2xl border border-white/10 mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Upload Media to User</h2>
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">User Email</label>
              <input name="userEmail" value={form.userEmail} onChange={onChange} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" required />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Title</label>
              <input name="title" value={form.title} onChange={onChange} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" required />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Drive/External Link (optional)</label>
              <input name="driveLink" value={form.driveLink} onChange={onChange} placeholder="https://drive.google.com/..." className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Type</label>
              <select name="type" value={form.type} onChange={onChange} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white">
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">Upload File (image/video)</label>
              <input type="file" accept="image/*,video/*" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white" />
              <p className="text-xs text-gray-500 mt-2">If a file is uploaded, it will be used; otherwise the link above will be saved.</p>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-gold-shine text-black font-bold py-3 rounded-lg w-full">Upload</button>
            </div>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 rounded-2xl border border-white/10 mb-10">
          <h2 className="text-2xl font-serif font-bold mb-4">Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map(b => (
              <div key={b._id} className="p-4 border border-white/10 rounded-lg">
                <div className="font-bold">{b.name} • {b.phone}</div>
                <div className="text-sm text-gray-400">{b.serviceType}</div>
                <div className="text-sm text-gray-400">{new Date(b.date).toLocaleDateString()} {b.time}</div>
                <div className="text-xs text-gray-500">Status: {b.status}</div>
                {b.adminResponse && <div className="text-xs text-gray-500">Response: {b.adminResponse}</div>}
                <form onSubmit={sendReply} className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                  <select value={reply.id === b._id ? reply.status : 'Approved'} onChange={e => setReply({ ...reply, id: b._id, status: e.target.value })} className="bg-black/40 border border-gray-700 rounded p-2 text-white">
                    <option>Approved</option>
                    <option>Declined</option>
                    <option>Pending</option>
                  </select>
                  <input placeholder="Message" value={reply.id === b._id ? reply.adminResponse : ''} onChange={e => setReply({ ...reply, id: b._id, adminResponse: e.target.value })} className="bg-black/40 border border-gray-700 rounded p-2 text-white" />
                  <button className="btn-gold-shine rounded px-4 py-2">Send</button>
                </form>
              </div>
            ))}
            {bookings.length === 0 && <div className="text-gray-500">No bookings yet.</div>}
          </div>
        </motion.div>

        <div className="glass-card p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-serif font-bold mb-4">Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map(u => (
              <div key={u._id} className="p-4 border border-white/10 rounded-lg">
                <div className="font-bold">{u.name}</div>
                <div className="text-sm text-gray-400">{u.email}</div>
                <div className="text-sm text-gray-400">{u.phone}</div>
                <div className="text-xs text-gray-500">Role: {u.role}</div>
              </div>
            ))}
            {users.length === 0 && <div className="text-gray-500">No users loaded.</div>}
          </div>
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
    </div>
  );
};

export default AdminDashboard;
