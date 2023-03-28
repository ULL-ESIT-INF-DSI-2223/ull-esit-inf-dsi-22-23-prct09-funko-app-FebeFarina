import "mocha";
import { expect } from "chai";
import { Funko } from "../../src/datatypes/funko.js";
import { FunkoCollection } from "../../src/datatypes/funko_collection.js";

describe("Funko Collection", () => {
  it("Se debe poder crear una colección de Funkos", () => {
    const funkoCollection = new FunkoCollection();
    expect(funkoCollection).to.be.an.instanceOf(FunkoCollection);
  });
  it("Se debe poder agregar un Funko a la colección", () => {
    const funkoCollection = new FunkoCollection();
    const funko = new Funko(
      1,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      1,
      false,
      ["Funko"],
      1
    );
    const id = funkoCollection.add(funko);
    expect(id).to.be.equal(funko.id);
  });
  it("Se debe poder eliminar un Funko de la colección", () => {
    const funkoCollection = new FunkoCollection();
    const funko = new Funko(
      1,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      1,
      false,
      ["Funko"],
      1
    );
    const id = funkoCollection.add(funko);
    const deleted = funkoCollection.remove(id);
    expect(deleted).to.be.true;
  });
  it("Se debe poder actualizar un Funko de la colección", () => {
    const funkoCollection = new FunkoCollection();
    const funko1 = new Funko(
      1,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      1,
      false,
      ["Funko"],
      1
    );
    const funko2 = new Funko(
      2,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      2,
      false,
      ["Funko"],
      1
    );
    const id = funkoCollection.add(funko1);
    const updated = funkoCollection.update(id, funko2);
    expect(updated).to.be.true;
  });
  it("Se debe poder obtener un Funko de la colección", () => {
    const funkoCollection = new FunkoCollection();
    const funko = new Funko(
      1,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      1,
      false,
      ["Funko"],
      1
    );
    const id = funkoCollection.add(funko);
    const funkoFound = funkoCollection.get(id);
    expect(funkoFound).to.be.eq(funko);
  });
  it("Se debe poder recorrer la colección de Funkos", () => {
    const funkoCollection = new FunkoCollection();
    const funko1 = new Funko(
      1,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      1,
      false,
      ["Funko"],
      1
    );
    const funko2 = new Funko(
      2,
      "Funko",
      "Funko",
      "Pop!",
      "Funko",
      "Funko",
      2,
      false,
      ["Funko"],
      1
    );
    funkoCollection.add(funko1);
    funkoCollection.add(funko2);
    let count = 0;
    funkoCollection.forEach(() => {
      count++;
    });
    expect(count).to.be.eq(2);
  });
});
