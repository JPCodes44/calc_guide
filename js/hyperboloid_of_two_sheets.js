import * as THREE from './build/three.module.js'
import { ParametricGeometry } from './build/ParametricGeometry.js'

// ----- Scene Initialization ----
const canvas = document.getElementById('canvas-containerH2');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 100); // Set the position of the light
    scene.add(directionalLight); // Add the light to the scene
    scene.background = new THREE.Color("#ffffff");

    camera.position.z = 50;
    camera.position.y = 0;
    camera.position.x = 0;

    const material = new THREE.MeshNormalMaterial({
    wireframe: true
    });

material.color = new THREE.Color(0xff0000);

const geometry = new ParametricGeometry(customEquationH2, 50, 50);
const geometry2 = new ParametricGeometry(customEquationH22, 50, 50);
const mesh = new THREE.Mesh( geometry, material );
const mesh2 = new THREE.Mesh( geometry2, material );

// Add the mesh to the scene
scene.add(mesh);
scene.add(mesh2);

renderer.render(scene, camera);

var a = 50;
var c = 50;

document.getElementById("heightH2").addEventListener("input", function() {
var newCSize = parseInt(this.value);
c = newCSize;
})
// Event listener for the width input element
document.getElementById("depthH2").addEventListener("input", function() {
	// Get the new size from the HTML input element
	var newASize = parseInt(this.value);
  
	// Update the cube width
	a = newASize;
})

// ----- Functions -----

// Define the mathematical equation for the geometry
function customEquationH2(u, v, target) {
    const a = document.getElementById('heightH2').value;
    const c = document.getElementById('depthH2').value;
    const phi = Math.PI * 2 * (u - 0.5) ;
    const theta = 2 * Math.PI * 2 * (v - 0.5);
    const x = a * Math.sinh(phi) * Math.cos(theta);
    const y = a * Math.sinh(phi) * Math.sin(theta);
    const z = -c * Math.cosh(phi);
    // Set the coordinates of the vertex in the target buffer
    target.set(x, y, z);
  }

  function customEquationH22(u, v, target) {
    const changeA = document.getElementById('heightH2').value;
    const changeC = document.getElementById('depthH2').value;
    const phi = Math.PI * 2 * (u - 0.5) ;
    const theta = 2 * Math.PI * 2 * (v - 0.5);
    const x = changeA * Math.sinh(phi) * Math.cos(theta);
    const y = changeA * Math.sinh(phi) * Math.sin(theta);
    const z = changeC * Math.cosh(phi);
    // Set the coordinates of the vertex in the target buffer
    target.set(x, y, z);
  }

  function updateMeshH2() {
	// Calculate the scaling factor based on the new size
	var scaleA = a / 50;
	var scaleC = c / 50;
  
	// Update the mesh scale property
	mesh.scale.set(scaleA, scaleA, scaleC);
	mesh2.scale.set(scaleA, scaleA, scaleC);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the mesh scaling smoothly
	requestAnimationFrame(updateMeshH2);
  }

  function animateH2() {
    requestAnimationFrame(animateH2);
  
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }

  // ----- Function Calling -----
updateMeshH2();
animateH2();
