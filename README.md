## Pre-requerimientos

`Git >=V2.46.0`,
`Node >=v20.18.0`

## Instalación Win

Git lo puedes descargarla en la página oficial de git `https://git-scm.com/downloads/win` y node `https://nodejs.org/en/`

## Instalacion Linux/Unix

Aqui debes instalar debes la consola bash:

```bash
sudo apt-get install git
```

o

Puede buscar el comando desde la pagina oficial

`https://git-scm.com/downloads/linux`

Con node puede usar instalar el package con nvm que esta en el enlace alli esta la instrucción para instalar recomendacion que sea la version LTS mas estable que exista

`https://nodejs.org/en/download/package-manager`

## Instrucción

Primero debes clonar la app con git:

`git clone https://github.com/jsha64/app-react-prueba-tecnica`

Después de clonar entrar al directorio `cd app-react-prueba-tecnica/` e instala las dependencias con npm:

`npm install`

Luego de esto abre la terminal o consola y escribir el comando que levanta el servidor local:

`npm run dev`

Abre [http://localhost:3000](http://localhost:3000) para que el navegador muestre los resultados.

El lado del front y back están unidos en un mismo servidor por tanto si quieres probar el endpoint puedes usar Postman, la descargas [aqui](https://www.postman.com/downloads/)

## Prueba de endpoint

Seleccione el metodo `POST`

Ingresa la url:

```bash
http://localhost:3000/api/login
```

En el cuerpo de la solicitud (Body), selecciona raw y elige JSON:

```bash
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

Esto debera arrojar un token si todo esta correcto.
