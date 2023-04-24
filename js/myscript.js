import * as THREE from './build/three.module.js';

const canvas = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(window.devicePixelRatio * 2);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 100); // Set the position of the light
scene.add(directionalLight); // Add the light to the scene

// irreplaceable code 
const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
const material = new THREE.MeshPhongMaterial({color: 0x000000, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.background = new THREE.Color("#ffffff");
scene.add(cube);

camera.position.z = 3;
camera.position.y = 0;
camera.position.x = 0;

var cubeWidth = 50;
var cubeHeight = 50;
var cubeDepth = 50;

document.getElementById("width").addEventListener("input", function() {
var newHeightSize = parseInt(this.value);

cubeHeight = newHeightSize;

})
document.getElementById("height").addEventListener("input", function() {
var newDepthSize = parseInt(this.value);
cubeDepth = newDepthSize;
})
// Event listener for the width input element
document.getElementById("depth").addEventListener("input", function() {
	// Get the new size from the HTML input element
	var newWidthSize = parseInt(this.value);
  
	// Update the cube width
	cubeWidth = newWidthSize;
})
  
  // Update function that animates the cube scaling
  function updateCube() {
	// Calculate the scaling factor based on the new size
	var scaleWidth = cubeWidth / 50;
	var scaleHeight = cubeHeight / 50;
	var scaleDepth = cubeDepth / 50;
  
	// Update the cube's scale property
	cube.scale.set(scaleWidth, scaleHeight, scaleDepth);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the cube scaling smoothly
	requestAnimationFrame(updateCube);
  }

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
// Call the update function to start the animation loop
updateCube();
animate();

