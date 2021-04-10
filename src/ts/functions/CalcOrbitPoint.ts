// Calculate a point of certain angle on an orbit/ellipse using planet data
export var CalcOrbitPoint: Function = (args: any) => {
    let x = args.OrbitRadius * 24 * Math.cos(args.NewPlanetRotation * (Math.PI/180));
    let y = args.OrbitRadius * 24 * Math.sin(args.NewPlanetRotation * (Math.PI/180));

    // Make Z depend on orbit tilts
    var AltX = args.OrbitRadius * 24 * Math.cos((args.NewPlanetRotation + args.ZTilt) * (Math.PI/180));
    var PreZ = args.OrbitRadius * 24 * Math.sin(args.XTilt * (Math.PI/180));

    let z = AltX * (PreZ / (args.OrbitRadius * 24));

    // calculate a point on x,y,z views
    // return result
    return [x, y, z]
}