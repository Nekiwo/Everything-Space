import * as THREE from "three";
import {GraphicsLevel} from "../index";


// Planet class for each planet

// NOTE for myself: pls edit class
// https://solarsystem.nasa.gov/planets/overview/

// initiate each planet
export class Planet {
    name: string;
    radius: number;
    mass: number;
    model: string;
    SunDeg: number;
    x: number;
    z: number;
    aphelion: number;
    XTilt: number; // XTilt is longitude of the ascending node in this context
    ZTilt: number; // ZTilt is inclination in this context
    LocalTilt: number; // LocalTilt is argument of periapsis in this context
    inclination: number;
    XRadius: number;
    ZRadius: number;
    constructor(args?: any) {
        this.name = args.name;
        this.radius = args.radius;
        this.mass = args.mass;
        this.model = args.model;
        this.SunDeg = args.SunDeg;
        this.XRadius = args.XRadius;
        this.ZRadius = args.ZRadius;
        this.aphelion = args.aphelion;
        this.XTilt = args.XTilt;
        this.ZTilt = args.ZTilt;
        this.LocalTilt = args.LocalTilt;
        this.inclination = args.inclination;
        // Calculate the coords for the ellipse instead of circle
        
        
        this.x = this.XRadius * Math.cos((this.SunDeg - 90) * (Math.PI/180));
        this.z = this.aphelion * Math.sin((this.SunDeg - 90) * (Math.PI/180));
    }
    DrawPlanet: Function = (SunDeg: number = this.SunDeg, scene: THREE.Scene) => {
        this.SunDeg = SunDeg;
        
        // Draw each planet and path on a canvas element for purely testing/showcase purposes
        // This implemintation does not erase previous frames, and has many other impurities
        // If you want to change the way planets are rendered, you can do it here

        // Calculate the coords for the ellipse instead of circle and draw new
        var NewX: number = this.XRadius * Math.cos((SunDeg - 90) * (Math.PI/180));
        var NewZ: number = this.aphelion * Math.sin((SunDeg - 90) * (Math.PI/180));
        this.x = NewX;
        this.z = NewZ;

        /*
        var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
        
        var planet:CanvasRenderingContext2D = canvas.getContext("2d");
        var circum:CanvasRenderingContext2D = canvas.getContext("2d");
        circum.beginPath();
        circum.ellipse(1500, 1500, this.XRadius, this.aphelion, 0, 0, 2 * Math.PI);
        circum.stroke();

        planet.fillStyle = "#ff0000";
        planet.beginPath();
        planet.arc(NewX, NewZ, 5, 0, 2 * Math.PI);
        planet.fill();
        */

        var CircumGeometry: THREE.TorusGeometry = new THREE.TorusGeometry(this.XRadius * 24, 0.05, 6, (GraphicsLevel + 1) * 12);
        var CircumMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.FrontSide, transparent: true, opacity: 0.3});
        var circum: THREE.Mesh = new THREE.Mesh(CircumGeometry, CircumMaterial);

        // I might've messed up here, do a pull request or sumbit an issue on the GitHub repo if you know the right way to rotate the orbits
        circum.scale.set(1, this.ZRadius * 2 / this.XRadius, 1);
        circum.rotation.set(this.XTilt * (Math.PI / 180), 0, this.LocalTilt * (Math.PI / 180));
        circum.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), this.ZTilt * (Math.PI / 180));
        circum.translateZ(this.XRadius - this.aphelion);
        console.log(this.XRadius - this.aphelion);
    
        // Testong Planets, models coming soon
        var PlanetGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(this.radius * 24, 20, 16);
        var PlanetMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF, side: THREE.FrontSide});
        var planet: THREE.Mesh = new THREE.Mesh(PlanetGeometry, PlanetMaterial);

        planet.position.set(0, 0, 0);

        scene.add(circum);
        scene.add(planet);
    }
    RemovePlanet: Function = () => {
        // remove planet from the scene
    }
}