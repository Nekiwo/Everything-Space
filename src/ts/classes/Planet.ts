import * as THREE from "three";
import {MeshLine, MeshLineMaterial, MeshLineRaycast} from "three.meshline";
import {GraphicsLevel} from "../index";
import {CalcOrbitPoint} from "../functions/CalcOrbitPoint";


// Planet class for each planet

// NOTE for myself: pls edit class
// https://solarsystem.nasa.gov/planets/overview/

// initiate each planet
export class Planet {
    name: string;
    radius: number;
    model: string;
    SunDeg: number;
    XTilt: number;
    ZTilt: number;
    OrbitRadius: number;
    constructor(args?: any) {
        this.name = args.name;
        this.radius = args.radius;
        this.model = args.model;
        this.SunDeg = args.SunDeg;
        this.OrbitRadius = args.OrbitRadius;
        this.XTilt = args.XTilt;
        this.ZTilt = args.ZTilt;
    }
    DrawPlanet: Function = (SunDeg: number = this.SunDeg, scene: THREE.Scene) => {
        this.SunDeg = SunDeg;

        // Testing orbit, better version coming soon
        var CircumGeometry: any = new MeshLine();

        // Having to calculate points manually as this is a meshline
        var CircumPoints: Array<number> = [];
        for (let i = 0; i <= 360; i += 22.5) {
            /*
            var CalcOrbit = CalcOrbitPoint({
                OrbitRadius: this.OrbitRadius,
                XTilt: this.XTilt,
                ZTilt: this.ZTilt,
                NewSunDeg: i
            });
            let x = CalcOrbit[0];
            let y = CalcOrbit[1];
            let z = CalcOrbit[2];
            CircumPoints.push(x, y, z);
            console.log(i, x)
            
            */
            let x = this.OrbitRadius * 24 * Math.cos(i);
            let y = this.OrbitRadius * 24 * -Math.sin(i);
            CircumPoints.push(x, y, 0);
            console.log(i, this.OrbitRadius * 24, x, y)
        }
        CircumGeometry.setPoints(CircumPoints, p => 1 - Math.sqrt(p) * 1.5);

        var CircumMaterial: any = new MeshLineMaterial({color: new THREE.Color(0xFFFFFF), sizeAttenuation: false, lineWidth: 0.003});
        var circum: THREE.Mesh = new THREE.Mesh(CircumGeometry, CircumMaterial);

        // Testing Planets, models coming soon
        var PlanetGeometry: THREE.SphereGeometry = new THREE.SphereGeometry(this.radius * 24000000, 20, 16);
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