import { cli } from "./cli.js";
import { program } from "commander";
import pkg from "inquirer";
const { prompt } = pkg;
const pathInput = process.argv[2];

// mg-links: Receive the path and options en 2 steps
if (pathInput == undefined || pathInput == "") {
  const argumentsData = prompt([
    {
      type: "input",
      name: "pathData",
      message: "Ruta del archivo o carpeta: ",
    },
    {
      type: "list",
      name: "optionsData",
      message: "Opciones estadísticas ",
      choices: [
        "1.- listar",
        "2.- Validar enlaces",
        "3.- Estadísticas de enlaces",
        "4.- Validar y mostrar estadísticas",
      ],
    },
  ]);
  argumentsData.then((data) => {
    data.pathData = data.pathData.trim();
    if (data.optionsData == '1.- listar') {
      data.optionsData =  { 'validate': false}
    } else if (data.optionsData == '2.- Validar enlaces') {
      data.optionsData =  { 'validate': true}
    } else if (data.optionsData == '3.- Estadísticas de enlaces') {
      data.optionsData =  { 'stats': true}
    } else if (data.optionsData == '4.- Validar y mostrar estadísticas') {
      data.optionsData =  { 'stats': true, 'validate': true}
    }
    // llama y envia a Cli
    cli(data);
  });
} else {
  program
    .option("-v, --validate", "Validar enlaces")
    .option("-s, --stats", "Estadísticas")
    .option("-s -v,  --stats --validate", "Validar y mostrar estadísticas");
  // Print results of commands for use
  program.parse(process.argv);

  let options = program.opts();

  if (Object.keys(options).length === 0) {
    options = { 'validate': false}
  }

  // Options
  if (options == 'Validar enlaces') {
    options = { 'validate': true}
  }

  // Call Cli, arguments: path and options
  cli({ 'pathData': pathInput, 'optionsData': options })
}

program
  .version("0.1.0")
  .description(
    "md-links: A command line tool for which reads and parses Markdown files, to verify the links they contain and to report some statistics."
  );

// Print results of commands
program.parse(process.argv);
