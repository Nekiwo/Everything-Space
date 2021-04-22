import * as THREE from "three";

// Timestampcene class for each timestamp
export class Timestamp {
    name: string;
    order: number;
    start: Function = async (): Promise<void> => {
        Promise.resolve("test")
    };
}