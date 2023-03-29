import { NumberListAlgorithm } from "./number_list_algorithm.js";
/**
 * Clase que implementa el algoritmo de filtrado, mapeo, multiplicación y reducción
 */
export class FilterMapProdReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    /**
     * Método que implementa el filtrado de la lista, dejando sólo los números impares
     */
    protected filterList() {
        const filteredList: number[] = [];
        this.list.forEach((value) => {
            if (value % 2 === 1) {
                filteredList.push(value);
            }
        });
        this.list = filteredList;
    }
    /**
     * Método que implementa el mapeo de la lista, multiplicando todos los elementos por 10
     */
    protected mapList() {
        const mappedList: number[] = [];
        this.list.forEach((value) => {
            mappedList.push(value * 10);
        });
        this.list = mappedList;
    }
    /**
     * Método que implementa la reducción de la lista, multiplicando todos los elementos
     * @returns Número que es el resultado de la multiplicación de todos los elementos
     */
    protected reduceList(): number {
        let accumulator = 1;
        this.list.forEach((value) => {
            accumulator = accumulator * value;
        });
        return accumulator;
    }
    /**
     * Hook que se ejecuta después del filtrado
     */
    protected afterFilter(): void {
        console.log("FMPR after filter: ", this.list);
    }
    /**
     * Hook que se ejecuta después del mapeo
     */
    protected afterMap(): void {
        console.log("FMPR after map: ", this.list);
    }
}