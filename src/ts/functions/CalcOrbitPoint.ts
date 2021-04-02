import {GraphicsLevel} from "../index";
// Calculate a point of certain angle on an orbit/ellipse using planet data
export var CalcOrbitPoint: Function = (args: any) => {
    // calculate x axis view of new ellipse
    // calculate y axis view of new ellipse
    var ZViewXRadius = args.XRadius;
    var ZViewYRadius = args.YRadius*2 - args.YRadius*2 * Math.sin(args.XTilt * (Math.PI / 180));
    console.log(Math.cos(args.XTilt * (Math.PI / 180)))
    var ZViewZAngle = args.LocalTilt * (Math.PI / 180) + args.ZTilt * (Math.PI / 180);
    var PreX = ZViewXRadius * 24 * Math.cos(args.NewSunDeg * 2 * Math.PI);
    var PreY = ZViewYRadius * 24 * Math.sin(args.NewSunDeg * 2 *  Math.PI);
    var x = 0;
    var y = 0;
    // calculate z axis view of new ellipse
    var XViewXRadius = 0;
    var XViewYRadius = 0;
    var XViewXAngle = 0;
    var z = 0;
    // calculate a point on x,y,z views
    // return result
    return [x, y, z]
}
//https://math.stackexchange.com/questions/426150/what-is-the-general-equation-of-the-ellipse-that-is-not-in-the-origin-and-rotate