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
    const id = funkoCollection.set(funko);
    expect(id).to.be.true;
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
    funkoCollection.set(funko);
    const deleted = funkoCollection.remove(funko.id);
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
      1,
      "Funko2",
      "Funko2",
      "Pop!",
      "Funko2",
      "Funko2",
      2,
      false,
      ["Funko2"],
      1
    );
    funkoCollection.set(funko1);
    const updated = funkoCollection.update(funko2);
    expect(updated).to.be.true;
  });
  it("No se debe poder actualizar un Funko que no existe en la colección", () => {
    const funkoCollection = new FunkoCollection();
    const funko = new Funko(
      10,
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
    const updated = funkoCollection.update(funko);
    expect(updated).to.be.false;
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
    funkoCollection.set(funko);
    const funkoFound = funkoCollection.get(funko.id);
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
    funkoCollection.set(funko1);
    funkoCollection.set(funko2);
    let count = 0;
    funkoCollection.forEach(() => {
      count++;
    });
    expect(count).to.be.eq(2);
  });
});
