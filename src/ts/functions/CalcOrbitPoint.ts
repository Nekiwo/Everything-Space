import {GraphicsLevel} from "../index";
// Calculate a point of certain angle on an orbit/ellipse using planet data
export var CalcOrbitPoint: Function = (args: any) => {
    var PreX = args.OrbitRadius * 24 * Math.cos((args.NewSunDeg + args.ZTilt) * (Math.PI / 180));
    var PreY = args.OrbitRadius * 24 * Math.sin((args.NewSunDeg + args.ZTilt) * (Math.PI / 180));

    var x = (Math.sqrt(PreX*PreX + PreY*PreY)) * Math.cos(-args.ZTilt * (Math.PI / 180));
    var y = (Math.sqrt(PreX*PreX + PreY*PreY)) * Math.sin(-args.ZTilt * (Math.PI / 180));

    var XViewXRadius = 0;
    var XViewYRadius = 0;
    var XViewXAngle = 0;
    var z = 0;

    // calculate a point on x,y,z views
    // return result
    return [x, y, z]
}
//https://math.stackexchange.com/questions/426150/what-is-the-general-equation-of-the-ellipse-that-is-not-in-the-origin-and-rotate