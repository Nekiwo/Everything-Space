import * as THREE from "three";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass.js";
import {UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {FXAAShader} from "three/examples/jsm/shaders/FXAAShader.js";
import {OrbitControls} from "three-orbitcontrols-ts";

import * as shaders from "../../../shaders/dist/DynamicBlob";

import {NextButton} from "../../classes/NextButton";

import {english} from "../i18n/english";


// Big Bang scene
export var BigBang: Function = () => {


    // Making a three js scene
    const scene: THREE.Scene = new THREE.Scene();
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

    // Other
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    camera.position.set(0, 0, 0);
    controls.update();

    // Initialize all static parts in different places (dynamic objects initialized later)


    // Part one: void(the barrier between part 1 and 2)
    const BarrierGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(20, 20, 1);
    const BarrierMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
    const barrier: THREE.Mesh = new THREE.Mesh(BarrierGeometry, BarrierMaterial);
    barrier.position.set(0, 0, 20);
    scene.add(barrier);

    // Part two: superforce
    const SFGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(1, 40, 32);
    const SFMaterial: THREE.ShaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            img: {
                // @ts-ignore
                type: "t",
                value: new THREE.TextureLoader().load("/superforce.png")
            },
            time: {
                // @ts-ignore
                type: "f",
                value: 0
            }
          },
        vertexShader: shaders.DynamicBlob_vert,
        fragmentShader: shaders.DynamicBlob_frag
    });
    const superforce = new THREE.Mesh(SFGeometry, SFMaterial);
    superforce.position.set(0, 0, 0);
    scene.add(superforce);

    // Part three: start of the expansion


    // Part four: first atoms


    // Part five: further expansion and first stars


    // Part six: the current universe and background radioation


    
    // All parts contained in a function array
    // Controlled by the next button
    // (Initializing all dynamic parts here)
    var NB = new NextButton([
        () => {
            // Part one: void
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[1];

            camera.position.set(0, 0, 100);
            controls.target.set(0, 0, 100);
            controls.update();
        },
        () => {
            // Part two: superforce
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[2];

            camera.position.set(0, 0, 10);
            controls.target.set(0, 0, 0);
            controls.update();
        },
        () => {
            // Part three: start of the expansion
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[3];

            
        },
        () => {
            // Part four: first atoms
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[4];

            
        },
        () => {
            // Part five: further expansion and first stars
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[5];

            
        },
        () => {
            // Part six: the current universe and background radioation
            document.getElementById("subtitle").innerHTML = english.subs.BigBang.parts[6];

            
        },
        () => {
            // End screen here
            location.reload();
        }
    ])
    
    // Running every frame, standard three.js/ts

    const start = Date.now();
    const animate = function () {
        requestAnimationFrame(animate);
    
        // Dynamic blob shader
        SFMaterial.uniforms["time"].value = 0.00025 * (Date.now() - start);
        
        controls.update();
        composer.render();
    };
    
    animate();
}