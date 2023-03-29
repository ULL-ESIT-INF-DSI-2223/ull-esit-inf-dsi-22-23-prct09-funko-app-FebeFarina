import { NumberListAlgorithm } from "./number_list_algorithm.js";
/**
 * Clase que implementa el algoritmo de filtrado, mapeo, resta y reducción
 */
export class FilterMapSubReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    /**
     * Método que implementa el mapeo de la lista, multiplicando todos los elementos por 10
     */
    protected mapList(): void {
        const mappedList: number[] = [];
        this.list.forEach((value) => {
            mappedList.push(value * 10);
        });
        this.list = mappedList;
    }
    /**
     * Método que implementa la reducción de la lista, restando todos los elementos
     * @returns Número que es el resultado de la resta de todos los elementos
     */
    protected reduceList(): number {
        let accumulator = 0;
        this.list.forEach((value) => {
            accumulator = accumulator - value;
        });
        return accumulator;
    }
    /**
     * Hook que se ejecuta después del filtrado
     */
    protected afterFilter(): void {
        console.log("FMSR after filter: ", this.list);
    }
    /**
     * Hook que se ejecuta después del mapeo
     */
    protected afterMap(): void {
        console.log("FMSR after map: ", this.list);
    }
}