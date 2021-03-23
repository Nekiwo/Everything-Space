// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used

// importing classes and etc.
import * as THREE from "three";
import {OrbitControls} from "three-orbitcontrols-ts";

import {Planet} from "./classes/Planet";

import {CalcTime} from "./functions/CalcTime";

import {planets} from "./data/Planets";

// Global variables

// Level of graphics from 1-3, changed based on the device's performance
export var GraphicsLevel: number = 3;


// Making a three js scene
export const scene:THREE.Scene = new THREE.Scene();
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Fix canvas size on window resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

planets.forEach((planet: Planet) => {
    planet.DrawPlanet(planet.SunDeg, scene);
});

const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 0);
controls.update();


// Listen for mouse wheel movement for zooming
// adapt for mobile pinching later: https://stackoverflow.com/a/11183333/12848536
var CamZoom: number = 4;
var FocusPos: THREE.Vector3 = new THREE.Vector3();

camera.position.copy(FocusPos);
camera.translateZ(CamZoom);

document.addEventListener("mousewheel", (event: WheelEvent) => {
    if (CamZoom > 4) {
        camera.position.copy(FocusPos);
        CamZoom += event.deltaY / 25;
        camera.translateZ(CamZoom);
    } else {
        CamZoom = 8;
    }
});

// Running every frame, standard three.js/ts
const animate = function () {
    requestAnimationFrame(animate);

    

    controls.update();
    renderer.render(scene, camera);
};

animate();