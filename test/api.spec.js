import { mdLinks } from '../src/api.js'

const absolutePathData = 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo3.md'
const pathWithoutLinks = 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo4.md'
const pathError = 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo.md'
const absolutePathDataDirectory = 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba2'
const mdlinksValidateTrue = [
  {
    Enlace: 'https://nodejs.org/es/',
    Texto: 'Node.js',
    rutaArchivo: 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo3.md',
    Estado: 200,
    MensajeEstado: 'ok'
  }
]
const mdlinksDirectoryValidateTrue = [
  {
    'Enlace': 'https://nodejs.org/es/',
    'Texto': 'Node.js',
    'rutaArchivo': "C:\\Users\\Acer\\Desktop\\PROYECTO4LABORATORIA\\LIM017-md-links\\pruebas\\prueba2\\ejemplo3.md",
    'Estado': 200,
    'MensajeEstado': 'ok'
  }
]
const mdlinksValidateFalse = [
  {
    Enlace: 'https://nodejs.org/es/',
    Texto: 'Node.js',
    rutaArchivo: 'C:/Users/Acer/Desktop/PROYECTO4LABORATORIA/LIM017-md-links/pruebas/prueba1/ejemplo3.md'
  }
]

describe('mdLinks', () => {
  it('it is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  // it.only('return path invalid', (done) => {
  //   return mdLinks('', {validate: false})
  //     .then((res) => {
  //       console.log(res);
  //       const texto = console.log('Path Invalid !!!');
  //       expect(res).toBe(texto);
  //       done()
  //     })
  // });

  it('return objects array [{href, text, file}]', () => {
    return mdLinks(absolutePathData, {validate: false})
      .then((res) => {
        expect(res).toEqual(mdlinksValidateFalse);
      })
  });

  it('return objects array []', () => {
    return mdLinks(pathWithoutLinks, {validate: false})
      .then((res) => {
        expect(res).toEqual([]);
      })
  });
  // it('return error', () => {
  //   mdLinks(pathError, {validate: false})
  //     .then((res, rej) => {
  //       const error = 'ENOENT'
  //       // expect(rej).toEqual(error);
  //     })
  // });
  it('return objects array with http status [{href, text, file, status, statusText}]', () => {
    return mdLinks(absolutePathData, {validate: true})
      .then((res) => {
        expect(res).toEqual(mdlinksValidateTrue);
      })
  });

  it('return objects array with http status [{href, text, file, status, statusText}] from directory', () => {
    return mdLinks(absolutePathDataDirectory, {validate: true})
      .then((res) => {
        expect(res).toEqual(mdlinksDirectoryValidateTrue);
      })
  });
});
