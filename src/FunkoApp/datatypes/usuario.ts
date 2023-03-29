import { Funko } from "./funko.js";
import { FunkoCollection } from "./funko_collection.js";
import chalk from "chalk";

const log = console.log;

export class Usuario {
  protected funkos = new FunkoCollection();
  constructor(protected name: string) {}
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
  updateFunko(funko: Funko): boolean {
    const result = this.funkos.update(funko);
    if (result) {
      log(chalk.green("Funko updated at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
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
      return false;
    }
    return true;
  }
}
