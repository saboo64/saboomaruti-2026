'use client';
import React, { useRef, useEffect, useState } from 'react';

const FireShotsModal = () => {
  const canvasRef = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireShots = [];
    let particles = [];
    let animationId;

    class FireShot {
      constructor(x, color) {
        this.x = x;
        this.y = canvas.height;
        this.color = color;
        this.speed = Math.random() * 4 + 6;
        this.alpha = 1;
        this.exploded = false;
      }

      update() {
        this.y -= this.speed;
        this.alpha -= 0.008;
        if (this.speed < 0.5 && !this.exploded) {
          this.exploded = true;
          this.explode();
        } else {
          this.speed -= 0.1;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      explode() {
        for (let i = 0; i < 80; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6 + 2;
          const vx = Math.cos(angle) * speed;
          const vy = Math.sin(angle) * speed;
          particles.push(new Particle(this.x, this.y, this.color, vx, vy));
        }
      }
    }

    class Particle {
      constructor(x, y, color, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.alpha = 1;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;
        this.alpha -= 0.015;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const createFireShot = () => {
      const x = Math.random() * canvas.width;
      const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      fireShots.push(new FireShot(x, color));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireShots.forEach((shot, i) => {
        shot.update();
        shot.draw();
        if (shot.exploded || shot.alpha <= 0) fireShots.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      animationId = requestAnimationFrame(animate);
    };

    const fireInterval = setInterval(createFireShot, 400);
    animate();

    // Auto hide after 15s
    const timer = setTimeout(() => setShow(false), 15000);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(fireInterval);
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999] pointer-events-none
        bg-transparent transition-all duration-700
      "
    >
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>

      {/* Soft gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-30 blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-r from-pink-600 to-red-500 opacity-20 blur-3xl bottom-0 right-0 animate-ping"></div>
      </div>

      {/* Celebration Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold 
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
          bg-clip-text text-transparent tracking-wider 
          drop-shadow-[0_0_40px_rgba(255,200,0,0.9)] animate-bounce-slow"
        >
          ✨ Happy Diwali ✨
        </h1>

        <p
          className="mt-6 text-2xl md:text-3xl text-yellow-100 font-semibold 
          animate-pulse drop-shadow-[0_0_25px_rgba(255,220,150,0.7)]"
        >
          Wishing you <span className="text-orange-400">Joy</span>,{' '}
          <span className="text-yellow-300">Prosperity</span> &{' '}
          <span className="text-red-400">Light</span> forever 🌟
        </p>

        <div className="w-64 h-[2px] mt-6 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-glowLine"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setShow(false)}
        className="absolute px-4 py-2 text-lg text-white transition rounded-full pointer-events-auto top-6 right-6 bg-black/40 hover:bg-black/70"
      >
        ✕
      </button>

      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bg-yellow-400 rounded-full w-96 h-96 opacity-10 blur-3xl top-1/4 left-10 animate-float"></div>
        <div className="absolute w-64 h-64 bg-orange-600 rounded-full opacity-10 blur-3xl bottom-20 right-20 animate-float-delayed"></div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes glowLine {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-glowLine { animation: glowLine 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default FireShotsModal;
