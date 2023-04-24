import * as THREE from './build/three.module.js'
import { ParametricGeometry } from './build/ParametricGeometry.js'

// ----- Scene Initialization ----
const canvas = document.getElementById('canvas-containerHp');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(window.devicePixelRatio * 2);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 100); // Set the position of the light
    scene.add(directionalLight); // Add the light to the scene
    scene.background = new THREE.Color("#ffffff");

    camera.position.z = 3.5;
    camera.position.y = 0;
    camera.position.x = 0;

    const material = new THREE.MeshNormalMaterial({
    wireframe: true
    });

material.color = new THREE.Color(0xff0000);

const geometry = new ParametricGeometry(customEquation, 30, 30);
const mesh = new THREE.Mesh( geometry, material );

// Add the mesh to the scene
scene.add(mesh);


renderer.render(scene, camera);

var a = 50;
var b = 50;
var c = 50;

document.getElementById("widthHp").addEventListener("input", function() {
var newBSize = parseInt(this.value);

b = newBSize;

})
document.getElementById("heightHp").addEventListener("input", function() {
var newCSize = parseInt(this.value);
c = newCSize;
})
// Event listener for the width input element
document.getElementById("depthHp").addEventListener("input", function() {
	// Get the new size from the HTML input element
	var newASize = parseInt(this.value);
  
	// Update the cube width
	a = newASize;
})

// ----- Functions -----

// Define the mathematical equation for the geometry
function customEquation(u, v, target) {
    const a = document.getElementById('widthHp').value;;
    const b = document.getElementById('heightHp').value;;
    const c = document.getElementById('depthHp').value;;
    const x = a*(0.5-u);
    const y = b*(0.5-v);
    const z = c * (Math.pow(x,2) - Math.pow(y,2));
    
      // Set the coordinates of the vertex in the target buffer
      target.set(x, y, z);;
  }

  function updateMesh() {
	// Calculate the scaling factor based on the new size
	var scaleA = a / 50;
	var scaleB = b / 50;
	var scaleC = c / 50;
  
	// Update the mesh scale property
	mesh.scale.set(scaleA, scaleB, scaleC);
  
	// Render the scene
	renderer.render(scene, camera);
  
	// Use requestAnimationFrame to animate the mesh scaling smoothly
	requestAnimationFrame(updateMesh);
  }

  function animate() {
    requestAnimationFrame(animate);
  
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }

  // ----- Function Calling -----
updateMesh();
animate();
