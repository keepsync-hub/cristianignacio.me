# 🤝 Cómo contribuir a Claude desde Cero

¡Gracias por sumarte! **Claude desde Cero** es una base abierta y comunitaria.
La premisa es simple: **soluciones reales con Claude, explicadas sin
tecnicismos.** Si lo resolviste tú, alguien más lo necesita.

No hace falta saber programar para contribuir. Si sabes escribir un documento,
puedes documentar una solución.

---

## ✨ Qué buscamos en una solución

- **Un problema real y concreto.** Cotidiano, útil, entendible.
- **Lenguaje claro.** Cero jerga. Si usas un término técnico, explícalo.
- **El "cómo se hizo" de verdad.** Prompts, decisiones y archivos reales.
- **Replicable.** Cualquiera debería poder seguir los pasos y llegar al mismo
  resultado.

## 📁 Estructura de una solución

Cada solución vive en su propia carpeta dentro de `soluciones/`:

```
soluciones/
└── nombre-de-tu-solucion/
    ├── index.html      # Explicación para la web
    ├── README.md       # Explicación para GitHub
    └── archivos/       # Prompts, ejemplos y material de apoyo
```

> El nombre de la carpeta va en **minúsculas y con guiones**.
> Ejemplo: `resumir-un-pdf`, `planificar-un-viaje`.

## 🚀 Pasos para contribuir

1. **Haz un fork** de este repositorio (botón *Fork* en GitHub).
2. **Crea una rama** con un nombre descriptivo, por ejemplo
   `solucion/resumir-un-pdf`.
3. **Copia la plantilla:** duplica la carpeta [`plantilla/`](plantilla/) dentro
   de `soluciones/` y renómbrala.
4. **Rellena tu solución** en `README.md` e `index.html` siguiendo la plantilla.
5. **Enlaza tu solución** añadiendo una tarjeta en
   [`soluciones/index.html`](soluciones/index.html) (puedes copiar una existente
   y cambiar el texto y el enlace).
6. **Abre un Pull Request** describiendo brevemente qué resuelve tu solución.

¿No te sientes cómodo con Git? También puedes
[abrir un issue](https://github.com/keepsync-hub/cristianignacio.me/issues)
contando tu solución y te ayudamos a publicarla.

## ✅ Checklist antes de tu Pull Request

- [ ] Carpeta en `soluciones/` con nombre en minúsculas y guiones.
- [ ] `README.md` e `index.html` completos y sin tecnicismos.
- [ ] Material de apoyo dentro de `archivos/`.
- [ ] Tarjeta añadida en `soluciones/index.html`.
- [ ] Lo leíste en voz alta y se entiende sin saber programar.

## 🎨 Estilo del sitio

El diseño es **minimalista en estructura y neo-brutalista en color**
(bordes gruesos, sombras duras, colores vivos). Reutiliza las clases de
[`assets/css/style.css`](assets/css/style.css) — no hace falta CSS nuevo para
una solución típica. Copia el `index.html` de una solución existente como base.

## 💛 Código de conducta

Sé amable, paciente y claro. Esta comunidad existe para que aprender a usar
Claude sea accesible para todos. Tratamos cada pregunta como válida.

---

¿Dudas? Abre un issue. Nos vemos en el repo 👋
