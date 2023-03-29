import { Funko } from "./funko.js";
import { FunkoCollection } from "./funko_collection.js";
import chalk from "chalk";

const log = console.log;
/**
 * Clase que representa un usuario de la aplicación
 * @param name Nombre del usuario
 * @param funkos Colección de Funkos del usuario
 */
export class Usuario {
  protected funkos = new FunkoCollection();
  constructor(protected name: string) {}
  /**
   * Método que añade un Funko a la colección del usuario.
   * @param funko Funko a añadir
   * @param print Indica si se debe mostrar por consola el resultado de la operación
   * @returns False si el Funko ya existe en la colección, true en caso contrario
   */
  setFunko(funko: Funko, print: boolean): boolean {
    const result = this.funkos.set(funko);
    if (result) {
      if (print) {
        log(chalk.green("Funko added at " + this.name + " collection"));
      }
    } else {
      if (print) {
        log(chalk.red("Funko already exists at " + this.name + " collection"));
      }
    }
    return result;
  }
  /**
   * Método que actualiza un Funko de la colección del usuario.
   * @param funko Funko a actualizar
   * @returns False si el Funko no existe en la colección, true en caso contrario
   */
  updateFunko(funko: Funko): boolean {
    const result = this.funkos.update(funko);
    if (result) {
      log(chalk.green("Funko updated at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
  /**
   * Método que elimina un Funko de la colección del usuario.
   * @param id Identificador del Funko a eliminar
   * @returns False si el Funko no existe en la colección, true en caso contrario
   */
  removeFunko(id: number): boolean {
    const result = this.funkos.remove(id);
    if (result) {
      log(chalk.green("Funko removed at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
  /**
   * Método que devuelve un Funko de la colección del usuario.
   * @param id Identificador del Funko a devolver
   * @returns El Funko con el identificador indicado, undefined en caso de no existir
   */
  getFunko(id: number): Funko | undefined {
    return this.funkos.get(id);
  }
  /**
   * Método que lista los Funkos de la colección del usuario.
   */
  listFunkos() {
    log(chalk.green(this.name + " Funko Pop collection"));
    this.funkos.forEach((funko) => {
      log("--------------------------------");
      funko.showInfo();
    });
    return true;
  }
  /**
   * Método que muestra la información de un Funko de la colección del usuario.
   * @param id Identificador del Funko a mostrar
   */
  showFunko(id: number) {
    const funko = this.funkos.get(id);
    if (funko) {
      funko.showInfo();
    } else {
      log(chalk.red("Funko not found at" + this.name + "collection"));
      return false;
    }
    return true;
  }
}
