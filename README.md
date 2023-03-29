[![Node.js CI](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/node.js.yml)
[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/coveralls.yml)
[![Sonar-Cloud](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-FebeFarina/actions/workflows/sonarcloud.yml)

# Práctica 9 - Aplicación de registro de Funko Pops

## Filesystem Funko App

### Enunciado

En esta práctica se ha desarrollado una aplicación que permite el registro de Funko Pops. Podremos añadir, modificar, eliminar y consultar los Funko Pops que tengamos en nuestra colección. Cada Funko Pop quedará almacenado en un fichero de texto con formato JSON. La interacción con el usuario se realizará desde la línea de comandos, haciendo uso de la librerá yargs. Se seguirá una metodoología de desarrollo dirigido por pruebas (TDD), haciendo uso de la librería Mocha y Chai para realizar las pruebas. Además, se hace uso de las acciones de GitHub para la integración continua, el cubrimiento de código con Coveralls y el escaneo de código con SonarCloud.

### Desarrollo

#### Funko

Un funko deberá de tener los siguientes atributos:

- **ID**: identificador único del funko. Debe de ser un número entero.
- **Nombre**: nombre del funko. Debe de ser una cadena de texto.
- **Descripciín**: descripción del funko. Debe de ser una cadena de texto.
- **Tipo**: tipo del funko. Debe de ser una cadena de texto.
- **Género**: género del funko. Debe de ser una cadena de texto.
- **Franquicia**: franquicia a la que pertenece el funko. Debe de ser una cadena de texto.
- **Número**: número del funko. Debe de ser un número entero.
- **Exclusivo**: indica si el funko es exclusivo o no. Debe de ser un booleano.
- **Características especiales**: características especiales del funko. Debe de ser una cadena de texto.
- **Valor de mercado**: precio del funko. Debe de ser un número entero.

```typescript
export class Funko {
  constructor(
    public id: number,
    private name: string,
    private description: string,
    private type: string,
    private genre: string,
    private franchise: string,
    private number: number,
    private exclusive: boolean,
    private special_characteristics: string[],
    private price: number
  ) {}
}
```

##### showInfo

```typescript
showInfo() {
    log(chalk.green("ID: " + this.id));
    log(chalk.green("Name: " + this.name));
    log(chalk.green("Description: " + this.description));
    log(chalk.green("Type: " + this.type));
    log(chalk.green("Genre: " + this.genre));
    log(chalk.green("Franchise: " + this.franchise));
    log(chalk.green("Number: " + this.number));
    log(chalk.green("Exclusive: " + this.exclusive));
    log(chalk.green("Special Characteristics: "));
    this.special_characteristics.forEach((characteristic) => {
      log(chalk.green("\t- " + characteristic));
    });
    switch (this.getMarketValue()) {
      case "Very High":
        log(chalk.green("Market Value: " + chalk.green(this.getMarketValue())));
        break;
      case "High":
        log(
          chalk.green("Market Value: " + chalk.yellow(this.getMarketValue()))
        );
        break;
      case "Medium":
        log(chalk.green("Market Value: " + chalk.blue(this.getMarketValue())));
        break;
      case "Low":
        log(chalk.green("Market Value: " + chalk.red(this.getMarketValue())));
        break;
    }
    return true;
  }
```

El método `showInfo` se encarga de mostrar por pantalla la información del Funko Pop. Dependiendo del valor del atributo `price` se mostrará un color diferente.

#### FunkoCollection

Para almacenar los Funko Pops se ha creado una clase llamada FunkoCollection. Esta clase se encargará de almacenar los Funko Pops, además de proporcionar métodos para añadir, modificar y eliminar.

```typescript
export class FunkoCollection {
  protected collection: Map<number, Funko>;
  constructor() {
    this.collection = new Map<number, Funko>();
  }
}
```

Hemos utilizado un Map para almacenar los Funko Pops. El Map nos permite almacenar los Funko Pops de forma ordenada, además de poder acceder a ellos de forma rápida mediante su ID.

##### set

```typescript
  set(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      return false;
    } else {
      this.collection.set(funko.id, funko);
      return true;
    }
  }
```

El método `set` se encarga de añadir un Funko Pop a la colección. Si el Funko Pop ya existe en la colección, no se añadirá y se devolverá un valor false. Si el Funko Pop no existe en la colección, se añadirá y se devolverá un valor true.

##### update

```typescript
  update(funko: Funko): boolean {
    if (this.collection.has(funko.id)) {
      this.collection.set(funko.id, funko);
      return true;
    } else {
      return false;
    }
  }
```

El método `update` se encarga de modificar un Funko Pop de la colección. Si el Funko Pop no existe en la colección, no se modificará y se devolverá un valor false. Si el Funko Pop existe en la colección, se modificará y se devolverá un valor true.

##### remove

```typescript
  remove(id: number): boolean {
    return this.collection.delete(id);
  }
```

El método `remove` se encarga de eliminar un Funko Pop de la colección. Si el Funko Pop no existe en la colección, no se eliminará y se devolverá un valor false. Si el Funko Pop existe en la colección, se eliminará y se devolverá un valor true.

#### Usuario

Para representar a un usuario se ha creado una clase llamada `Usuario`. Esta clase se encargará de almacenar la información del usuario, además de proporcionar métodos para añadir, modificar, eliminar y consultar los Funko Pops del usuario.

```typescript
export class Usuario {
  protected funkos = new FunkoCollection();
  constructor(protected name: string) {}
}
```

##### setFunko

```typescript
  setFunko(funko: Funko, print: boolean): boolean {
    const result = this.funkos.set(funko);
    if (result) {
      if (print) {
        log(chalk.green("Funko added at " + this.name + " collection"));
      }
    } else {
      if (print) {
        log(chalk.red("Funko already exists at " + this.name + " collection"));
      }
    }
    return result;
  }
```

El método `setFunko` se encarga de añadir un Funko Pop a la colección del usuario. Si el Funko Pop ya existe en la colección del usuario, no se añadirá y se devolverá un valor false. Si el Funko Pop no existe en la colección del usuario, se añadirá y se devolverá un valor true. Además, si el parámetro `print` es true, se mostrará un mensaje por pantalla indicando si se ha añadido o no el Funko Pop.

##### updateFunko

```typescript
  updateFunko(funko: Funko): boolean {
    const result = this.funkos.update(funko);
    if (result) {
      log(chalk.green("Funko updated at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
```

El método `updateFunko` se encarga de modificar un Funko Pop de la colección del usuario. Si el Funko Pop no existe en la colección del usuario, no se modificará y se devolverá un valor false. Si el Funko Pop existe en la colección del usuario, se modificará y se devolverá un valor true. Además, se mostrará un mensaje por pantalla indicando si se ha modificado o no el Funko Pop.

##### removeFunko

```typescript
  removeFunko(id: number): boolean {
    const result = this.funkos.remove(id);
    if (result) {
      log(chalk.green("Funko removed at " + this.name + " collection"));
    } else {
      log(chalk.red("Funko not found at " + this.name + " collection"));
    }
    return result;
  }
```

El método `removeFunko` se encarga de eliminar un Funko Pop de la colección del usuario. Si el Funko Pop no existe en la colección del usuario, no se eliminará y se devolverá un valor false. Si el Funko Pop existe en la colección del usuario, se eliminará y se devolverá un valor true. Además, se mostrará un mensaje por pantalla indicando si se ha eliminado o no el Funko Pop.

##### showFunko

```typescript
  showFunko(id: number) {
    const funko = this.funkos.get(id);
    if (funko) {
      funko.showInfo();
    } else {
      log(chalk.red("Funko not found at" + this.name + "collection"));
      return false;
    }
    return true;
  }
```

El método `showFunko` se encarga de mostrar por pantalla la información de un Funko Pop de la colección del usuario. Si el Funko Pop no existe en la colección del usuario, se mostrará un mensaje por pantalla indicando que no se ha encontrado el Funko Pop. Si el Funko Pop existe en la colección del usuario, se mostrará por pantalla la información del Funko Pop.

##### listFunko

```typescript
  listFunkos() {
    log(chalk.green(this.name + " Funko Pop collection"));
    this.funkos.forEach((funko) => {
      log("--------------------------------");
      funko.showInfo();
    });
    return true;
  }
```

El método `listFunkos` se encarga de mostrar por pantalla la información de todos los Funko Pop de la colección del usuario.

#### UsuarioJSON

Para conseguir la persistencia de datos se ha creado una clase llamada `UsuarioJSON`. Esta clase hereda de la clase `Usuario` y se encargará de almacenar la información del usuario en un directorio con el nombre del usuario.

```typescript
export class UsuarioJSON extends Usuario {
  constructor(name: string) {
    super(name);
    if (!fs.existsSync("./data/" + name)) {
      console.log("Creating directory: " + name);
      fs.mkdirSync("./data/" + name);
    }
    const files = fs.readdirSync("./data/" + name);
    files.forEach((file) => {
      const data = fs.readFileSync("./data/" + name + "/" + file);
      const funko = JSON.parse(data.toString());
      this.funkos.set(
        new Funko(
          funko.id,
          funko.name,
          funko.description,
          funko.type,
          funko.genre,
          funko.franchise,
          funko.number,
          funko.exclusive,
          funko.special_characteristics,
          funko.price
        )
      );
    });
  }
}
```

El constructor de la clase `UsuarioJSON` se encarga de crear un directorio con el nombre del usuario. Además, si el directorio ya existe, se cargan los Funko Pop del usuario.

##### setFunko

```typescript
  setFunko(funko: Funko): boolean {
    const result = super.setFunko(funko, true);
    if (result) {
      fs.writeFile(
        "./data/" + this.name + "/" + funko.id + ".json",
        JSON.stringify(funko),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
    return result;
  }
```

El método `setFunko` se encarga de añadir un Funko Pop a la colección del usuario. Además, si el Funko Pop no existe en la colección del usuario, se guardará en el directorio del usuario.

##### updateFunko

```typescript
  updateFunko(funko: Funko): boolean {
    const result = super.updateFunko(funko);
    if (result) {
      fs.writeFileSync(
        "./data/" + this.name + "/" + funko.id + ".json",
        JSON.stringify(funko)
      );
    }
    return result;
  }
```

El método `updateFunko` se encarga de modificar un Funko Pop de la colección del usuario. Además, si el Funko Pop existe en la colección del usuario, se guardará en el directorio del usuario.

##### removeFunko

```typescript
  removeFunko(id: number): boolean {
    const result = super.removeFunko(id);
    if (result) {
      fs.unlink("./data/" + this.name + "/" + id + ".json", (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    return result;
  }
```

El método `removeFunko` se encarga de eliminar un Funko Pop de la colección del usuario. Además, si el Funko Pop existe en la colección del usuario, se eliminará del directorio del usuario.

#### Funko-app

La clase `Funko-app` se encarga de gestionar la aplicación. Esta clase se encarga de obtener los argumentos de la línea de comandos para gestionar el sistema de ficheros.

##### Comando add

```typescript
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
      user.setFunko(funko);
    }
  )
  .help().argv;
```

El comando `add` se encarga de añadir un Funko Pop a la colección del usuario. Para ello, se pide al usuario que introduzca su nombre de usuario, y los datos del Funko Pop que quiere añadir. Una vez introducidos los datos, se crea un objeto de la clase `Funko` y se añade a la colección del usuario.

##### Comando update

```typescript
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
      user.updateFunko(funko);
    }
  )
  .help().argv;
```

El comando `update` se encarga de modificar un Funko Pop de la colección del usuario. Para ello, se pide al usuario que introduzca su nombre de usuario, y los datos del Funko Pop que quiere modificar. Una vez introducidos los datos, se crea un objeto de la clase `Funko` y se modifica en la colección del usuario.

##### Comando delete

```typescript
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
      const user = new UsuarioJSON(argv.user);
      user.removeFunko(argv.id);
    }
  )
  .help().argv;
```

El comando `delete` se encarga de eliminar un Funko Pop de la colección del usuario. Para ello, se pide al usuario que introduzca su nombre de usuario, y el ID del Funko Pop que quiere eliminar. Una vez introducidos los datos, se elimina el Funko Pop de la colección del usuario.

##### Comando list

```typescript
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
```

El comando `list` se encarga de listar todos los Funko Pop de la colección del usuario. Para ello, se pide al usuario que introduzca su nombre de usuario. Una vez introducido el nombre de usuario, se listan todos los Funko Pop de la colección del usuario.

##### Comando read

```typescript
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
      const user = new UsuarioJSON(argv.user);
      user.showFunko(argv.id);
    }
  )
  .help().argv;
```

El comando `read` se encarga de mostrar un Funko Pop de la colección del usuario. Para ello, se pide al usuario que introduzca su nombre de usuario, y el ID del Funko Pop que quiere mostrar. Una vez introducidos los datos, se muestra el Funko Pop de la colección del usuario.

## PE101

### Enunciado

Para la modificación de la práctica, se nos pide diseñar un algoritmo usando el patrón **Template Method**. El algoritmo consta de tres pasos:

1. Operación de **filtrado**, en el que tenemos que imlpementar la funcionalidad del método `filter` sobre una lista de números sin hacer uso del mismo.
2. Operación de **mapeo**, en el que tenemos que implementar la funcionalidad del método `map` sobre una lista de números sin hacer uso del mismo.
3. Operación de **reducción**, en la que tenemos que implementar la funcionalidad del método `reduce` sobre una lista de números sin hacer uso del mismo.

Las operaciones de filtrado y mapeo deben ser implementadas en la clase abstracta, pudiendose sobreescribir en las clases hijas. La operación de reducción debe ser implementada de 4 formas diferentes: suma, resta, multiplicación y división. Además, implementaremos varios métodos de enganche entre las operaciones, los cuales serán redefinidos en las clases hijas. De la misma forma que en el ejercicio anterior, desarrollaremos el código con la metodología TDD, además de hacer uso de las actions de Github, Coveralls y SonarCloud.

### Desarrollo

#### NumberListAlgorithm

En primer lugar definiremos la clase abstracta `NumberListAlgorithm`.

```typescript
export abstract class NumberListAlgorithm {
  constructor(protected list: number[]) {
    this.list = list;
  }
}
```

Esta clase será el esqueleto del algoritmo, y contendrá un método `run` que será el encargado de ejecutar el algoritmo.

##### run

```typescript
  public run() {
    this.filterList();
    this.afterFilter();
    this.mapList();
    this.afterMap();
    return this.reduceList();
  }
```

Este método ejecutará las operaciones de filtrado, mapeo y reducción, en ese orden. Además, ejecutará los métodos de enganche entre las operaciones, los cuales serán redefinidos en las clases hijas.

##### filterList

```typescript
  protected filterList(
    filter: (value: number) => boolean = (value) => value % 2 === 0
  ) {
    const filteredList: number[] = [];
    this.list.forEach((value) => {
      if (filter(value)) {
        filteredList.push(value);
      }
    });
    this.list = filteredList;
  }
```

Este método ejecutará la operación de filtrado sobre la lista de números. Por defecto, filtrará los números pares, pero se puede pasar como parámetro una función que filtre los números de la forma que se desee.

##### mapList

```typescript
  protected mapList(func: (value: number) => number = (value) => value * 2) {
    const mappedList: number[] = [];
    this.list.forEach((value) => {
      mappedList.push(func(value));
    });
    this.list = mappedList;
  }
```

Este método ejecutará la operación de mapeo sobre la lista de números. Por defecto, multiplicará por dos los números de la lista, pero se puede pasar como parámetro una función que filtre los números de la forma que se desee.

##### reduceList

```typescript
  protected abstract reduceList(): number;
```

Este método ejecutará la operación de reducción sobre la lista de números. Este método será implementado de forma diferente en las clases hijas.

##### Métodos de enganche

```typescript
  protected afterFilter() {}
  protected afterMap() {}
```

Estos métodos serán ejecutados entre las operaciones de filtrado y mapeo. Estos métodos pueden ser redefinidos en las clases hijas.

#### FiletMapAddReduce

La primera clase hija que implementaremos será `FilterMapAddReduce`, que implementará la operación de reducción como una suma.

```typescript
export class FilterMapAddReduce extends NumberListAlgorithm {
  constructor(list: number[]) {
    super(list);
  }
  protected reduceList(): number {
    let accumulator = 0;
    this.list.forEach((value) => {
      accumulator = accumulator + value;
    });
    return accumulator;
  }
  protected afterFilter(): void {
    console.log("FMAR after filter: ", this.list);
  }
  protected afterMap(): void {
    console.log("FMAR after map: ", this.list);
  }
}
```

Esta clase sobreescribirá los métodos de enganche, y además implementará la operación de reducción como una suma.

#### FilterMapSubReduce

De forma similar, implementaremos la clase `FilterMapSubReduce`, que implementará la operación de reducción como una resta.

```typescript
export class FilterMapSubReduce extends NumberListAlgorithm {
  constructor(list: number[]) {
    super(list);
  }
  protected reduceList(): number {
    let accumulator = 0;
    this.list.forEach((value) => {
      accumulator = accumulator - value;
    });
    return accumulator;
  }
  protected afterFilter(): void {
    console.log("FMSR after filter: ", this.list);
  }
  protected afterMap(): void {
    console.log("FMSR after map: ", this.list);
  }
}
```

#### FilterMapProdReduce

La clase `FilterMapProdReduce` implementará la operación de reducción como una multiplicación.

```typescript
export class FilterMapProdReduce extends NumberListAlgorithm {
  constructor(list: number[]) {
    super(list);
  }
  protected reduceList(): number {
    let accumulator = 1;
    this.list.forEach((value) => {
      accumulator = accumulator * value;
    });
    return accumulator;
  }
  protected afterFilter(): void {
    console.log("FMPR after filter: ", this.list);
  }
  protected afterMap(): void {
    console.log("FMPR after map: ", this.list);
  }
}
```

#### FilterMapDivReduce

Finalmente, crearemos la clase `FilterMapDivReduce`, que implementará la operación de reducción como una división.

```typescript
export class FilterMapDivReduce extends NumberListAlgorithm {
  constructor(list: number[]) {
    super(list);
  }
  protected reduceList(): number {
    let accumulator = 32;
    this.list.forEach((value) => {
      accumulator = accumulator / value;
    });
    return accumulator;
  }
  protected afterFilter(): void {
    console.log("FMDR after filter: ", this.list);
  }
  protected afterMap(): void {
    console.log("FMDR after map: ", this.list);
  }
}
```

## Conclusiones

En la aplicación sobre el sistema de ficheros Funko Pop, hemos visto cómo manejar los ficheros de forma asíncrona usando la API de Node.js. Además, hemos usado la librería yargs para parsear los argumentos de la línea de comandos. Por último, hemos visto una aplicación del patrón de diseño Template Method, que nos permite reutilizar código en clases que implementan el mismo algoritmo, pero de forma diferente.

## Bibliografía

[1] [Apuntes de la asignatura](https://ull-esit-inf-dsi-2223.github.io/nodejs-theory/)
[2] [yargs](https://www.npmjs.com/package/yargs)
[3] [chalk](https://www.npmjs.com/package/chalk)
[4] [Node.js File System](https://nodejs.org/docs/latest-v19.x/api/fs.html)
[5] [Github Actions](https://docs.github.com/en/actions)
[6] [SonarCloud](https://www.sonarsource.com/products/sonarcloud/)
[7] [Coveralls](https://coveralls.io/)
