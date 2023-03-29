import { NumberListAlgorithm } from "./number_list_algorithm.js";

export class FilterMapSubReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    protected mapList(): void {
        const mappedList: number[] = [];
        this.list.forEach((value) => {
            mappedList.push(value * 10);
        });
        this.list = mappedList;
    }
    protected reduceList(): number {
        let accumulator = 0;
        this.list.forEach((value) => {
            accumulator = accumulator - value;
        });
        return accumulator;
    }
    protected afterFilter(): void {
        console.log("FMSR after filter: ", this.list);
    }
    protected afterMap(): void {
        console.log("FMSR after map: ", this.list);
    }
}