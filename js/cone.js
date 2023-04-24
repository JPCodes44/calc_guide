import * as THREE from './build/three.module.js'
import { ParametricGeometry } from './build/ParametricGeometry.js'

// ----- Scene Initialization ----
const canvas = document.getElementById('canvas-containerC');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 100); // Set the position of the light
    scene.add(directionalLight); // Add the light to the scene
    scene.background = new THREE.Color("#ffffff");

    camera.position.z = 9;
    camera.position.y = 0;
    camera.position.x = 0;

    const material = new THREE.MeshNormalMaterial({
    wireframe: true
    });

material.color = new THREE.Color(0xff0000);

const geometry = new ParametricGeometry(customEquationC, 20, 20);
const mesh = new THREE.Mesh( geometry, material );

// Add the mesh to the scene
scene.add(mesh);


renderer.render(scene, camera);

var a = 50;
var b = 50;
var c = 50;

document.getElementById("widthC").addEventListener("input", function() {
var newBSize = parseInt(this.value);

b = newBSize;

})
document.getElementById("heightC").addEventListener("input", function() {
var newCSize = parseInt(this.value);
c = newCSize;
})
// Event listener for the width input element
document.getElementById("depthC").addEventListener("input", function() {
	// Get the new size from the HTML input element
	var newASize = parseInt(this.value);
  
	// Update the cube width
	a = newASize;
})

// ----- Functions -----

// Define the mathematical equation for the geometry
function customEquationC(u, v, target) {
    const r = 0.5 * u;
    const theta = 2 * Math.PI * v;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    const z = r;
    
      // Set the coordinates of the vertex in the target buffer
      target.set(x, y, z);;
  }

  function updateMeshC() {
	// Calculate the scaling factor based on the new size
	var scaleA = a / 50;
	var scaleB = b / 50;
	var scaleC = c / 50;
  
	// Update the mesh scale property
	mesh.scale.set(scaleA, scaleB, scaleC);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the mesh scaling smoothly
	requestAnimationFrame(updateMeshC);
  }

  function animateC() {
    requestAnimationFrame(animateC);
  
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }

  // ----- Function Calling -----
updateMeshC();
animateC();
