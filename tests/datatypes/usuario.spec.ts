import "mocha";
import { expect } from "chai";
import { Usuario } from "../../src/datatypes/usuario.js";
import { Funko } from "../../src/datatypes/funko.js";
import { FunkoCollection } from "../../src/datatypes/funko_collection.js";

describe("Usuario", () => {
  it("Se debe poder crear un usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
    expect(usuario).to.be.an.instanceOf(Usuario);
  });
  it("Se debe poder agregar un Funko a la colección del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
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
    const id = usuario.addFunko(funko);
    expect(id).to.be.equal(funko.id);
  });
  it("Se debe poder eliminar un Funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
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
    const id = usuario.addFunko(funko);
    const deleted = usuario.removeFunko(id);
    expect(deleted).to.be.true;
  });
  it("Se debe poder actualizar un Funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
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
    const id = usuario.addFunko(funko1);
    const updated = usuario.updateFunko(id, funko2);
    expect(updated).to.be.true;
  });
  it("Se debe poder obtener una lista con los funkos del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
    expect(usuario.listFunkos()).to.be.equal(true);
  });
  it("Se debe poder obtener un funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
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
    const id = usuario.addFunko(funko);
    const funkoInfo = usuario.getFunko(id);
    expect(funkoInfo).to.be.equal(funko);
  });
  it("Se debe poder obtener la información de un funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan", new FunkoCollection());
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
    const id = usuario.addFunko(funko);
    expect(usuario.showFunko(id)).to.be.equal(true);
  });
});
