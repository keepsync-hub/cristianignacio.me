# Prompt: Generar el PowerPoint personalizado

Úsalo **después** del prompt de investigación, en la misma conversación, para que
Claude aproveche el brief. Requiere **creación de archivos** activada.

```text
Con el brief anterior, crea un archivo PowerPoint (.pptx)
descargable, personalizado para esta persona y su empresa.

Estructura de slides:
1. Portada (nombre de la persona, su empresa y el motivo del contacto)
2. "Lo que entendemos de [empresa]" (qué hace y su contexto)
3. "Desafíos que vemos" (los principales retos detectados)
4. "Cómo podemos ayudar" (propuesta de valor alineada a su rol)
5. "Por qué ahora" (1-2 razones de oportunidad/momento)
6. Próximos pasos

Tono profesional y cercano. Frases cortas, pensadas para leerse en voz
alta. Cuando termines, dame el archivo .pptx para descargar.
```

## Personalización de marca

Añade al final del prompt:

```text
Aplica mi identidad de marca:
- Colores: #RRGGBB (principal) y #RRGGBB (secundario)
- Tipografía: [nombre de la fuente]
- Logo: [súbelo o describe dónde ponerlo]
```

## Otros formatos (variantes)

- **Gamma / Google Slides / PowerPoint a mano:**
  ```text
  En vez del archivo, dame el contenido slide por slide (título +
  viñetas + nota del presentador) para pegarlo en Gamma o Google Slides.
  ```
- **Presentación en HTML (se abre en el navegador, exportable a PDF):**
  ```text
  En vez de .pptx, genera una presentación en un solo archivo HTML
  (estilo reveal.js) que pueda abrir en el navegador y exportar a PDF.
  ```

## Consejo

Si una slide queda muy cargada, pide "resume la slide 3 en 4 viñetas". Itera
hablando con Claude hasta que quede como quieres.
