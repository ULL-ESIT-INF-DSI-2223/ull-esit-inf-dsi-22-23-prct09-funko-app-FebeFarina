import "mocha";
import { expect } from "chai";
import { UsuarioJSON } from "../../../src/FunkoApp/datatypes/usuario_json.js";
import { Funko } from "../../../src/FunkoApp/datatypes/funko.js";

describe("UsuarioJSON", () => {
  it("Se debe poder crear un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    expect(usuarioJSON).to.be.an.instanceOf(UsuarioJSON);
  });
  it("Se debe poder añadir un Funko a un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    const id = usuarioJSON.setFunko(
      new Funko(
        9999,
        "Funko",
        "Funko",
        "Pop!",
        "Funko",
        "Funko",
        1,
        false,
        ["Funko"],
        1
      )
    );
    expect(id).to.be.equal(true);
  });
  it("Se debe poder modificar un Funko de un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    const result = usuarioJSON.updateFunko(
      new Funko(
        9999,
        "Funko2",
        "Funko2",
        "Pop!",
        "Funko2",
        "Funko2",
        2,
        false,
        ["Funko2"],
        100
      )
    );
    expect(result).to.be.equal(true);
  });
  it("Se debe poder listar los Funkos de un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    const result = usuarioJSON.listFunkos();
    expect(result).to.be.equal(true);
  });
  it("Se debe poder mostrar un Funko de un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    const result = usuarioJSON.showFunko(9999);
    expect(result).to.be.equal(true);
  });
  it("Se debe poder eliminar un Funko de un UsuarioJSON", () => {
    const usuarioJSON = new UsuarioJSON("test_user");
    const result = usuarioJSON.removeFunko(9999);
    expect(result).to.be.equal(true);
  });
});
