# 🟧 Claude desde Cero — Sin tecnicismos

> Soluciones reales construidas con **Claude**, explicadas paso a paso y **sin
> tecnicismos**. La base abierta de la comunidad *Claude desde Cero*.

🌐 **Sitio web:** [cristianignacio.me](https://cristianignacio.me)

---

## ¿Qué es esto?

Un sitio y un repositorio donde publicamos soluciones a problemas reales
resueltos con Claude. Cada solución no solo muestra el resultado: también
comparte **cómo se construyó** (el problema, la idea, los prompts y los
archivos), para que cualquiera pueda entenderla, copiarla y mejorarla.

La premisa: **si no sabes programar, igual puedes lograrlo.**

## 🗂️ Estructura del repositorio

```
cristianignacio.me/
├── index.html              # Home page
├── assets/
│   ├── css/style.css       # Sistema de diseño (minimalista + neo-brutalista)
│   └── js/main.js          # Interacciones mínimas (menú móvil)
├── soluciones/             # Todas las soluciones
│   ├── index.html          # Listado de soluciones
│   └── nombre-solucion/    # Una carpeta por solución
│       ├── index.html      # Explicación (web)
│       ├── README.md       # Explicación (GitHub)
│       └── archivos/       # Prompts y material de apoyo
├── plantilla/              # Plantilla para crear soluciones nuevas
├── CONTRIBUTING.md         # Cómo contribuir
├── CNAME                   # Dominio personalizado (GitHub Pages)
└── README.md               # Este archivo
```

La idea es que la estructura sea **autoexplicativa**: el sitio web y el repo
comparten la misma lógica, así que navegar GitHub es tan claro como navegar la
web.

## 🎨 Diseño

- **Minimalista en estructura:** mucho aire, jerarquía clara, sin ruido.
- **Neo-brutalista en color y forma:** bordes gruesos, sombras duras sin
  desenfoque y una paleta viva (amarillo, rosa, cian, violeta, naranja, lima).
- **Sin dependencias ni build:** HTML y CSS puros. Se publica tal cual.

## 🚀 Ver el sitio localmente

No necesita instalación. Basta con abrir `index.html` en el navegador, o
levantar un servidor estático simple:

```bash
# Con Python (incluido en la mayoría de sistemas)
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## 🌍 Publicación (GitHub Pages)

El sitio está pensado para **GitHub Pages**:

1. En *Settings → Pages*, selecciona la rama a publicar y la carpeta raíz
   (`/`).
2. El archivo `CNAME` apunta al dominio `cristianignacio.me`.
3. El archivo `.nojekyll` evita el procesamiento de Jekyll para servir los
   archivos tal cual.

## 🤝 Contribuir

Esta es una base **comunitaria**. ¿Resolviste algo con Claude? Compártelo.
Lee la guía completa en [CONTRIBUTING.md](CONTRIBUTING.md) y empieza con la
[plantilla](plantilla/).

---

Hecho con 💛 por la comunidad **Claude desde Cero**.
