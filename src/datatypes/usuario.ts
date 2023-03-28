import { Funko } from "./funko.js";
import { FunkoCollection } from "./funko_collection.js";
import chalk from "chalk";

const log = console.log;

export class Usuario {
  protected funkos = new FunkoCollection();
  constructor(protected name: string) {}
  addFunko(funko: Funko, print: boolean): number {
    if (this.funkos.get(funko.id)) {
      if (print) {
        log(chalk.red("Funko already exists at " + this.name + " collection"));
      }
      return -1;
    } else {
      const id = this.funkos.add(funko);
      if (print) {
        log(chalk.green("Funko added at " + this.name + " collection"));
      }
      return id;
    }
  }
  removeFunko(id: number): boolean {
    const result = this.funkos.remove(id);
    if (result) {
      log(chalk.green("Funko removed at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
  updateFunko(id: number, funko: Funko): boolean {
    const result = this.funkos.update(id, funko);
    if (result) {
      log(chalk.green("Funko updated at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
  getFunko(id: number): Funko | undefined {
    return this.funkos.get(id);
  }
  listFunkos() {
    log(chalk.green(this.name + " Funko Pop collection"));
    this.funkos.forEach((funko) => {
      log("--------------------------------");
      funko.showInfo();
    });
    return true;
  }
  showFunko(id: number) {
    const funko = this.funkos.get(id);
    if (funko) {
      funko.showInfo();
    } else {
      log(chalk.red("Funko not found at" + this.name + "collection"));
    }
    return true;
  }
}
