import { Funko } from "./funko.js";

export class FunkoCollection {
  protected collection: Map<number, Funko>;
  constructor() {
    this.collection = new Map<number, Funko>();
  }
  add(funko: Funko): number {
    this.collection.set(funko.id, funko);
    return funko.id;
  }
  remove(id: number): boolean {
    return this.collection.delete(id);
  }
  update(id: number, funko: Funko): boolean {
    if (this.collection.has(id)) {
      this.collection.set(id, funko);
      return true;
    }
    return false;
  }
  get(id: number): Funko | undefined {
    return this.collection.get(id);
  }
  forEach(callback: (funko: Funko) => void): void {
    this.collection.forEach((funko) => {
      callback(funko);
    });
  }
}
