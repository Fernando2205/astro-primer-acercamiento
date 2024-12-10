# Astro Primer Acercamiento

Este proyecto es un primer acercamiento al framework Astro, diseñado para entender y practicar sus características y funcionalidades.

## 🚀 Estructura del Proyecto

Dentro de este proyecto de Astro, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   ├─── favicon.svg
│   ├─ aprendiendo-git.jpg
│   ├─ learning-typescript.jpg
│   ├─ programadot-pragmatico.jpg
│   └──refactoring.jpg
├── src/
│   ├── components/
│   │   ├── AmazonLogo.astro
│   │   ├── BookScore.astro
│   │   ├── BuyButton.astro
│   │   └── Welcome.astro
│   ├── content/
│   │   ├── books/
│   │   │   ├── aprendiendo-git.md
│   │   │   ├── learning-typescript.md
│   │   │   ├── programador-pragmatico.md
│   │   │   └── refactoring.md
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── libro/
│           └── [id].astro
│
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 📚 Contenido

Este proyecto incluye varios archivos de contenido en formato Markdown ubicados en `src/content/books/`. Cada archivo representa un libro con información relevante como título, autor, imagen, tiempo de lectura, descripción y enlaces de compra.

## 🛠️ Configuración

### Tailwind CSS

El proyecto utiliza Tailwind CSS para el diseño y estilos. La configuración de Tailwind se encuentra en `tailwind.config.mjs`.

### Integraciones

El proyecto está configurado para usar la integración de Tailwind con Astro, como se define en `astro.config.mjs`.

### Variables de Entorno

El archivo `astro.config.mjs` también define algunas variables de entorno que se utilizan en el proyecto, como `SHOW_BUY_BUTTON` y `SCORE_API_ENDPOINT`.

## 👀 ¿Quieres aprender más?

Siéntete libre de consultar [la documentación de Astro](https://docs.astro.build) o unirte al [servidor de Discord](https://astro.build/chat).

Este

README.md

proporciona una visión general del proyecto, su estructura, comandos útiles y enlaces para aprender más sobre Astro.
