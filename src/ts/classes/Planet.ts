import * as THREE from "three";
import {MeshLine, MeshLineMaterial, MeshLineRaycast} from "three.meshline";
import {CalcOrbitPoint} from "../functions/CalcOrbitPoint";


// Planet class for each planet

// NOTE for myself: pls edit class
// https://solarsystem.nasa.gov/planets/overview/

// initiate each planet
export class Planet {
    name: string;
    radius: number;
    model: string;
    PlanetRotation: number;
    XTilt: number;
    ZTilt: number;
    OrbitRadius: number;
    constructor(args?: any) {
        this.name = args.name;
        this.radius = args.radius;
        this.model = args.model;
        this.PlanetRotation = args.PlanetRotation; // Planet rotation
        this.OrbitRadius = args.OrbitRadius;
        this.XTilt = args.XTilt; // X axis tilt of the orbit
        this.ZTilt = args.ZTilt; // Z axis tilt of the orbit
    }
    DrawPlanet: Function = (PlanetRotation: number = this.PlanetRotation, scene: THREE.Scene) => {
        this.PlanetRotation = PlanetRotation;

        var CircumGeometry: any = new MeshLine();

        // Having to calculate points manually as this is a meshline
        var CircumPoints: Array<number> = [];
        for (let i = this.PlanetRotation; i <= 360; i += 5.625) {
            var CalcOrbit = CalcOrbitPoint({
                OrbitRadius: this.OrbitRadius,
                XTilt: this.XTilt,
                ZTilt: this.ZTilt,
                NewPlanetRotation: i
            });
            let x = CalcOrbit[0];
            let y = CalcOrbit[1];
            let z = CalcOrbit[2];
            CircumPoints.push(x, y, z);
        }
        CircumGeometry.setPoints(CircumPoints, p => {if (p > 0.05) {return Math.sqrt(p) * 0.3}});

        var CircumMaterial: MeshLineMaterial = new MeshLineMaterial({color: new THREE.Color(0xFFFFFF), sizeAttenuation: false, lineWidth: 0.01});
        var circum: THREE.Mesh = new THREE.Mesh(CircumGeometry, CircumMaterial);

        // Orbit lighting
        

        // Testing Planets, models coming soon
        var PlanetGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(this.radius * 24000000, 20, 16);
        var PlanetMaterial: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF, side: THREE.FrontSide});
        var planet: THREE.Mesh = new THREE.Mesh(PlanetGeometry, PlanetMaterial);

        // Position the planets depending on their rotation degree
        var CalcOrbit = CalcOrbitPoint({
            OrbitRadius: this.OrbitRadius,
            XTilt: this.XTilt,
            ZTilt: this.ZTilt,
            NewPlanetRotation: this.PlanetRotation
        });
        let x = CalcOrbit[0];
        let y = CalcOrbit[1];
        let z = CalcOrbit[2];

        planet.position.set(x, y, z);

        scene.add(circum);
        scene.add(planet);
    }
    RemovePlanet: Function = () => {
        // remove planet from the scene
    }
}