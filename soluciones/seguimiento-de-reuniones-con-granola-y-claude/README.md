# 🎙️ Seguimiento de reuniones de ventas con Granola y Claude

> **Categoría:** Automatización comercial · **Dificultad:** Intermedio · **Tiempo:** 45-60 min

Graba tus reuniones de ventas con **Granola.ai** y deja que un **Proyecto de
Claude** haga el resto: resumen, CRM actualizado, tarea de seguimiento, correo
para el cliente y tus pendientes en Google Tasks. Todo automático, justo al
terminar la reunión.

> Necesitas **Granola.ai**, un **Proyecto de Claude** con las conexiones a
> Granola, tu **CRM (ej. HubSpot)** y **Google Tasks / Gmail**. Sin código.

---

## 🧩 El problema

Como vendedor quieres tener **la mayor cantidad de reuniones posible**: cada
reunión es una oportunidad. Pero hay una trampa. Cuantas más reuniones haces,
más se te acumulan las tareas de después: generar el resumen, identificar los
compromisos, anotar quién es responsable de cada cosa, definir los próximos
pasos y, sobre todo, **dar seguimiento**. Ese trabajo "invisible" se amontona,
se hace de memoria y a las apuradas, y al final las oportunidades se enfrían
porque nadie movió la siguiente ficha a tiempo.

El dilema es real: **más reuniones = más ventas potenciales, pero también más
trabajo administrativo que termina frenando las ventas.**

## 💡 La idea

Separar las dos cosas que hoy haces a la vez y haces mal por falta de tiempo:
**estar presente en la reunión** y **procesar la reunión**. Granola se encarga
de capturar y resumir; un Proyecto de Claude se encarga de convertir ese
resumen en acciones dentro de tus herramientas. Tú solo conversas con el
cliente.

## 🛠️ La construcción, paso a paso

1. **Graba con Granola.ai.** Granola **no se suma como un asistente más a la
   reunión**: captura el audio directo desde tu dispositivo (PC o teléfono).
   Graba la conversación y entrega un **resumen estructurado** listo para
   revisar y compartir, sin que tengas que tomar notas.
2. **Crea un Proyecto de Claude.** En un Proyecto, pega las
   [instrucciones del proyecto](archivos/instrucciones-proyecto-claude.md) que
   definen el rol del asistente y las reglas (no inventar datos, dejar el correo
   en borrador, etapa "Análisis" por defecto, seguimiento a 3 días).
3. **Conecta las herramientas.** Conecta el proyecto a **Granola** (para leer
   los datos de la reunión), a tu **CRM, por ejemplo HubSpot** (contactos,
   negocios, notas y tareas) y a **Google Tasks / Gmail**.
4. **Procesa cada reunión con un solo prompt.** Al terminar, pega el
   [prompt principal](archivos/prompt-post-reunion.md). Claude lee la reunión
   desde Granola y ejecuta todo el flujo de seguimiento.

## 🔄 Qué hace Claude al ejecutar el flujo

| Paso | Acción |
|---|---|
| 1. Lee Granola | Obtiene el resumen estructurado y la transcripción de la reunión. |
| 2. Extrae lo clave | Cliente, empresa, correo, compromisos, responsables, próximos pasos y fechas. |
| 3. CRM — Contacto | Busca el contacto; **si no existe, lo crea**. |
| 4. CRM — Negocio | Crea un negocio en etapa **"Análisis"** con el resumen como nota. |
| 5. CRM — Tarea | Crea una **tarea de seguimiento dentro de 3 días**. |
| 6. Correo | Redacta un **borrador listo para enviar** al cliente justo tras la reunión. |
| 7. Google Tasks | Agrega **solo tus pendientes** (donde tú eres el responsable). |

## 📝 Los prompts que usamos

Tres prompts listos para copiar y usar (los tienes en la carpeta
[`archivos/`](archivos/)):

- **[Instrucciones del Proyecto](archivos/instrucciones-proyecto-claude.md)** —
  el rol y las reglas fijas del asistente.
- **[Prompt principal](archivos/prompt-post-reunion.md)** — hace todo el flujo
  de seguimiento de una sola vez.
- **[Solo el correo](archivos/prompt-correo-seguimiento.md)** y
  **[solo los pendientes](archivos/prompt-pendientes-google-tasks.md)** — para
  cuando solo necesitas una parte.

### Prompt principal (el que más usarás)

```text
Procesa mi reunión de ventas más reciente.

1) GRANOLA — Obtén los datos
Conéctate a Granola y trae el resumen estructurado y la transcripción de mi última reunión.
(Si no es la última, te indico el título o la fecha: __________.)
Extrae con claridad: nombre del cliente, empresa, correo, cargo, teléfono si aparece, temas tratados, dolores/necesidades, presupuesto o señales de compra, compromisos acordados, responsables de cada compromiso, próximos pasos y fechas mencionadas.

2) HUBSPOT — Actualiza el CRM
- Busca el contacto por correo o por nombre + empresa. Si NO existe, créalo con los datos disponibles.
- Crea un negocio (deal) asociado a ese contacto, en la etapa "Análisis", con un nombre claro (Empresa — motivo de la oportunidad).
- Añade el resumen de la reunión como NOTA dentro del negocio.
- Crea una TAREA de seguimiento asociada al negocio, con vencimiento dentro de 3 días, titulada "Seguimiento: [Empresa]".

3) CORREO — Deja un borrador listo
Redacta un correo de seguimiento dirigido al cliente, para enviar justo después de la reunión: agradece la reunión, resume en 3-4 puntos lo conversado, confirma los próximos pasos y propone una fecha para el siguiente contacto. Déjalo como BORRADOR, no lo envíes.

4) GOOGLE TASKS — Mis pendientes
De la lista de próximos pasos, identifica solo los que me corresponden a MÍ como responsable y agrégalos a Google Tasks, cada uno con su fecha límite. Los pasos que le corresponden al cliente NO van a mis tareas (van solo en el correo y en la nota del CRM).

5) RESUMEN
Al final dame un resumen corto: contacto creado o encontrado, negocio creado, tarea de seguimiento, borrador de correo y pendientes agregados, con sus enlaces.

Reglas: no inventes datos; si falta el correo del cliente avísame antes de crear el negocio; no envíes el correo, solo déjalo en borrador.
```

## 🚀 El resultado

Terminas la reunión, escribes un mensaje y, en segundos, tienes:

- El **contacto creado o actualizado** en tu CRM.
- Un **negocio en etapa "Análisis"** con el resumen de la reunión como nota.
- Una **tarea de seguimiento a 3 días** para no dejar enfriar la oportunidad.
- Un **borrador de correo** para el cliente, listo para revisar y enviar.
- Tus **pendientes personales en Google Tasks**, con sus fechas.

Dejas de hacer trabajo administrativo entre reunión y reunión, y vuelves a lo
que importa: **tener más conversaciones de ventas sin que se te caiga ninguna.**

## 🔁 Hazlo tuyo

- **Otro CRM:** cambia HubSpot por el que uses (Pipedrive, Salesforce, Zoho).
  El flujo es el mismo: buscar/crear contacto, crear negocio, nota y tarea.
- **Otra etapa:** si tu primera reunión no es "Análisis", ajusta la etapa por
  defecto en las instrucciones del proyecto.
- **Otro gestor de tareas:** reemplaza Google Tasks por Todoist, Notion o
  Microsoft To Do.
- **Otro ritmo de seguimiento:** cambia los 3 días por el plazo que use tu
  equipo, o pídele a Claude que proponga la fecha según lo conversado.

## ⚠️ Uso responsable

Avisa a los participantes de que la reunión se está grabando cuando corresponda
y respeta la normativa de tu país y de tu empresa. Revisa siempre el borrador
del correo y los datos del CRM antes de enviar o guardar: Claude prepara, tú
decides.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/seguimiento-de-reuniones-con-granola-y-claude/
