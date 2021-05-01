// Timestampcene class for each timestamp
export class Timestamp {
    name: string;
    year: number;
    start: Function;
    order: number;
    constructor(args?: any) {
        this.name = args.name;
        this.year = args.year;
        this.start = args.start;
        this.order = args.order;
    }
}