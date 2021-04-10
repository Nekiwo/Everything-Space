import {Planet} from "../classes/Planet";
// all planets in one array

// NOTE: radius of planets is written in km
// ANOTHER NOTE: radius of planet's sun orbit is written in billions of km
export var planets:Planet[] = [
    new Planet({
        name: "Sun",
        radius: 0.000696340000,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 0,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 0.000000002439,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 0.115,
        XTilt: 7,
        ZTilt: 77.4
    }),
    new Planet({
        name: "Venus",
        radius: 0.000000006502,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 0.216,
        XTilt: 3.4,
        ZTilt: 76.6
    }),
    new Planet({
        name: "Earth",
        radius: 0.000000006378,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 0.299,
        XTilt: 0,
        ZTilt: 103
    }),
    new Planet({
        name: "Mars",
        radius: 0.000000003396,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 0.455,
        XTilt: 1.9,
        ZTilt: 336
    }),
    new Planet({
        name: "Jupiter",
        radius: 0.000000071492,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 1.557,
        XTilt: 1.3,
        ZTilt: 14.2
    }),
    new Planet({
        name: "Saturn",
        radius: 0.000000060268,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 2.867,
        XTilt: 2.5,
        ZTilt: 92.9
    }),
    new Planet({
        name: "Uranus",
        radius: 0.000000025559,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 5.744,
        XTilt: 0.8,
        ZTilt: 170.9
    }),
    new Planet({
        name: "Neptune",
        radius: 0.000000024764,
        model: "",
        PlanetRotation: 0,
        OrbitRadius: 8.990,
        XTilt: 1.8,
        ZTilt: 48
    })
];
// SOURCE: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
// https://en.wikipedia.org/wiki/Longitude_of_the_ascending_node
// https://en.wikipedia.org/wiki/Argument_of_periapsis
// https://solarsystem.nasa.gov/planets/overview/