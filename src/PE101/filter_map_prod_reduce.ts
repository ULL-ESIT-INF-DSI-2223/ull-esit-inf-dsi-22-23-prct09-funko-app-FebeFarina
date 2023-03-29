import { NumberListAlgorithm } from "./number_list_algorithm.js";
/**
 * Clase que implementa el algoritmo de filtrado, mapeo, multiplicación y reducción
 */
export class FilterMapProdReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
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