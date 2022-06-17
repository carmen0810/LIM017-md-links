# MD-LINKS-CARMEN
Es una librería que permite validar URLs dentro de archivos markdown. Te permitirá obtener: estado de los enlaces, enlaces totales, enlaces únicos y enlaces rotos.

## Cómo empezar 

![md-links-carmen](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/md-links-carmen.jpg)

Estas instrucciones le permitirán instalar la biblioteca en su máquina local para el desarrollo.

Ver Despliegue para la biblioteca desarrollada con Node.js.

### Instalación
Puedes instalarlo mediante npm:


```
$ npm i -g md-links-carmen
```

## Guía de uso
Puede ejecutar la biblioteca a través del terminal:

```
md-links <path-to-file> [options]
```

Las rutas introducidas pueden ser **relativas** o **absolutas** y las opciones que puedes utilizar son: `--help or -h`, `--stats or -s`, `--validate or -v`, o utilizar ambos juntos `--stats --validate  or -s -v`.

### Caso 1: `md-links <path-to-file>`

![md-links-caso1](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso1-md-links.jpg)

### Caso 2: `md-links <path-to-file> --validate`

![md-links-caso2](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso2-md-links.jpg)

### Caso 3:  `md-links <path-to-file> --stats`

![md-links-caso3](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso3-md-links.jpg)

### Caso 4:   `md-links <path-to-file> --stats --validate` o `md-links <path-to-file> --validate --stats`

![md-links-caso4](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso4-md-links.jpg)

### Caso 5:    `md-links --help`

![md-links-caso5](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso5-md-links.jpg)

### Caso 6:     Cuando la información se omite o es incorrecta

![md-links-caso6](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso6-md-links.jpg)

### Caso 7:     `md-links <path-to-directory>`

![md-links-caso6](https://raw.githubusercontent.com/carmen0810/LIM017-md-links/main/img/caso7-md-links.jpg)

## Autora

[Carmen Herrera](https://github.com/carmen0810)
