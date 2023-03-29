import { NumberListAlgorithm } from "./number_list_algorithm.js";

export class FilterMapDivReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    protected reduceList(): number {
        let accumulator = 32;
        this.list.forEach((value) => {
            accumulator = accumulator / value;
        });
        return accumulator;
    }
    protected afterFilter(): void {
        console.log("FMDR after filter: ", this.list);
    }
    protected afterMap(): void {
        console.log("FMDR after map: ", this.list);
    }
}