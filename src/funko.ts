export type FunkoType = "Pop!" | "Pop! Rides" | "Vynil Soda" | "Vynil Gold";

export class Funko {
  constructor(
    private name: string,
    private id: number,
    private description: string,
    private type: FunkoType,
    private genre: string,
    private franchise: string,
    private number: number,
    private exclusive: boolean,
    private special_characteristics: string[],
    private price: number
  ) {}
  showInfo(): string[] {
    const result = [];
    result.push("ID:" + this.id);
    result.push("Name: " + this.name);
    result.push("Description: " + this.description);
    result.push("Type: " + this.type);
    result.push("Genre: " + this.genre);
    result.push("Franchise: " + this.franchise);
    result.push("Number: " + this.number);
    if (this.exclusive) {
      result.push("Exclusive: Yes");
    } else {
      result.push("Exclusive: No");
    }
    result.push("Special Characteristics: ");
    this.special_characteristics.forEach((characteristic) => {
      result.push(" -" + characteristic);
    });
    result.push("Price: " + this.price);
    return result;
  }
}
