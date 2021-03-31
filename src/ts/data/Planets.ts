import {Planet} from "../classes/Planet";
// all planets in one array

// NOTE: radius of planets is written in km
// ANOTHER NOTE: radius of planet's sun orbit is written in billions of km
// ANOTHER ANOTHER NOTE: mass of planets is written in 10^24kg
export var planets:Planet[] = [
    new Planet({
        name: "Sun",
        radius: 0.000696340000,
        mass: 1988500,
        model: "",
        SunDeg: 0,
        XRadius: 0,
        YRadius: 0,
        aphelion: 0,
        XTilt: 0,
        ZTilt: 0,
        LocalTilt: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 0.000000002439,
        mass: 0.33,
        model: "",
        SunDeg: 0,
        XRadius: 0.115,
        YRadius: 0.056,
        aphelion: 0.069,
        XTilt: 7,
        ZTilt: 48.3,
        LocalTilt: 29.1
    }),
    new Planet({
        name: "Venus",
        radius: 0.000000006502,
        mass: 4.87,
        model: "",
        SunDeg: 0,
        XRadius: 0.216,
        YRadius: 0.108,
        aphelion: 0.108,
        XTilt: 3.4,
        ZTilt: 76.6,
        LocalTilt: 54.8
    }),
    new Planet({
        name: "Earth",
        radius: 0.000000006378,
        mass: 5.97,
        model: "",
        SunDeg: 0,
        XRadius: 0.299,
        YRadius: 0.149,
        aphelion: 0.152,
        XTilt: 0,
        ZTilt: -11.2,
        LocalTilt: 114.2
    }),
    new Planet({
        name: "Mars",
        radius: 0.000000003396,
        mass: 0.642,
        model: "",
        SunDeg: 0,
        XRadius: 0.455,
        YRadius: 0.226,
        aphelion: 0.249,
        XTilt: 1.9,
        ZTilt: 49.5,
        LocalTilt: 286.5
    }),
    new Planet({
        name: "Jupiter",
        radius: 0.000000071492,
        mass: 1898,
        model: "",
        SunDeg: 0,
        XRadius: 1.557,
        YRadius: 0.777,
        aphelion: 0.816,
        XTilt: 1.3,
        ZTilt: 100.4,
        LocalTilt: 273.8
    }),
    new Planet({
        name: "Saturn",
        radius: 0.000000060268,
        mass: 568,
        model: "",
        SunDeg: 0,
        XRadius: 2.867,
        YRadius: 1.431,
        aphelion: 1.514,
        XTilt: 2.5,
        ZTilt: 113.6,
        LocalTilt: 339.3
    }),
    new Planet({
        name: "Uranus",
        radius: 0.000000025559,
        mass: 86.8,
        model: "",
        SunDeg: 0,
        XRadius: 5.744,
        YRadius: 2.869,
        aphelion: 3.003,
        XTilt: 0.8,
        ZTilt: 74,
        LocalTilt: 96.9
    }),
    new Planet({
        name: "Neptune",
        radius: 0.000000024764,
        mass: 102,
        model: "",
        SunDeg: 0,
        XRadius: 8.990,
        YRadius: 4.494,
        aphelion: 4.545,
        XTilt: 1.8,
        ZTilt: 131.7,
        LocalTilt: 276.3
    })
];
// SOURCE: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
// https://en.wikipedia.org/wiki/Longitude_of_the_ascending_node
// https://en.wikipedia.org/wiki/Argument_of_periapsis
// https://solarsystem.nasa.gov/planets/overview/