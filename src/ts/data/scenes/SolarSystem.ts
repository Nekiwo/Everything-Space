// importing classes and etc.
import * as THREE from "three";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass.js";
import {UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {FXAAShader} from "three/examples/jsm/shaders/FXAAShader.js";
import {OrbitControls} from "three-orbitcontrols-ts";

import {Planet} from "../../classes/Planet";
import {Timestamp} from "../../classes/Timestamp";

import {CalcTime} from "../../functions/CalcTime";

import {planets} from "../../data/Planets";
import {Renderer, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_12x10_Format} from "three";

// Global variables


// Making a three js scene
export const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Effects setup
const RenderScene: RenderPass = new RenderPass(scene, camera);

const FxaaPass: ShaderPass = new ShaderPass(FXAAShader);

const pixelRatio = renderer.getPixelRatio();

FxaaPass.material.uniforms["resolution"].value.x = 1 / (document.body.offsetWidth * pixelRatio);
FxaaPass.material.uniforms["resolution"].value.y = 1 / (document.body.offsetHeight * pixelRatio);

const BloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
BloomPass.threshold = 0;
BloomPass.strength = 0.9;
BloomPass.radius = 0.1;

const composer: EffectComposer = new EffectComposer(renderer);
composer.addPass(RenderScene);
composer.addPass(BloomPass);
composer.addPass(FxaaPass);

// Fix canvas size on window resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

planets.forEach((planet: Planet) => {
    planet.DrawPlanet(planet.PlanetRotation, scene);
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
    if (CamZoom > 7) {
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
    composer.render();
};

animate();