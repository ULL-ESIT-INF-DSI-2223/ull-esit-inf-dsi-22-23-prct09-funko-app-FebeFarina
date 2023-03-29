import { NumberListAlgorithm } from "./number_list_algorithm.js";
/**
 * Clase que implementa el algoritmo de filtrado, mapeo, división y reducción
 */
export class FilterMapDivReduce extends NumberListAlgorithm {
    constructor(list: number[]) {
        super(list);
    }
    /**
     * Método que implementa la reducción de la lista, dividiendo todos los elementos
     * @returns Número que es el resultado de la división de todos los elementos
     */
    protected reduceList(): number {
        let accumulator = 32;
        this.list.forEach((value) => {
            accumulator = accumulator / value;
        });
        return accumulator;
    }
    /**
     * Hook que se ejecuta después del filtrado
     */
    protected afterFilter(): void {
        console.log("FMDR after filter: ", this.list);
    }
    /**
     * Hook que se ejecuta después del mapeo
     */
    protected afterMap(): void {
        console.log("FMDR after map: ", this.list);
    }
}