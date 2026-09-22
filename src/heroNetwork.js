export function initHeroNetwork(canvas, container) {
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let isVisible = false;
  let width, height;

  const styles = getComputedStyle(document.documentElement);
  let accentColor = styles.getPropertyValue('--accent').trim() || '#00ffcc';

  let mouse = { x: -1000, y: -1000 };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouse.x = -1000;
    mouse.y = -1000;
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  const resize = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
    accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ffcc';
  };
  
  window.addEventListener('resize', resize);
  resize();

  // Nodos aumentados significativamente para una red más densa (45 a 60 nodos)
  const numNodes = Math.floor(Math.random() * 15) + 45; 
  
  const nodes = Array.from({ length: numNodes }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.05 + 0.05;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      baseVx: Math.cos(angle) * speed,
      baseVy: Math.sin(angle) * speed,
      r: Math.random() * 2 + 2.5 
    };
  });

  const loop = () => {
    if (!isVisible) return;
    
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = accentColor;
    ctx.strokeStyle = accentColor;

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);

      if (distToMouse < 120) {
        const force = (120 - distToMouse) / 120;
        const pushX = (dx / distToMouse) * force * -0.3;
        const pushY = (dy / distToMouse) * force * -0.3;
        node.vx += pushX * 0.05;
        node.vy += pushY * 0.05;
      }

      node.vx += (node.baseVx - node.vx) * 0.05;
      node.vy += (node.baseVy - node.vy) * 0.05;

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0) node.x = width;
      if (node.x > width) node.x = 0;
      if (node.y < 0) node.y = height;
      if (node.y > height) node.y = 0;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.globalAlpha = 0.8; 
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        let other = nodes[j];
        const ddx = other.x - node.x;
        const ddy = other.y - node.y;
        const ddist = Math.sqrt(ddx * ddx + ddy * ddy);

        if (ddist < 240) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.globalAlpha = (1 - (ddist / 240)) * 0.45; 
          ctx.stroke();
        }
      }
    }
    
    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(loop);
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!isVisible) {
        isVisible = true;
        loop();
      }
    } else {
      isVisible = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
  }, { threshold: 0 });
  
  observer.observe(container);

  return () => {
    window.removeEventListener('resize', resize);
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    observer.disconnect();
  };
}