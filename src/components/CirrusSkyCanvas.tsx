import React, { useEffect, useRef } from 'react';
import azureSkyImg from '../assets/images/azure_sky_clouds_1788346536932.jpg';

interface CirrusSkyCanvasProps {
  className?: string;
}

export const CirrusSkyCanvas: React.FC<CirrusSkyCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 800;
    };
    window.addEventListener('resize', handleResize);

    // Particle-based wispy cirrus and drifting cumulus clouds
    interface CloudWisp {
      x: number;
      y: number;
      radiusX: number;
      radiusY: number;
      rotation: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: 'cirrus' | 'cumulus';
    }

    const clouds: CloudWisp[] = [];
    const count = 38;

    for (let i = 0; i < count; i++) {
      const isCirrus = i < 24;
      clouds.push({
        x: Math.random() * width,
        y: isCirrus ? Math.random() * (height * 0.65) : height * 0.45 + Math.random() * (height * 0.5),
        radiusX: isCirrus ? Math.random() * 160 + 80 : Math.random() * 90 + 50,
        radiusY: isCirrus ? Math.random() * 35 + 15 : Math.random() * 60 + 30,
        rotation: (Math.random() - 0.5) * 0.4 - 0.15,
        speedX: isCirrus ? Math.random() * 0.25 + 0.12 : Math.random() * 0.18 + 0.08,
        speedY: (Math.random() - 0.5) * 0.04,
        opacity: isCirrus ? Math.random() * 0.35 + 0.15 : Math.random() * 0.45 + 0.25,
        type: isCirrus ? 'cirrus' : 'cumulus',
      });
    }

    let mouseX = 0;
    let targetMouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle sunlight flare
      const sunGrad = ctx.createRadialGradient(
        width * 0.75 + mouseX * 0.5,
        height * 0.15,
        20,
        width * 0.75 + mouseX * 0.5,
        height * 0.15,
        width * 0.6
      );
      sunGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      sunGrad.addColorStop(0.2, 'rgba(254, 240, 138, 0.25)');
      sunGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.1)');
      sunGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');

      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw drifting wispy cirrus and cumulus clouds
      clouds.forEach((c) => {
        c.x += c.speedX;
        c.y += c.speedY + Math.sin(time + c.x * 0.01) * 0.05;

        // Wrap around seamlessly
        if (c.x - c.radiusX > width) {
          c.x = -c.radiusX;
          c.y = c.type === 'cirrus' ? Math.random() * (height * 0.65) : height * 0.45 + Math.random() * (height * 0.5);
        }

        ctx.save();
        ctx.translate(c.x + mouseX * (c.type === 'cirrus' ? 0.3 : 0.6), c.y);
        ctx.rotate(c.rotation);

        const grad = ctx.createRadialGradient(0, 0, 5, 0, 0, c.radiusX);
        if (c.type === 'cirrus') {
          grad.addColorStop(0, `rgba(255, 255, 255, ${c.opacity * 0.9})`);
          grad.addColorStop(0.4, `rgba(240, 249, 255, ${c.opacity * 0.5})`);
          grad.addColorStop(0.8, `rgba(224, 242, 254, ${c.opacity * 0.2})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        } else {
          // Cumulus with sunlit warm rim
          grad.addColorStop(0, `rgba(255, 255, 255, ${c.opacity})`);
          grad.addColorStop(0.5, `rgba(254, 249, 195, ${c.opacity * 0.7})`);
          grad.addColorStop(0.8, `rgba(186, 230, 253, ${c.opacity * 0.3})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, c.radiusX, c.radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* 1. Photorealistic Azure Sky with Cirrus Filaments & Cumulus Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 animate-subtle-drift"
        style={{
          backgroundImage: `url(${azureSkyImg})`,
          opacity: 0.96,
        }}
      />

      {/* 2. Dynamic Canvas Cloud Overlay (Animated Moving Cirrus & Cumulus Streamers) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* 3. Soft Atmospheric Sunburst & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-transparent to-white/40 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-radial from-amber-200/20 via-transparent to-transparent blur-2xl" />
    </div>
  );
};
