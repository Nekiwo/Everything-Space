import * as THREE from "three";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer.js";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass.js";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass.js";
import {UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {FXAAShader} from "three/examples/jsm/shaders/FXAAShader.js";
import {OrbitControls} from "three-orbitcontrols-ts";

import * as shaders from "../../../shaders/dist/shaders";

import {NextButton} from "../../classes/NextButton";


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
    camera.position.set(0, 0, 0);
    controls.update();

    
    // Initialize all static scenes in different places (dynamic objects initialized later)

    // Scene two: emptiness
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
    console.log(superforce);

    // All scenes contained in a function array
    // Controlled by the next button
    // (Initializing all dynamic parts here)
    var NB = new NextButton([
        () => {
            // Scene one: emptiness

            document.getElementById("subtitle").innerHTML = "test1";

            camera.position.set(0, 0, 10);
            controls.update();
        },
        () => {
            // Scene two: superforce

            document.getElementById("subtitle").innerHTML = "test1";

            camera.position.set(0, 0, 0);
            controls.update();
        },
        () => {
            
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