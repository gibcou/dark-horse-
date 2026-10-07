import * as THREE from "three";

/**
 * Builds a stylized low-poly truck/Jeep from a build config.
 * Config values come from src/lib/buildOptions.js.
 */
export function buildTruckModel(b) {
  const g = new THREE.Group();

  const paintMat = new THREE.MeshStandardMaterial({ color: b.paint, metalness: 0.5, roughness: 0.35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x17181b, metalness: 0.2, roughness: 0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x9db8c6, metalness: 0.9, roughness: 0.08, transparent: true, opacity: 0.5 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x40444a, metalness: 0.75, roughness: 0.35 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: 0.95 });
  const rimMat = new THREE.MeshStandardMaterial({
    color: b.wheels === "beadlock" ? 0xc7a86a : b.wheels === "method" ? 0x6b6f75 : 0x9aa0a8,
    metalness: 0.85,
    roughness: 0.25,
  });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3c4, emissiveIntensity: 1.4 });
  const lampDimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3c4, emissiveIntensity: 0.5 });
  const lampRedMat = new THREE.MeshStandardMaterial({ color: 0xe1251b, emissive: 0xe1251b, emissiveIntensity: 0.9 });

  const box = (w, h, d, mat, x, y, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    g.add(m);
    return m;
  };

  const jeep = b.vehicle === "jeep";
  const L = jeep ? 3.5 : 4.5;
  const W = 1.9;
  const half = L / 2;
  const wheelR = 0.3 + b.tires * 0.004;
  const lift = b.lift * 0.11;
  const bodyY = wheelR + 0.32 + lift;

  // Chassis
  box(L, 0.28, W * 0.92, darkMat, 0, bodyY, 0);

  if (jeep) {
    box(1.3, 0.5, 1.7, paintMat, half - 0.75, bodyY + 0.39, 0); // hood
    box(2.0, 0.55, 1.74, paintMat, -0.25, bodyY + 0.42, 0); // tub
    box(0.9, 0.5, 1.5, glassMat, -0.1, bodyY + 0.85, 0); // windshield
    box(0.06, 0.06, 1.5, steelMat, -0.5, bodyY + 1.05, 0); // roll cage top
    box(0.06, 0.35, 0.06, steelMat, -0.5, bodyY + 0.88, 0.72);
    box(0.06, 0.35, 0.06, steelMat, -0.5, bodyY + 0.88, -0.72);
    box(0.9, 0.35, 1.5, darkMat, -1.2, bodyY + 0.6, 0); // rear cargo
    // spare tire
    const spare = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.9, wheelR * 0.9, 0.26, 20), rubberMat);
    spare.rotation.x = Math.PI / 2;
    spare.position.set(-half - 0.05, bodyY + 0.55, 0);
    g.add(spare);
    const spareRim = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.5, wheelR * 0.5, 0.28, 20), rimMat);
    spareRim.rotation.x = Math.PI / 2;
    spareRim.position.copy(spare.position);
    g.add(spareRim);
  } else {
    box(1.5, 0.45, 1.74, paintMat, half - 0.85, bodyY + 0.37, 0); // hood
    box(1.5, 0.62, 1.7, paintMat, half - 2.2, bodyY + 0.56, 0); // cab
    box(1.35, 0.5, 1.58, glassMat, half - 2.25, bodyY + 0.98, 0); // glass
    box(1.8, 0.1, 1.7, paintMat, -half + 1.0, bodyY + 0.42, 0); // bed floor
    box(1.8, 0.45, 0.08, paintMat, -half + 1.0, bodyY + 0.6, 0.82); // bed side
    box(1.8, 0.45, 0.08, paintMat, -half + 1.0, bodyY + 0.6, -0.82);
    box(0.08, 0.45, 1.7, paintMat, -half + 0.14, bodyY + 0.6, 0); // tailgate
    box(0.08, 0.45, 1.64, paintMat, -half + 1.86, bodyY + 0.6, 0); // cab wall
  }

  // Topper / rack / tent
  const topY = bodyY + (jeep ? 1.15 : 1.28);
  const topX = jeep ? -0.6 : -half + 1.05;
  const hasRack = b.topper === "rack" || b.topper === "tent";
  if (b.topper === "topper" && !jeep) {
    box(1.9, 0.55, 1.72, glassMat, topX, bodyY + 1.05, 0);
  } else if (hasRack) {
    box(1.9, 0.06, 1.6, steelMat, topX, topY, 0);
    box(1.9, 0.16, 0.06, steelMat, topX, topY + 0.08, 0.76);
    box(1.9, 0.16, 0.06, steelMat, topX, topY + 0.08, -0.76);
    box(0.06, 0.3, 1.5, steelMat, topX + 0.9, topY - 0.1, 0);
    box(0.06, 0.3, 1.5, steelMat, topX - 0.9, topY - 0.1, 0);
    if (b.topper === "tent") box(1.5, 0.35, 1.3, paintMat, topX, topY + 0.2, 0);
  }

  // Bumpers
  if (b.bumper === "stock") {
    box(0.25, 0.3, W, darkMat, half + 0.05, bodyY + 0.1, 0);
  } else {
    box(0.4, 0.42, W + 0.06, steelMat, half + 0.12, bodyY + 0.12, 0);
    box(0.3, 0.1, 1.2, steelMat, half + 0.2, bodyY - 0.12, 0); // skid
    if (b.bumper === "full") {
      box(0.08, 0.75, 0.08, steelMat, half + 0.15, bodyY + 0.5, 0.62);
      box(0.08, 0.75, 0.08, steelMat, half + 0.15, bodyY + 0.5, -0.62);
      box(0.08, 0.08, 1.32, steelMat, half + 0.15, bodyY + 0.88, 0); // hoop
    }
  }
  box(0.25, 0.28, W, darkMat, -half - 0.05, bodyY + 0.1, 0); // rear bumper

  // Headlights + taillights
  box(0.06, 0.14, 0.3, lampDimMat, half + 0.02, bodyY + 0.3, 0.62);
  box(0.06, 0.14, 0.3, lampDimMat, half + 0.02, bodyY + 0.3, -0.62);
  box(0.05, 0.12, 0.3, lampRedMat, -half + 0.02, bodyY + 0.55, 0.65);
  box(0.05, 0.12, 0.3, lampRedMat, -half + 0.02, bodyY + 0.55, -0.65);

  // Lighting upgrades
  if (b.lighting === "bar") {
    const barX = jeep ? -0.5 : half - 2.2;
    const barY = jeep ? bodyY + 1.22 : bodyY + 1.35;
    box(1.1, 0.09, 0.14, lampMat, barX, barY, 0);
    box(0.06, 0.12, 0.06, steelMat, barX - 0.45, barY - 0.09, 0);
    box(0.06, 0.12, 0.06, steelMat, barX + 0.45, barY - 0.09, 0);
  } else if (b.lighting === "pods") {
    for (const s of [1, -1]) {
      const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 14), lampMat);
      pod.rotation.z = Math.PI / 2;
      pod.position.set(half + 0.35, bodyY + 0.25, s * 0.6);
      g.add(pod);
    }
  }

  // Wheels
  const frontX = L / 2 - 0.8;
  const rearX = -L / 2 + 0.8;
  for (const x of [frontX, rearX]) {
    for (const s of [1, -1]) {
      const w = new THREE.Group();
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(wheelR, wheelR, 0.34, 28), rubberMat);
      tire.rotation.x = Math.PI / 2;
      w.add(tire);
      const rimM = new THREE.Mesh(new THREE.CylinderGeometry(wheelR * 0.55, wheelR * 0.55, 0.36, 16), rimMat);
      rimM.rotation.x = Math.PI / 2;
      w.add(rimM);
      if (b.wheels === "beadlock") {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(wheelR * 0.72, 0.03, 8, 24), rimMat);
        ring.position.z = s * 0.175;
        w.add(ring);
      }
      w.position.set(x, wheelR, s * (W / 2 - 0.1));
      g.add(w);
    }
  }

  // Ground shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1, 32),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(half + 0.7, W, 1);
  shadow.position.y = 0.012;
  g.add(shadow);

  return g;
}