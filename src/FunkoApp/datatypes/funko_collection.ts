import { Funko } from "./funko.js";
/**
 * Clase que representa una colección de Funkos
 * @param collection Mapa que contiene los Funkos de la colección
 */
export class FunkoCollection {
  protected collection: Map<number, Funko>;
  constructor() {
    this.collection = new Map<number, Funko>();
  }
  /**
   * Método que añade un Funko a la colección.
   * @param funko Funko a añadir
   * @returns False si el Funko ya existe en la colección, true en caso contrario
   */
  set(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      return false;
    } else {
      this.collection.set(funko.id, funko);
      return true;
    }
  }
  /**
   * Método que actualiza un Funko de la colección.
   * @param funko Funko a añadir
   * @returns False si el Funko no existe en la colección, true en caso contrario
   */
  update(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      this.collection.set(funko.id, funko);
      return true;
    } else {
      return false;
    }
  }
  /**
   * Método que elimina un Funko de la colección.
   * @param id Identificador del Funko a eliminar
   * @returns True si el Funko se ha eliminado correctamente, false en caso contrario
   */
  remove(id: number): boolean {
    return this.collection.delete(id);
  }
  /**
   * Método que devuelve un Funko de la colección.
   * @param id Identificador del Funko a devolver
   * @returns Funko con el identificador indicado, undefined en caso de no existir
   */
  get(id: number): Funko | undefined {
    return this.collection.get(id);
  }
  /**
   * Método que recorre la colección de Funkos.
   * @param callback Función que se ejecutará por cada Funko de la colección
   */
  forEach(callback: (funko: Funko) => void): void {
    this.collection.forEach((funko) => {
      callback(funko);
    });
  }
}
