import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const GlacierHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 700;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the glaciated monolith
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Translucent Ice Monolith
    const iceGeo = new THREE.IcosahedronGeometry(2.1, 3);
    // Deform vertices to create jagged ice crystal mountain ridges
    const pos = iceGeo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const noise = Math.sin(v.x * 2.5) * Math.cos(v.y * 3.0) * Math.sin(v.z * 2.2);
      const verticalStretch = Math.max(0, v.y * 0.4);
      v.multiplyScalar(1.0 + noise * 0.28);
      v.y += verticalStretch;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    iceGeo.computeVertexNormals();

    const iceMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#38bdf8'),
      emissive: new THREE.Color('#0284c7'),
      emissiveIntensity: 0.18,
      roughness: 0.12,
      metalness: 0.08,
      transmission: 0.88, // glassmorphic frosted ice transmission
      ior: 1.34, // ice index of refraction
      thickness: 1.8,
      transparent: true,
      opacity: 0.92,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#e0f2fe')
    });

    const iceMesh = new THREE.Mesh(iceGeo, iceMat);
    iceMesh.position.set(-0.3, -0.2, 0);
    group.add(iceMesh);

    // 2. Wireframe / Crystal Lattice Rim Overlay
    const wireGeo = new THREE.IcosahedronGeometry(2.12, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7dd3fc'),
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    wireMesh.position.set(-0.3, -0.2, 0);
    group.add(wireMesh);

    // 3. Floating Ice Crystals & Mist Particles
    const particleCount = 180;
    const partGeo = new THREE.BufferGeometry();
    const partPositions = new Float32Array(particleCount * 3);
    const partScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      partPositions[i * 3] = (Math.random() - 0.5) * 8.0;
      partPositions[i * 3 + 1] = (Math.random() - 0.5) * 6.0;
      partPositions[i * 3 + 2] = (Math.random() - 0.5) * 5.0;
      partScales[i] = Math.random() * 0.08 + 0.02;
    }

    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
    const partMat = new THREE.PointsMaterial({
      color: new THREE.Color('#bae6fd'),
      size: 0.06,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xdff2fd, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 2.0);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const topSunLight = new THREE.PointLight(0xffffff, 2.8, 15);
    topSunLight.position.set(1, 4, 2);
    scene.add(topSunLight);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.35;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y = elapsedTime * 0.06 + mouseX;
      group.rotation.x = Math.sin(elapsedTime * 0.04) * 0.05 + mouseY;
      group.position.y = Math.sin(elapsedTime * 0.6) * 0.06;

      // Particle gentle drift
      const positions = partGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.0015;
      }
      partGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="glacier-monolith-canvas-container"
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-90 transition-opacity duration-700"
    />
  );
};
