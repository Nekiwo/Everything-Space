import * as THREE from "three";

// Timestampcene class for each timestamp
export class Timestamp {
    name: string;
    year: number;
    start: Function = async (): Promise<void> => {
        Promise.resolve("test")
    };
    order: number;
    constructor(args?: any) {
        this.name = args.name;
        this.year = args.year;
        this.start = args.start;
        this.order = args.order;
    }
}