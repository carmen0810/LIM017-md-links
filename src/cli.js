import { mdLinks } from "./api.js";
import { onlyUnique } from "./utils.js";
import {
  printBanner,
  logWarning,
  logResults,
  logResultsCyan,
} from './messages.js'


const cli = (data) => {
  // console.log("data recibida en cli:", data);
  if (data.pathData == "" || data.pathData == "''") {
    logWarning(
      "Por favor ingrese una ruta válida. por ejemplo: C:\Users\Acer\Desktop\PROYECTO4LABORATORIA\LIM017-md-links\pruebas"
    );
  } else {
    printBanner();
    let arrOptions = Object.keys(data.optionsData);
    if (arrOptions.length == 1) {
      // option validate
      if (arrOptions.includes("validate")) {
        mdLinks(data.pathData, data.optionsData)
          .then((links) => {
            console.log(logResults("***** RESULTADOS: ***** "));
            console.table(links);
          })
          .catch(console.error);
      } else {
        // option stats
        mdLinks(data.pathData, data.optionsData)
          .then((links) => {
            let uniqueArray = [];
            links.filter((link) => {
              for (const property in link) {
                if (property == "Enlace") {
                  uniqueArray.push(`${property}: ${link[property]}`);
                }
              }
            });

            var unique = uniqueArray.filter(onlyUnique);
            console.log(logResultsCyan("*** ESTADISTICAS MD-LINKS *** "));
            console.log("Total:", links.length);
            console.log("Únicos:", unique.length);
            // => [{ href, text, file, status, ok }, ...]
          })
          .catch(console.error);
      }
    }
    if (arrOptions.length == 2) {
      // option stats
      mdLinks(data.pathData, data.optionsData)
        .then((links) => {
          let uniqueArray = [];
          let brokenArray = [];
          links.filter((link) => {
            for (const property in link) {
              if (property == "Enlace") {
                uniqueArray.push(`${property}: ${link[property]}`);
              }
              if (property == "MensajeEstado") {
                brokenArray.push(`${link[property]}`);
              }
            }
          });

          let unique = uniqueArray.filter(onlyUnique);
          let broken = brokenArray.filter((b) => b.includes("fail"));
          console.log(logResultsCyan("***** VALIDACIÓN Y ESTADISTICAS ***** "));
          console.log("Total:", links.length);
          console.log("Únicos:", unique.length);
          console.log("Enlaces Rotos:", broken.length);
          // => [{ href, text, file, status, ok }, ...]
        })
        .catch(console.error);
    }
  }
};

export { cli };
