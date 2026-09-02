import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeGlobeAtmosphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 800;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 1. Atmosphere Sphere
    const sphereGeo = new THREE.SphereGeometry(3.2, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.35,
      shininess: 90,
      emissive: 0x2dd4bf,
      emissiveIntensity: 0.22,
      wireframe: false,
    });
    const weatherSystem = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(weatherSystem);

    // 2. Wireframe / isobar latitude lines
    const wireframeGeo = new THREE.SphereGeometry(3.25, 24, 16);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframeMesh);

    // 3. Atmospheric Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 3.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
      scales[i / 3] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x0284c7,
      size: 0.07,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2dd4bf, 2.5, 20);
    pointLight.position.set(6, 6, 6);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x38bdf8, 1.8, 20);
    backLight.position.set(-6, -4, -4);
    scene.add(backLight);

    camera.position.z = 7.8;

    let frameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.5;
      mouseY = y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      weatherSystem.rotation.y += 0.0022;
      weatherSystem.rotation.x += 0.0008;

      wireframeMesh.rotation.y += 0.0015;
      wireframeMesh.rotation.x -= 0.0005;

      particles.rotation.y += 0.0012;
      particles.rotation.x += 0.0006;

      // Smooth camera tilt
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 800;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      id="threejs-container-globe"
      ref={containerRef}
      className="w-[600px] h-[600px] md:w-[780px] md:h-[780px] relative pointer-events-none"
    />
  );
};
