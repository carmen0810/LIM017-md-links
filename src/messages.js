import chalk from "chalk";
import figlet from "figlet";

// Print banner
const printBanner = () => {
  figlet("M D - L I N K S - C A R M E N", function (err, banner) {
    if (err) {
      console.log("Ocurrió un error...");
      console.dir(err);
      return;
    }
    return console.log(chalk.bold.green(banner));
  });
};

// WARNING: console.log in Yellow
const logWarning = (consoleLog) => {
  return console.log(chalk.inverse.yellow(consoleLog))
}

// RESULTS: console.log in Green
const logResults = (consoleLog) => {
  return chalk.inverse.green(consoleLog)
}

// RESULTS: console.log in Cyan
const logResultsCyan = (consoleLog) => {
  return chalk.bold.cyan(consoleLog)
}

export {
  printBanner,
  logWarning,
  logResults,
  logResultsCyan,
}
