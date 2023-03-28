import "mocha";
import { expect } from "chai";
import { Usuario } from "../../src/datatypes/usuario.js";
import { Funko } from "../../src/datatypes/funko.js";
import { FunkoCollection } from "../../src/datatypes/funko_collection.js";

describe("Usuario", () => {
  it("Se debe poder crear un usuario", () => {
    const usuario = new Usuario("Juan");
    expect(usuario).to.be.an.instanceOf(Usuario);
  });
  it("Se debe poder agregar un Funko a la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    const id = usuario.setFunko(funko, true);
    expect(id).to.be.true;
  });
  it("No se debe poder añadir un Funko que ya existe en la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    usuario.setFunko(funko, false);
    const id2 = usuario.setFunko(funko, true);
    expect(id2).to.be.false;
  });
  it("Se debe poder eliminar un Funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    usuario.setFunko(funko, true);
    const deleted = usuario.removeFunko(funko.id);
    expect(deleted).to.be.true;
  });
  it("Se debe poder retornar false si el Funko no existe en la colección del usuario", () => {
    const usuario = new Usuario("Juan");
    const deleter = usuario.removeFunko(1);
    expect(deleter).to.be.false;
  });
  it("Se debe poder actualizar un Funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    usuario.setFunko(funko1, true);
    const updated = usuario.updateFunko(funko2);
    expect(updated).to.be.true;
  });
  it("Se debe poder obtener una lista con los funkos del usuario", () => {
    const usuario = new Usuario("Juan");
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
    expect(usuario.listFunkos()).to.be.true;
  });
  it("Se debe poder obtener un funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    usuario.setFunko(funko, true);
    const funkoInfo = usuario.getFunko(funko.id);
    expect(funkoInfo).to.be.equal(funko);
  });
  it("Se debe poder obtener la información de un funko de la colección del usuario", () => {
    const usuario = new Usuario("Juan");
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
    usuario.setFunko(funko, true);
    expect(usuario.showFunko(funko.id)).to.be.true;
  });
  it("No se debe poder obtener información de un Funko que no existe", () => {
    const usuario = new Usuario("Juan");
    expect(usuario.showFunko(1)).to.be.false;
  });
  it("No se debe poder actualizar un Funko que no existe", () => {
    const usuario = new Usuario("Juan");
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
    expect(usuario.updateFunko(funko)).to.be.false;
  });
});
