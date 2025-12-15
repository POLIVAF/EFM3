# 🥗 Sprint 1 – Maquetación y Prototipo Visual

**Proyecto:** Buscador de Recetas – Gourmet Go
**Objetivo del Sprint:** Construir una maqueta estática, visualmente funcional, responsiva y aprobable por el cliente.

## ✅ Objetivos cumplidos

## Estructura visual del proyecto

- Se creó la página principal (index.html) con la estructura inicial del buscador.
- Se integró Bootstrap 5 para la maquetación y estilo base.
- Se añadieron archivos style.css y app.js (vacío para preparar el Sprint 2).

## Historias de Usuario

### 🔍 HU-01: Interfaz Principal de Búsqueda

**Como usuario, quiero ver un encabezado y un buscador para entender el propósito de la aplicación.**

- ✔ Se agregó un encabezado centrado: "Buscador de Recetas".
- ✔ El formulario contiene:
  - Un campo `<input>` con placeholder "Busca por ingrediente…".
  - Un botón de búsqueda estilizado con Bootstrap.
- ✔ Todo el contenido está maquetado con clases de Bootstrap (grid, spacing, layout).
- ✔ Se agregó un fondo con imagen + capa oscura semitransparente para mejorar legibilidad.

### 🍲 HU-02: Visualización de Recetas de Ejemplo

**Como usuario nuevo, quiero ver recetas de ejemplo al cargar la página.**

- ✔ Se creó una sección de 6 tarjetas de recetas utilizando componentes card de Bootstrap.
- ✔ Cada tarjeta incluye:
  - Imagen (estandarizada con object-fit: cover).
  - Título de receta.
  - Botón "Ver receta".
- ✔ Todas las recetas están hard-codeadas en index.html.
- ✔ Se implementó un sistema de colapsables (collapse) para mostrar ingredientes y pasos.

### 📱 HU-03: Diseño Responsivo

**Como usuario móvil, quiero que el diseño se adapte a mi pantalla.**

- ✔ Sistema de grillas Bootstrap:
  - col-12 → móviles
  - col-md-6 → tablets
  - col-lg-4 → desktop
- ✔ Tarjetas organizadas en filas automáticas.
- ✔ Botones, textos y tarjetas adaptados a cualquier tamaño de pantalla.
- ✔ Collapse configurado para que solo una tarjeta por fila se despliegue a la vez.

## Github Pages

[EFM3](https://polivaf.github.io/EFM3/)