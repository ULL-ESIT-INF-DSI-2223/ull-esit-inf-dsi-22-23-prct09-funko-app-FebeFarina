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
  it("Se debe poder obtener el valor en el mercado de un Funko", () => {
    let funko = new Funko(
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
    funko = new Funko(
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
    funko = new Funko(
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
    funko = new Funko(
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
  it("Se debe poder mostrar la información de un Funko", () => {
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
