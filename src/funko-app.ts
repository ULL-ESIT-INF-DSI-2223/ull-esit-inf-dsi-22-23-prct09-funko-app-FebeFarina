import { Usuario } from "./datatypes/usuario.js";
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
      console.log(argv.user);
      console.log(argv.id);
      console.log(argv.name);
      console.log(argv.desc);
      console.log(argv.type);
      console.log(argv.genre);
      console.log(argv.franchise);
      console.log(argv.number);
      console.log(argv.exclusive);
      console.log(argv.special_char);
      console.log(argv.price);
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
      console.log(argv.user);
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
