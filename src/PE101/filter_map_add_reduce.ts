import { NumberListAlgorithm } from "./number_list_algorithm.js";
/**
 * Clase que implementa el algoritmo de filtrado, mapeo, suma y reducción
 */
export class FilterMapAddReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    /**
     * Método que implementa el filtrado de la lista, dejando sólo los números impares
     */
    protected filterList(): void {
        const filteredList: number[] = [];
        this.list.forEach((value) => {
            if (value % 2 === 1) {
                filteredList.push(value);
            }
        });
        this.list = filteredList;
    }
    /**
     * Método que implementa la reducción de la lista, sumando todos los elementos
     * @returns Número que es el resultado de la suma de todos los elementos
     */
    protected reduceList(): number {
        let accumulator = 0;
        this.list.forEach((value) => {
            accumulator = accumulator + value;
        });
        return accumulator;
    }
    /**
     * Hook que se ejecuta después del filtrado
     */
    protected afterFilter(): void {
        console.log("FMAR after filter: ", this.list);
    }
    /**
     * Hook que se ejecuta después del mapeo
     */
    protected afterMap(): void {
        console.log("FMAR after map: ", this.list);
    }
}