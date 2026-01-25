import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const maxParticles = 150;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const addParticles = (x, y) => {
      for (let i = 0; i < 6; i++) {
        if (particles.length > maxParticles) particles.shift();
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          size: 1 + Math.random() * 2,
          hue: 45 + Math.random() * 20 // golden range
        });
      }
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      addParticles(mouseX, mouseY);
    };
    window.addEventListener('mousemove', onMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 3D cursor glow
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 40);
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.35)');
      gradient.addColorStop(0.6, 'rgba(255, 215, 0, 0.12)');
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2);
      ctx.fill();

      // particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // soft gravity
        p.life -= 0.015;

        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        // shimmer stroke
        ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.fillStyle = `hsl(${p.hue}, 90%, 60%)`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ibis-dark text-white font-sans">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[60]"
      />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
