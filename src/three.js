import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// Loading
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load(
  "src/static/textures/languageTexture.png"
);

// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.SphereGeometry(0.65, 64, 64);

// Materials
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.2;
material.metalness = 0.9;
material.normalMap = normalTexture;
material.color = new THREE.Color(0x0c4a6e);

// Mesh
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lights
const pointLight = new THREE.PointLight(0xef00ff, 0.009);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

// Light 2
const pointLight2 = new THREE.PointLight(0x991b1b, 0.1);
pointLight2.position.set(-3, 3, -3);
pointLight2.intensity = 4.35;
scene.add(pointLight2);

// const light1 = gui.addFolder("Light 1");

// light1.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
// light1.add(pointLight2.position, "y").min(-3).max(3).step(0.01);
// light1.add(pointLight2.position, "z").min(-3).max(3).step(0.01);
// light1.add(pointLight2, "intensity").min(0).max(10).step(0.01);

// const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1);
// scene.add(pointLightHelper2);

// Light 3
const pointLight3 = new THREE.PointLight(0x96ff, 0.1);
pointLight3.position.set(3, -1.39, -3);
pointLight3.intensity = 9.31;
scene.add(pointLight3);

// const light2 = gui.addFolder("Light 2");

// light2.add(pointLight3.position, "x").min(-3).max(3).step(0.01);
// light2.add(pointLight3.position, "y").min(-3).max(3).step(0.01);
// light2.add(pointLight3.position, "z").min(-3).max(3).step(0.01);
// light2.add(pointLight3, "intensity").min(0).max(10).step(0.01);

// const light2Color = {
//   color: 0xff0000,
// };

// light2.addColor(light2Color, "color").onChange(() => {
//   pointLight3.color.set(light2Color.color);
// });

// const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1);
// scene.add(pointLightHelper3);

// Light 4
// const light4 = gui.addFolder("Light 4");
// const pointLight4 = new THREE.PointLight(0x96ff, 0.1);
// pointLight4.position.set(200, 200, 2);
// pointLight4.intensity = 1;
// scene.add(pointLight4);

// const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1);
// scene.add(pointLightHelper4);

// light4.add(pointLight4.position, "x").min(-30).max(30).step(0.01);
// light4.add(pointLight4.position, "y").min(-30).max(30).step(0.01);
// light4.add(pointLight4.position, "z").min(-30).max(30).step(0.01);
// light4.add(pointLight4, "intensity").min(0).max(10).step(0.01);

// const light4Color = {
//   color: 0xff0000,
// };

// light4.addColor(light4Color, "color").onChange(() => {
//   pointLight4.color.set(light4Color.color);
// });

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Animate
 */

document.addEventListener("mousemove", onDocumentMouseMove);
window.addEventListener("scroll", updateSphere);

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const windowX = window.innerWidth;
const windowY = window.innerHeight;

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowX;
  mouseY = event.clientY - windowY;
}

function updateSphere(event) {
  sphere.position.y = window.scrollY * 0.001;
}

const clock = new THREE.Clock();

const tick = () => {
  targetX = mouseX * 0.001;
  targetY = mouseY * 0.001;
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.5 * elapsedTime;
  sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
  sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
  sphere.position.z += -0.05 * (targetY - sphere.rotation.x);

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
