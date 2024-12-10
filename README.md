# Astro Primer Acercamiento

Este proyecto es un primer acercamiento al framework Astro, diseñado para entender y practicar sus características y funcionalidades.

## 🚀 Estructura del Proyecto

Dentro de este proyecto de Astro, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── [AmazonLogo.astro](http://_vscodecontentref_/1)
│   │   ├── [BookScore.astro](http://_vscodecontentref_/2)
│   │   ├── [BuyButton.astro](http://_vscodecontentref_/3)
│   │   └── Welcome.astro
│   ├── content/
│   │   ├── books/
│   │   │   ├── aprendiendo-git.md
│   │   │   ├── learning-typescript.md
│   │   │   ├── programador-pragmatico.md
│   │   │   └── refactoring.md
│   │   └── config.ts
│   ├── layouts/
│   │   └── [Layout.astro](http://_vscodecontentref_/4)
│   └── pages/
│       ├── [index.astro](http://_vscodecontentref_/5)
│       └── libro/
│           └── [[id].astro](http://_vscodecontentref_/6)
├── .gitignore
├── [astro.config.mjs](http://_vscodecontentref_/7)
├── [package.json](http://_vscodecontentref_/8)
├── [tailwind.config.mjs](http://_vscodecontentref_/9)
└── [tsconfig.json](http://_vscodecontentref_/10)
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
