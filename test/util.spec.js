import {
    absolutePath,
    extMD,
    absolutePathResolve,
    readFileData,
    pathDetails,
    readDirectoriesRecursive,
    fileConvertedInHTML,
    linksInFile,
    onlyUnique,
    statusHttp,
  } from "../src/utils";
  
  const fileHTML =
    '<p><a href="https://nodejs.org/es/">Node.js</a> es un entorno de ejecución para JavaScript.</p>';
  const absolutePathData = "C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo3.md";
  const errorPathData = "C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo8.md";
  const relativePathData = "./pruebas/ejemplo2.md";
  const pathRelativeToAbsolute =
    "C:\\Users\\Acer\\Desktop\\PROYECTO4LABORATORIA\\LIM017-md-links\\pruebas\\ejemplo2.md";
  const extMDData = "ejemplo2.md";
  const extMDDataIsFalse = "ejemplo2.txt";
  const pathDetailsData = {
    root: "C:/",
    dir: "C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1",
    base: "ejemplo3.md",
    ext: ".md",
    name: "ejemplo3",
  };
  const pathDirectoryRecursiveData = "C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba2";
  const pathErrorDirectory = "C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba4";
  const readDirectoriesRecursiveData = [
    "C:\\Users\\Acer\\Desktop\\PROYECTO4LABORATORIA\\LIM017-md-links\\pruebas\\prueba2\\ejemplo3.md",
  ];
  const fileMarkdown =
    "[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript.";
  
  describe("absolutePath", () => {
    it("return true if path is absolute", () => {
      expect(absolutePath(absolutePathData)).toBe(true);
    });
    it("return false if path is not absolute", () => {
      expect(absolutePath(relativePathData)).toBe(false);
    });
  });
  
  describe("extMD", () => {
    it("return true if extension file is .md", () => {
      expect(extMD(extMDData)).toBe(true);
    });
    it("return false if extension file is not .md", () => {
      expect(extMD(extMDDataIsFalse)).toBe(false);
    });
  });
  
  describe("absolutePathResolve", () => {
    it("return absolute path if the path is relative", () => {
      expect(absolutePathResolve(relativePathData)).toEqual(
        pathRelativeToAbsolute
      );
    });
  });
  
  // describe.only and fit en vez de it me permite solo testear esa funcion
  describe("readFileData", () => {
    it("if function callback printfile receive file from readFile", () => {
      function callback(data) {
        expect(data).toBe(fileMarkdown);
        // done();
      }
      readFileData(absolutePathData, callback);
    });
    it("error in readFile, throw error", (done) => {
      expect.assertions(1);
      try {
        readFileData(errorPathData);
      } catch (e) {
        expect(e.code).toBe("ENOENT");
        done();
      }
    });
  });
  
  describe("pathDetails", () => {
    it("return object with details of path: root, dir, base, ext, name", () => {
      expect(pathDetails(absolutePathData)).toEqual(pathDetailsData);
    });
  });
  
  describe("readDirectoriesRecursive", () => {
    it("if function callback allFilesMD receive files from a directory", () => {
      function callback(data) {
        // console.log(data);
        expect(data).toEqual(readDirectoriesRecursiveData);
        // done();
      }
      readDirectoriesRecursive(pathDirectoryRecursiveData, callback);
    });
    it("error in readDirectoriesRecursive", (done) => {
      expect.assertions(1);
      function callback(data) {
        try {
          expect(data.code).toBe("ENOENT");
          done();
        } catch (e) {}
      }
      readDirectoriesRecursive(pathErrorDirectory, callback);
    });
  });
  
  describe("fileConvertedInHTML", () => {
    it("return file Markdonw converted in HTML", () => {
      const result = fileConvertedInHTML(fileMarkdown);
      // console.log(result.toString());
      expect(result.toString().trim()).toEqual(fileHTML.trim());
    });
  });
  
  describe("linksInFile", () => {
    it("return textContent from Link in HTML file", () => {
      const result = linksInFile(fileHTML);
      const resultado = result[0].textContent;
      expect(resultado).toEqual("Node.js");
    });
  });
  
  describe("onlyUnique", () => {
    it("unique link", () => {
      let link = onlyUnique("https://nodejs.org/es/", 0, [
        "https://nodejs.org/es/",
      ]);
      expect(link).toBe(true);
      link = onlyUnique("https://nodejs.org/es/", 1, ["https://nodejs.org/es/"]);
      expect(link).toBe(false);
    });
    it("unique link", () => {
      const result = ["https://nodejs.org/es/", "https://nodejs.org/es/"].filter(
        onlyUnique
      );
      expect(result).toEqual(["https://nodejs.org/es/"]);
    });
  });
  
  describe("statusHttp", () => {
    it("return status http 200", (done) => {
      function callback(data) {
        if (data == 200) {
          expect(data).toBe(200);
          done();
        } else {
          expect(data).toBe(404);
          done();
        }
      }
      statusHttp(absolutePathData, callback);
    });
  });
  