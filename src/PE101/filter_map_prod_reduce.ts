import { NumberListAlgorithm } from "./number_list_algorithm.js";

export class FilterMapProdReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    protected filterList() {
        const filteredList: number[] = [];
        this.list.forEach((value) => {
            if (value % 2 === 1) {
                filteredList.push(value);
            }
        });
        this.list = filteredList;
    }
    protected mapList() {
        const mappedList: number[] = [];
        this.list.forEach((value) => {
            mappedList.push(value * 10);
        });
        this.list = mappedList;
    }
    protected reduceList(): number {
        let accumulator = 1;
        this.list.forEach((value) => {
            accumulator = accumulator * value;
        });
        return accumulator;
    }
    protected afterFilter(): void {
        console.log("FMPR after filter: ", this.list);
    }
    protected afterMap(): void {
        console.log("FMPR after map: ", this.list);
    }
}