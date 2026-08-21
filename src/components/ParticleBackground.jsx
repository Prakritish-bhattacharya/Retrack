import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 180,
    };

    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.length = 0;

      const particleCount = Math.min(
        110,
        Math.floor((window.innerWidth * window.innerHeight) / 13000),
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,

          size: Math.random() * 2 + 0.8,

          baseX: 0,
          baseY: 0,

          opacity: Math.random() * 0.45 + 0.2,
        });
      }

      particles.forEach((particle) => {
        particle.baseX = particle.x;
        particle.baseY = particle.y;
      });
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Natural movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap particles around screen
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;

        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;

        // Cursor interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;

            const angle = Math.atan2(dy, dx);

            // Particles gently move toward cursor
            particle.x -= Math.cos(angle) * force * 1.8;
            particle.y -= Math.sin(angle) * force * 1.8;
          }
        }

        // Particle glow
        ctx.beginPath();

        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(249, 115, 22, 0.35)";

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const opacity = (1 - distance / 110) * 0.12;

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;

            ctx.lineWidth = 0.7;

            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
