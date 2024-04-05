import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xffffff); // Set background color to white

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
// controls.minPolarAngle = Math.PI/2;
// controls.maxPolarAngle = Math.PI/2;
controls.target.set(0, 1, 0);
controls.update();

// First spotlight
const spotLight1 = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1);
spotLight1.position.set(0, 25, 0);
// spotLight1.castShadow = true;
// spotLight1.shadow.bias = -0.0001;
scene.add(spotLight1);

// Second spotlight
const spotLight2 = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1); // Example of a red spotlight
spotLight2.position.set(-10, 20, 10); // Example of a different position
// spotLight2.castShadow = true;
// spotLight2.shadow.bias = -0.0001;
scene.add(spotLight2);

// Third spotlight
const spotLight3 = new THREE.SpotLight(0xffffff, 3, 100, 0.22, 1); // Example of a green spotlight
spotLight3.position.set(10, 20, -10); // Example of a different position
// spotLight3.castShadow = true;
// spotLight3.shadow.bias = -0.0001;
scene.add(spotLight3);

// Increase intensity of spotlights
spotLight1.intensity = 2000;
spotLight2.intensity = 2000;
spotLight3.intensity = 2000;


const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
scene.add(light);

const loader = new GLTFLoader().setPath('millennium_falcon1/');


// After loading the model, before adding it to the scene
loader.load('scene.gltf', (gltf) => {
  const mesh = gltf.scene;

  // Traverse through each child mesh of the model
  mesh.traverse((child) => {
    if (child.isMesh) {
      // Decrease the size of each mesh by setting its scale
      child.scale.set(0.3, 0.3, 0.3); // Adjust scale as needed
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  mesh.position.set(0, 1.05, -1);
  scene.add(mesh);








  document.getElementById('progress-container').style.display = 'none';
}, 
(xhr) => {
  if (xhr.lengthComputable) {
    const percentComplete = xhr.loaded / xhr.total * 100;
    document.getElementById('progress').innerHTML = `LOADING ${Math.min(percentComplete, 100)}%`;
  }
},
(error) => {
  console.error('Error loading GLTF model:', error);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

