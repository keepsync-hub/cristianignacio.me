# 📑 Una presentación personalizada a partir de un correo

> **Categoría:** Ventas / Productividad · **Dificultad:** Intermedio · **Tiempo:** ~15 min

Con solo la dirección de email de alguien, deja que Claude investigue su rol,
entienda a su empresa y sus desafíos, y te arme un PowerPoint a medida listo para
descargar.

> Necesitas una cuenta de Claude (**claude.ai**) con **búsqueda web** y
> **creación de archivos** activadas. Cero código.

---

## 🧩 El problema

Tienes una reunión o quieres escribirle a un posible cliente y solo tienes su
correo. Para llegar preparado necesitas saber quién es, qué hace su empresa y qué
le quita el sueño… y encima armar una presentación a medida. Hacerlo bien toma
horas.

## 💡 La idea

La dirección de correo ya tiene dos pistas enormes: el **nombre** de la persona y
el **dominio** de su empresa. Con eso, Claude (usando búsqueda web) investiga a
la persona y a la empresa, y luego genera el PowerPoint personalizado por ti.

## 🛠️ La construcción, paso a paso

1. **Descompón el correo.** De `nombre.apellido@empresa.com` sacas la persona
   (*nombre apellido*) y la empresa (el dominio *empresa.com*).
2. **Activa la búsqueda web en claude.ai** para que consulte info pública y
   actual en lugar de inventar.
3. **Investiga a la persona:** rol, responsabilidades y prioridades típicas del
   cargo.
4. **Investiga a la empresa por el dominio:** a qué se dedica, productos, tamaño,
   noticias recientes y principales desafíos.
5. **Cruza rol + empresa:** conecta lo que le importa a la persona con lo que
   vive su empresa → tu ángulo de valor.
6. **Genera el PPT:** pide a Claude un archivo `.pptx` descargable con la
   estructura de la presentación.

## 📝 Los prompts que usamos

Son dos, en la carpeta [`archivos/`](archivos/):
[`prompt-investigacion.md`](archivos/prompt-investigacion.md) y
[`prompt-presentacion.md`](archivos/prompt-presentacion.md).

### 1) Investigación (persona + empresa)

```text
Tengo solo este correo: nombre.apellido@empresa.com
Usa búsqueda web y trabaja solo con información pública y profesional.

1. PERSONA: a partir del nombre, dime su rol/cargo probable, sus
   responsabilidades y las 3 prioridades típicas de alguien con ese rol.
2. EMPRESA: a partir del dominio (empresa.com), dime a qué se dedica,
   sus productos/servicios, tamaño aproximado, sector, noticias
   recientes y sus 3 principales desafíos actuales.
3. ÁNGULO: conecta lo que le importa a esa persona con los desafíos de
   su empresa, y propón 3 ideas de valor que yo podría aportarle.

Devuélvelo como un brief claro, sin tecnicismos. Indica el nivel de
confianza de cada dato y marca lo que sea suposición.
```

### 2) Generación del PowerPoint

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

> 💬 **Consejo:** para tu identidad de marca, dile "usa estos colores y este
> logo" y pega/sube tu material. Claude lo aplica al `.pptx`.

## 🚀 El resultado

Un **brief de investigación** (quién es, qué hace su empresa y sus desafíos) y un
**PowerPoint personalizado** listo para descargar y presentar. De un correo a una
reunión preparada en minutos.

## ⚠️ Uso responsable

Usa solo información **pública y profesional** (web de la empresa, perfiles
profesionales) y con un fin legítimo de contacto de negocio. Trata los datos de
las personas con respeto y conforme a la normativa aplicable.

## 🔁 Hazlo tuyo

- **Otro formato:** pídele el contenido para *Gamma* o *Google Slides*, o una
  presentación en *HTML* exportable a PDF.
- **Tu marca:** dale tus colores, tipografía y logo.
- **Idioma y longitud:** "hazla en inglés" o "máximo 5 slides".
- **Email en vez de PPT:** pídele un correo de primer contacto con el mismo brief.

## 🎓 Cursos recomendados

Para implementar esta solución te conviene dominar antes:

- [Claude para principiantes](https://cristianignacio.me/cursos/01-claude-para-principiantes/) — los fundamentos para conversar con Claude y activar la búsqueda web.
- [Claude para presentaciones](https://cristianignacio.me/cursos/08-claude-para-presentaciones/) — cómo pasar de una idea a un PowerPoint listo para descargar.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/presentacion-personalizada-desde-un-correo/
