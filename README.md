# Prácticas NestJS 2

Un proyecto de práctica con NestJS para aprender los conceptos fundamentales del framework.

## Instalación

```bash
npm install
```

## Comandos disponibles

- `npm run start` - Inicia la aplicación en modo producción
- `npm run start:dev` - Inicia la aplicación en modo desarrollo (con recarga automática)
- `npm run start:debug` - Inicia la aplicación en modo debug
- `npm run start:prod` - Ejecuta la aplicación compilada
- `npm run build` - Compila el proyecto

## Estructura del proyecto

```
src/
├── main.ts           # Punto de entrada de la aplicación
├── app.module.ts     # Módulo raíz
├── app.controller.ts # Controlador principal
└── app.service.ts    # Servicio principal
```

## Acceso a la aplicación

Una vez que la aplicación esté corriendo, accede a:

- `http://localhost:3000/` - Endpoint raíz

## Licencia

ISC
