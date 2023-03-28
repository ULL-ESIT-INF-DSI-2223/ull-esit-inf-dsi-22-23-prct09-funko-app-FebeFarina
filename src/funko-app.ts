import { UsuarioJSON } from "./datatypes/usuario_json.js";
import { Funko } from "./datatypes/funko.js";
import { FunkoCollection } from "./datatypes/funko_collection.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Adds a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko Name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko Description",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Funko Type",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Funko Genre",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Funko Franchise",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Funko Number",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Funko Exclusive",
        type: "boolean",
        demandOption: true,
      },
      special_char: {
        description: "Funko Special Characteristics",
        type: "string",
        demandOption: true,
      },
      price: {
        description: "Funko Price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UsuarioJSON(argv.user);
      const funko = new Funko(
        argv.id,
        argv.name,
        argv.desc,
        argv.type,
        argv.genre,
        argv.franchise,
        argv.number,
        argv.exclusive,
        argv.special_char.split(","),
        argv.price
      );
      user.addFunko(funko);
    }
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "delete",
    "Deletes a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      console.log(argv.id);
    }
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "list",
    "Lists all funkos",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      const user = new UsuarioJSON(argv.user);
      user.listFunkos();
    }
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "read",
    "Shows a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      console.log(argv.id);
    }
  )
  .help().argv;

yargs(hideBin(process.argv))
  .command(
    "update",
    "Updates a funko",
    {
      user: {
        description: "Username",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko Name",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Funko Description",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Funko Type",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Funko Genre",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Funko Franchise",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Funko Number",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Funko Exclusive",
        type: "boolean",
        demandOption: true,
      },
      special_char: {
        description: "Funko Special Characteristics",
        type: "string",
        demandOption: false,
      },
      price: {
        description: "Funko Price",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      console.log(argv.id);
    }
  )
  .help().argv;
