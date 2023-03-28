import { Usuario } from "./usuario.js";
import { FunkoCollection } from "./funko_collection.js";
import { Funko } from "./funko.js";
import chalk from "chalk";
import fs from "fs";

export class UsuarioJSON extends Usuario {
  constructor(name: string) {
    super(name);
    if (fs.existsSync("/data/" + name)) {
      fs.mkdirSync("./data/" + name);
    }
    const files = fs.readdirSync("./data/" + name);
    files.forEach((file) => {
      fs.readFileSync("./data/" + name + "/" + file, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const funko = JSON.parse(data.toString());
          this.funkos.add(
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
        }
        console.log(this.funkos);
      });
    });
  }

  addFunko(funko: Funko): number {
    const id = super.addFunko(funko, true);
    if (id !== -1) {
      fs.writeFile(
        "./data/" + this.name + "/" + id + ".json",
        JSON.stringify(funko),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
    return id;
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
  updateFunko(id: number, funko: Funko): boolean {
    const result = super.updateFunko(id, funko);
    if (result) {
      fs.writeFile(
        "./data/" + this.name + "/" + id + ".json",
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
}
