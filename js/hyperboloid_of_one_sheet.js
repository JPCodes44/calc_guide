import * as THREE from './build/three.module.js'
import { ParametricGeometry } from './build/ParametricGeometry.js'

// ----- Scene Initialization ----
const canvas = document.getElementById('canvas-containerH');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 100); // Set the position of the light
    scene.add(directionalLight); // Add the light to the scene
    scene.background = new THREE.Color("#ffffff");

    camera.position.z = 6;
    camera.position.y = 0;
    camera.position.x = 0;

    const material = new THREE.MeshNormalMaterial({
    wireframe: true
    });

material.color = new THREE.Color(0xff0000);

const geometry = new ParametricGeometry(customEquationH, 50, 50);
const mesh = new THREE.Mesh( geometry, material );

// Add the mesh to the scene
scene.add(mesh);


renderer.render(scene, camera);

var a = 50;
var b = 50;
var c = 50;

document.getElementById("widthH").addEventListener("input", function() {
var newBSize = parseInt(this.value);

b = newBSize;

})
document.getElementById("heightH").addEventListener("input", function() {
var newCSize = parseInt(this.value);
c = newCSize;
})
// Event listener for the width input element
document.getElementById("depthH").addEventListener("input", function() {
	// Get the new size from the HTML input element
	var newASize = parseInt(this.value);
  
	// Update the cube width
	a = newASize;
})

// ----- Functions -----

// Define the mathematical equation for the geometry
function customEquationH(u, v, target) {
    const a = document.getElementById('widthH').value;
    const b = document.getElementById('heightH').value;
    const c = document.getElementById('depthH').value;
    const theta = 2 * Math.PI * 2 * (v - 0.5);
    const x = a * Math.sqrt(1 + Math.pow(2*(u - 0.5), 2)) * Math.cos(theta);
    const y = b * Math.sqrt(1 + Math.pow(2*(u - 0.5), 2)) * Math.sin(theta);
    const z = c * 2*(u - 0.5) 
    
      // Set the coordinates of the vertex in the target buffer
      target.set(x, y, z);
  }

  function updateMeshH() {
	// Calculate the scaling factor based on the new size
	var scaleA = a / 50;
	var scaleB = b / 50;
	var scaleC = c / 50;
  
	// Update the mesh scale property
	mesh.scale.set(scaleA, scaleB, scaleC);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the mesh scaling smoothly
	requestAnimationFrame(updateMeshH);
  }

  function animateH() {
    requestAnimationFrame(animateH);
  
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }

  // ----- Function Calling -----
updateMeshH();
animateH();
