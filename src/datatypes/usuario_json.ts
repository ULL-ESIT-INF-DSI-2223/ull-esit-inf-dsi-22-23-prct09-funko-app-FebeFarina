import { Usuario } from "./usuario.js";
import { FunkoCollection } from "./funko_collection.js";
import { Funko } from "./funko.js";
import chalk from "chalk";
import fs from "fs";

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
  updateFunko(funko: Funko): boolean {
    const result = super.updateFunko(funko);
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
  listFunkos(): boolean {
    super.listFunkos();
    return true;
  }
  showFunko(id: number): boolean {
    super.showFunko(id);
    return true;
  }
}
