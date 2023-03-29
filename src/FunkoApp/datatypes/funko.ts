import chalk from "chalk";

const log = console.log;
/**
 * Clase que representa un Funko
 * @param id Identificador del Funko
 * @param name Nombre del Funko
 * @param description Descripción del Funko
 * @param type Tipo de Funko
 * @param genre Género del Funko
 * @param franchise Franquicia del Funko
 * @param number Número del Funko
 * @param exclusive Indica si el Funko es exclusivo
 * @param special_characteristics Características especiales del Funko
 * @param price Precio del Funko
 */
export class Funko {
  constructor(
    public id: number,
    private name: string,
    private description: string,
    private type: string,
    private genre: string,
    private franchise: string,
    private number: number,
    private exclusive: boolean,
    private special_characteristics: string[],
    private price: number
  ) {}
  /**
   * Método que devuelve la valoración del Funko en función de su precio
   * @returns Valoración del Funko en función de su precio
   */
  getMarketValue(): string {
    if (this.price > 100) {
      return "Very High";
    } else if (this.price > 50) {
      return "High";
    } else if (this.price > 20) {
      return "Medium";
    } else {
      return "Low";
    }
  }
  /**
   * Método que muestra la información del Funko
   */
  showInfo() {
    log(chalk.green("ID: " + this.id));
    log(chalk.green("Name: " + this.name));
    log(chalk.green("Description: " + this.description));
    log(chalk.green("Type: " + this.type));
    log(chalk.green("Genre: " + this.genre));
    log(chalk.green("Franchise: " + this.franchise));
    log(chalk.green("Number: " + this.number));
    log(chalk.green("Exclusive: " + this.exclusive));
    log(chalk.green("Special Characteristics: "));
    this.special_characteristics.forEach((characteristic) => {
      log(chalk.green("\t- " + characteristic));
    });
    switch (this.getMarketValue()) {
      case "Very High":
        log(chalk.green("Market Value: " + chalk.green(this.getMarketValue())));
        break;
      case "High":
        log(
          chalk.green("Market Value: " + chalk.yellow(this.getMarketValue()))
        );
        break;
      case "Medium":
        log(chalk.green("Market Value: " + chalk.blue(this.getMarketValue())));
        break;
      case "Low":
        log(chalk.green("Market Value: " + chalk.red(this.getMarketValue())));
        break;
    }
    return true;
  }
}
