// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used

// importing classes and etc.
import * as THREE from "three";
import {OrbitControls} from "three-orbitcontrols-ts";

import {Planet} from "./classes/Planet";

import {DrawPath} from "./functions/DrawPath";
import {CalcTime} from "./functions/CalcTime";

import {planets} from "./data/Planets";

// Making a three js scene
export const scene:THREE.Scene = new THREE.Scene();
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

planets.forEach((planet: Planet) => {
    console.log(planet.name);
    planet.DrawPlanet(planet.SunDeg, scene);
});

const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 0);
controls.update();

document.addEventListener( 'mousewheel', (event: WheelEvent) => {
    camera.position.z += event.deltaY;
    console.log(event.deltaY);
    //camera.fov = Math.max( Math.min( camera.fov, fovMAX ), fovMIN );
    //camera.projectionMatrix = new THREE.Matrix4().makePerspective(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
});

const animate = function () {
    requestAnimationFrame(animate);

    

    controls.update();
    renderer.render(scene, camera);
};

animate();


console.log(3)