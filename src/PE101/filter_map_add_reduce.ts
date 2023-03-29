import { NumberListAlgorithm } from "./number_list_algorithm.js";

export class FilterMapAddReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    protected filterList(): void {
        const filteredList: number[] = [];
        this.list.forEach((value) => {
            if (value % 2 === 1) {
                filteredList.push(value);
            }
        });
        this.list = filteredList;
    }
    protected reduceList(): number {
        let accumulator = 0;
        this.list.forEach((value) => {
            accumulator = accumulator + value;
        });
        return accumulator;
    }
    protected afterFilter(): void {
        console.log("FMAR after filter: ", this.list);
    }
    protected afterMap(): void {
        console.log("FMAR after map: ", this.list);
    }
}