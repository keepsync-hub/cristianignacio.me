# Prompt: Prospección diaria con Workspace Studio

Prompt base para la **automatización proactiva web** de Google Workspace Studio.
El sistema se ejecuta solo cada mañana: lee tu configuración, busca en la web,
selecciona los 3 mejores leads con evidencia y te avisa por Gmail o Google Chat.

Ajusta la hora, la localidad y el nombre de la hoja si los cambiaste. Puedes
guardar aquí, en la carpeta `archivos/`, tus plantillas de mensajes y guías de
búsqueda.

```text
Every weekday at 8:30 AM, read the Google Sheet named "CRM Prospección Loke", tab "Configuración".

Use the active configuration to identify target location, province, sector, number of leads required, priority buying signals, and preferred service.

Search the web for companies located in the selected area and sector that show at least one recent and verifiable buying signal (hiring, expanding, funding, management changes, or organizational stress/negative reviews).

For each candidate company, extract: company name, sector, location, website, Google Maps/LinkedIn URLs, likely decision maker, role, public contact data, buying signal, evidence URL, lead score (0-100), and a suggested first LinkedIn message in Spanish.

Rules:
- Do not invent data. If not found, write "No localizado".
- Do not add a lead if there is no evidence URL.
- Check "Leads diarios" and "Descartados" to avoid duplicates.
- Add only the top 3 leads to "Leads diarios" and send me a summary via Gmail/Google Chat.
```

## Notas

- La pestaña **Configuración** manda: el sistema solo busca lo que tú definas ahí
  (localidad, sector, número de leads, señales prioritarias y servicio preferente).
- Las reglas de "Do not invent data" y "Do not add a lead if there is no evidence
  URL" son las que mantienen tu CRM limpio. No las quites.
- Revisa siempre la **evidence URL** antes de contactar: es la prueba de que la
  señal de compra es real.
