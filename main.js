import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//create  scene

const scene = new THREE.Scene()
scene.background= new THREE.Color('#ff5733')
// create and add camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//create and add geo    
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe:true })
const  cube = new THREE.Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5
//set up the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0.5, 0 );
			controls.enablePan = false;
			controls.enableDamping = true;

//animate the scene

function animate(){
    requestAnimationFrame(animate)
			controls.update();
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)

}
animate()

