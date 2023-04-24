import * as THREE from './build/three.module.js';

const canvas = document.getElementById('canvas-containerCy');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setPixelRatio(window.devicePixelRatio * 2);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 100); // Set the position of the light
scene.add(directionalLight); // Add the light to the scene

// irreplaceable code 
const geometry = new THREE.CylinderGeometry( 1, 1, 50,50 );
const material = new THREE.MeshNormalMaterial({ wireframe: true});
const cylinder = new THREE.Mesh(geometry, material);
scene.background = new THREE.Color("#ffffff");
scene.add(cylinder);

camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;

var cylinderRadius = 50;
var cylinderHeight = 50;

document.getElementById("radiusCy").addEventListener("input", function() {
var newRadiusSize = parseInt(this.value);

cylinderRadius = newRadiusSize;

})
document.getElementById("heightCy").addEventListener("input", function() {
var newHeightSize = parseInt(this.value);
cylinderHeight = newHeightSize;
})
  
  // Update function that animates the cube scaling
  function updateCylinder() {
	// Calculate the scaling factor based on the new size
	var scaleRadius = cylinderRadius / 100;
	var scaleHeight = cylinderHeight / 1000;
  
	// Update the cube's scale property
	cylinder.scale.set(scaleRadius, scaleHeight, scaleRadius);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the cube scaling smoothly
	requestAnimationFrame(updateCylinder);
  }

function animateCy() {
  requestAnimationFrame(animateCy);

  cylinder.rotation.x += 0.01;
  cylinder.rotation.z += 0.001;
  cylinder.rotation.y += 0.01;

  renderer.render(scene, camera);
}
// Call the update function to start the animation loop
updateCylinder();
animateCy();
