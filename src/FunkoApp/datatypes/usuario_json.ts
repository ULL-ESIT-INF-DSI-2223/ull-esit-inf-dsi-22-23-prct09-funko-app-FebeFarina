import { Usuario } from "./usuario.js";
import { Funko } from "./funko.js";
import fs from "fs";
/**
 * Clase que almacena los datos de un usuario en ficheros JSON
 * @param name Nombre del usuario
 * @param funkos Colección de Funkos del usuario
 */
export class UsuarioJSON extends Usuario {
  constructor(name: string) {
    super(name);
    if (!fs.existsSync("./data/" + name)) {
      console.log("Creating directory: " + name);
      fs.mkdirSync("./data/" + name);
    }
    const files = fs.readdirSync("./data/" + name);
    files.forEach((file) => {
      const data = fs.readFileSync("./data/" + name + "/" + file);
      const funko = JSON.parse(data.toString());
      this.funkos.set(
        new Funko(
          funko.id,
          funko.name,
          funko.description,
          funko.type,
          funko.genre,
          funko.franchise,
          funko.number,
          funko.exclusive,
          funko.special_characteristics,
          funko.price
        )
      );
    });
  }
  /**
   * Método que añade un Funko a la colección del usuario.
   * @param funko Funko a añadir
   * @returns False si el Funko ya existe en la colección, true en caso contrario
   */
  setFunko(funko: Funko): boolean {
    const result = super.setFunko(funko, true);
    if (result) {
      fs.writeFile(
        "./data/" + this.name + "/" + funko.id + ".json",
        JSON.stringify(funko),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
    return result;
  }
  /**
   * Método que elimina un Funko de la colección del usuario.
   * @param id Identificador del Funko a eliminar
   * @returns True si el Funko se ha eliminado correctamente, false en caso contrario
   */
  removeFunko(id: number): boolean {
    const result = super.removeFunko(id);
    if (result) {
      fs.unlink("./data/" + this.name + "/" + id + ".json", (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    return result;
  }
  /**
   * Método que actualiza un Funko de la colección del usuario.
   * @param funko Funko a actualizar
   * @returns False si el Funko no existe en la colección, true en caso contrario
   */
  updateFunko(funko: Funko): boolean {
    const result = super.updateFunko(funko);
    if (result) {
      fs.writeFileSync(
        "./data/" + this.name + "/" + funko.id + ".json",
        JSON.stringify(funko)
      );
    }
    return result;
  }
  /**
   * Método que lista los Funkos de la colección del usuario.
   * @returns True
   */
  listFunkos(): boolean {
    super.listFunkos();
    return true;
  }
  /**
   * Método que muestra un Funko de la colección del usuario.
   * @param id Identificador del Funko a mostrar
   * @returns True
   */
  showFunko(id: number): boolean {
    super.showFunko(id);
    return true;
  }
}
