import { useEffect, useRef } from "preact/hooks";
import * as THREE from "https://esm.sh/three@0.153.0";  // Import Three.js from esm.sh

export default function SpinningCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Set up Three.js scene, camera, and renderer with anti-aliasing enabled
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(16, 118, 69)");
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });  // Enable anti-aliasing
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);  // Improve sharpness on high-resolution displays
    mount.appendChild(renderer.domElement);

    // Create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffdb1e });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add white edges to the cube
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edgeLines = new THREE.LineSegments(edges, lineMaterial);
    scene.add(edgeLines);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      edgeLines.rotation.x += 0.01;
      edgeLines.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    // Clean up when the component is unmounted
    return () => {
      renderer.setAnimationLoop(null);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
}
