// Camera origin class
export class CamOrigin {
    x: number = 0;
    y: number = 0;
    z: number = 0;
    eulerX: number;
    eulerY: number;
    eulerZ: number;
    constructor(args?: any) {
        this.eulerX = 0;
        this.eulerY = 0;
        this.eulerZ = 0;
    }
    pos: Function = (vector: string, value: number) => {
        this[vector] = value;
    }
    angle: Function = (vector: string, value: number) => {
        this["euler" + vector.toUpperCase()] = value;
    }
}