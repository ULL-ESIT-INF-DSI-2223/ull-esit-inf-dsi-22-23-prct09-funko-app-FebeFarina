import "mocha";
import { expect } from "chai";
import { Funko } from "../../src/datatypes/funko.js";

describe("Funko", () => {
  it("Se debe poder crear un Funko", () => {
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
    expect(funko).to.be.an.instanceOf(Funko);
  });
  it("Se debe poder obtener el valor en el mercado de un Funko con valor Very High", () => {
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
      101
    );
    expect(funko.getMarketValue()).to.be.equal("Very High");
  });
  it("Se debe poder obtener el valor en el mercado de un Funko con valor High", () => {
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
      51
    );
    expect(funko.getMarketValue()).to.be.equal("High");
  });
  it("Se debe poder obtener el valor en el mercado de un Funko con valor Medium", () => {
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
      21
    );
    expect(funko.getMarketValue()).to.be.equal("Medium");
  });
  it("Se debe poder obtener el valor en el mercado de un Funko con valor Low", () => {
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
    expect(funko.getMarketValue()).to.be.equal("Low");
  });
  it("Se debe poder mostrar la información de un Funko de valor Very High", () => {
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
      101
    );
    expect(funko.showInfo()).to.be.equal(true);
  });
  it("Se debe poder mostrar la información de un Funko de valor High", () => {
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
      51
    );
    expect(funko.showInfo()).to.be.equal(true);
  });
  it("Se debe poder mostrar la información de un Funko de valor Medium", () => {
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
      21
    );
    expect(funko.showInfo()).to.be.equal(true);
  });
  it("Se debe poder mostrar la información de un Funko de valor Low", () => {
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
    expect(funko.showInfo()).to.be.equal(true);
  });
});
