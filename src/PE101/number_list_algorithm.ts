/* eslint-disable @typescript-eslint/no-empty-function */
export abstract class NumberListAlgorithm {
    constructor(protected list: number[]) {
        this.list = list;
    }
    public run() {
        this.filterList();
        this.afterFilter();
        this.mapList();
        this.afterMap();
        return this.reduceList();
    }
    protected filterList() {
        const filteredList: number[] = [];
        this.list.forEach((value) => {
            if (value % 2 === 0) {
                filteredList.push(value);
            }
        });
        this.list = filteredList;
    }
    protected mapList() {
        const mappedList: number[] = [];
        this.list.forEach((value) => {
            mappedList.push(value * 2);
        });
        this.list = mappedList;
    }
    protected abstract reduceList(): number;
    protected afterFilter(): void {}
    protected afterMap(): void {}
}