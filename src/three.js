// Import statements
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

class Scene3D {
  constructor() {
    this.init();
    this.setupLights();
    this.setupGeometry();
    this.setupEventListeners();
    this.animate();
  }

  init() {
    // Initialize basic properties
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.windowX = window.innerWidth;
    this.windowY = window.innerHeight;

    // Setup scene
    this.canvas = document.querySelector("canvas.webgl");
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    // Setup camera
    this.setupCamera();

    // Setup renderer
    this.setupRenderer();

    // Setup debug if needed
    // this.gui = new dat.GUI();
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.windowX / this.windowY,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 2);
    this.scene.add(this.camera);

    // Uncomment to enable orbit controls
    // this.controls = new OrbitControls(this.camera, this.canvas);
    // this.controls.enableDamping = true;
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.renderer.setSize(this.windowX, this.windowY);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  setupLights() {
    // Main purple light
    this.pointLight = new THREE.PointLight(0xef00ff, 0.009);
    this.pointLight.position.set(2, 3, 4);
    this.scene.add(this.pointLight);

    // Coral accent light
    this.pointLight2 = new THREE.PointLight(0xff7f50, 4.35);
    this.pointLight2.position.set(-2, 3, -3);
    this.scene.add(this.pointLight2);

    // Blue accent light
    this.pointLight3 = new THREE.PointLight(0x96ff, 9.31);
    this.pointLight3.position.set(3, -1.39, -3);
    this.scene.add(this.pointLight3);
  }

  setupGeometry() {
    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load(
      "src/static/textures/languageTexture.png"
    );

    // Create sphere
    const geometry = new THREE.SphereGeometry(0.65, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.2,
      metalness: 0.9,
      normalMap: normalTexture,
      color: new THREE.Color(0x0c4a6e),
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);
  }

  setupEventListeners() {
    // Resize handler
    window.addEventListener("resize", () => this.onResize());

    // Mouse movement
    document.addEventListener("mousemove", (event) => this.onMouseMove(event));

    // Scroll
    window.addEventListener("scroll", () => this.onScroll());
  }

  onResize() {
    // Update sizes
    this.windowX = window.innerWidth;
    this.windowY = window.innerHeight;

    // Update camera
    this.camera.aspect = this.windowX / this.windowY;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(this.windowX, this.windowY);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onMouseMove(event) {
    // Calculate mouse position as percentage of window size
    // This will give us values between -0.5 and 0.5
    this.mouseX = (event.clientX - this.windowX / 2) / this.windowX;
    this.mouseY = (event.clientY - this.windowY / 2) / this.windowY;
  }

  onScroll() {
    this.sphere.position.y = window.scrollY * 0.001;
  }

  animate() {
    // Adjust the multiplier to control sensitivity
    this.targetX = this.mouseX * 2;
    this.targetY = this.mouseY * 2;
    const elapsedTime = this.clock.getElapsedTime();

    // Update sphere
    this.sphere.rotation.y = 0.5 * elapsedTime;
    this.sphere.rotation.y += 0.5 * (this.targetX - this.sphere.rotation.y);
    this.sphere.rotation.x += 0.05 * (this.targetY - this.sphere.rotation.x);
    this.sphere.position.z += -0.05 * (this.targetY - this.sphere.rotation.x);

    // Render
    this.renderer.render(this.scene, this.camera);

    // Continue animation loop
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize the scene
const scene = new Scene3D();
