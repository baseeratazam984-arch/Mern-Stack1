"use client";

import { useEffect, useRef } from "react";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Fog,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
  WireframeGeometry,
} from "three";

export default function Scene3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const scene = new Scene();
    scene.fog = new Fog(new Color("#071014"), 4, 14);

    const camera = new PerspectiveCamera(42, width / height, 0.1, 40);
    camera.position.set(0, 0.2, 6.4);

    const renderer = new WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new Group();
    scene.add(root);

    const core = new LineSegments(
      new WireframeGeometry(new IcosahedronGeometry(1.55, 1)),
      new LineBasicMaterial({
        color: "#d6ff4b",
        transparent: true,
        opacity: 0.55,
      }),
    );
    root.add(core);

    const nodeCount = 90;
    const positions = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i += 1) {
      const r = 2.1 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const pointsGeo = new BufferGeometry();
    pointsGeo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    const points = new Points(
      pointsGeo,
      new PointsMaterial({
        color: "#e26d3a",
        size: 0.045,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
      }),
    );
    root.add(points);

    const links = [];
    for (let i = 0; i < nodeCount; i += 1) {
      for (let j = i + 1; j < nodeCount; j += 1) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.35) {
          links.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2],
          );
        }
      }
    }

    const lineGeo = new BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new Float32BufferAttribute(new Float32Array(links), 3),
    );
    const network = new LineSegments(
      lineGeo,
      new LineBasicMaterial({
        color: "#8aa3a8",
        transparent: true,
        opacity: 0.28,
      }),
    );
    root.add(network);

    let frame = 0;
    let visible = true;
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointer = (event) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(mount);

    const onVisibility = () => {
      visible = document.visibilityState === "visible" && visible;
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      pointer.x += (target.x - pointer.x) * 0.05;
      pointer.y += (target.y - pointer.y) * 0.05;
      root.rotation.y += 0.003;
      root.rotation.x = pointer.y * 0.4;
      root.rotation.z = pointer.x * 0.15;
      core.rotation.y -= 0.006;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      pointsGeo.dispose();
      lineGeo.dispose();
      core.geometry.dispose();
      core.material.dispose();
      points.material.dispose();
      network.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}
