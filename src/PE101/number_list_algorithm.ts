/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Clase abstracta que implementa el algoritmo de filtrado, mapeo y reducción
 */
export abstract class NumberListAlgorithm {
  constructor(protected list: number[]) {
    this.list = list;
  }
  /**
   * Método que ejecuta el algoritmo
   * @returns Número que es el resultad del algoritmo
   */
  public run() {
    this.filterList();
    this.afterFilter();
    this.mapList();
    this.afterMap();
    return this.reduceList();
  }
  /**
   * Método que implementa el filtrado de la lista, dejando sólo los números pares
   */
  protected filterList(
    filter: (value: number) => boolean = (value) => value % 2 === 0
  ) {
    const filteredList: number[] = [];
    this.list.forEach((value) => {
      if (filter(value)) {
        filteredList.push(value);
      }
    });
    this.list = filteredList;
  }
  /**
   * Método que implementa el mapeo de la lista, multiplicando todos los elementos por 2
   */
  protected mapList(func: (value: number) => number = (value) => value * 2) {
    const mappedList: number[] = [];
    this.list.forEach((value) => {
      mappedList.push(func(value));
    });
    this.list = mappedList;
  }
  /**
   * Método abstracto sobre la reducción de la lista
   */
  protected abstract reduceList(): number;
  /**
   * Hook que se ejecuta después del filtrado
   */
  protected afterFilter(): void {}
  /**
   * Hook que se ejecuta después del mapeo
   */
  protected afterMap(): void {}
}
