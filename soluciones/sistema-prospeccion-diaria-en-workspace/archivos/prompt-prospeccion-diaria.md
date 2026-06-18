# Prompt: Prospección diaria con Workspace Studio

Prompt base para la **automatización proactiva web** de Google Workspace Studio.
El sistema se ejecuta solo cada mañana: lee tu configuración, busca en la web,
selecciona los 3 mejores leads con evidencia y te avisa por Gmail o Google Chat.

Ajusta la hora, la localidad y el nombre de la hoja si los cambiaste. Puedes
guardar aquí, en la carpeta `archivos/`, tus plantillas de mensajes y guías de
búsqueda.

```text
Cada día laborable a las 8:30, lee la Google Sheet llamada "CRM Prospección", pestaña "Configuración".

Usa la configuración activa para identificar la localidad objetivo, la provincia, el sector, el número de leads requeridos, las señales de compra prioritarias y el servicio preferente.

Busca en la web empresas ubicadas en la zona y el sector seleccionados que muestren al menos una señal de compra reciente y verificable (contratación, expansión, financiación, cambios en la dirección o estrés organizativo/reseñas negativas).

Para cada empresa candidata, extrae: nombre de la empresa, sector, localidad, web, URLs de Google Maps/LinkedIn, decisor probable, cargo, datos de contacto públicos, señal de compra, URL de evidencia, lead score (0-100) y un primer mensaje sugerido para LinkedIn en español.

Reglas:
- No inventes datos. Si no lo encuentras, escribe "No localizado".
- No añadas un lead si no hay URL de evidencia.
- Revisa "Leads diarios" y "Descartados" para evitar duplicados.
- Añade solo los 3 mejores leads a "Leads diarios" y envíame un resumen por Gmail/Google Chat.
```

## Notas

- La pestaña **Configuración** manda: el sistema solo busca lo que tú definas ahí
  (localidad, sector, número de leads, señales prioritarias y servicio preferente).
- Las reglas de "No inventes datos" y "No añadas un lead si no hay URL de
  evidencia" son las que mantienen tu CRM limpio. No las quites.
- Revisa siempre la **URL de evidencia** antes de contactar: es la prueba de que la
  señal de compra es real.
