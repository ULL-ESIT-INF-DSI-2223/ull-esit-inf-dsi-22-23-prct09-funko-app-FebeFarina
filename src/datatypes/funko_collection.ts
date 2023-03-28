import { Funko } from "./funko.js";

export class FunkoCollection {
  protected collection: Map<number, Funko>;
  constructor() {
    this.collection = new Map<number, Funko>();
  }
  set(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      return false;
    } else {
      this.collection.set(funko.id, funko);
      return true;
    }
  }
  update(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      this.collection.set(funko.id, funko);
      return true;
    } else {
      return false;
    }
  }
  remove(id: number): boolean {
    return this.collection.delete(id);
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
