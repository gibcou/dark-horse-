import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildTruckModel } from "@/lib/truckModel";

export default function TruckScene({ build }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const truckRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x232528);
    scene.fog = new THREE.Fog(0x232528, 14, 32);

    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(6.8, 3.4, 6.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0x9aa6b0, 0x1c1d20, 0.85));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(6, 9, 4);
    scene.add(key);
    const rim = new THREE.PointLight(0xe1251b, 40);
    rim.position.set(-7, 3, -7);
    scene.add(rim);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(12, 48),
      new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.95, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    const grid = new THREE.GridHelper(24, 24, 0x3f4247, 0x33363b);
    grid.position.y = 0.001;
    scene.add(grid);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(0, 0.9, 0);
    controls.minDistance = 5;
    controls.maxDistance = 16;
    controls.maxPolarAngle = Math.PI / 2 - 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;
    renderer.domElement.addEventListener("pointerdown", () => {
      controls.autoRotate = false;
    });

    let raf;
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(mount);
    sceneRef.current = scene;

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (truckRef.current) {
      truckRef.current.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      scene.remove(truckRef.current);
    }
    const truck = buildTruckModel(build);
    truckRef.current = truck;
    scene.add(truck);
  }, [build]);

  return <div ref={mountRef} className="w-full h-full" />;
}