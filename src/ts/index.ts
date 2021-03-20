// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used

// importing classes and etc.
import * as THREE from "three";

import {Planet} from "./classes/Planet";
import {CamOrigin} from "./classes/CamOrigin";

import {DrawPath} from "./functions/DrawPath";
import {CalcTime} from "./functions/CalcTime";

import {planets} from "./data/Planets";


console.log(1)

// Making a three js scene
var CamPos: CamOrigin = new CamOrigin()

export const scene:THREE.Scene = new THREE.Scene();
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

planets.forEach((planet: Planet) => {
    planet.DrawPlanet();
});
camera.position.z = -5

const animate = function () {
    requestAnimationFrame(animate);

    console.log(2)

    renderer.render(scene, camera);
};

animate();

export var AddObj: Function = (mesh: THREE.Mesh) => {
    scene.add(mesh);
}

console.log(3)