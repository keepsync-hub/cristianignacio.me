# Prompt: Prospección diaria con Google Alerts

Prompt en español, listo para pegar en el flujo de **Google Workspace Studio**.
El flujo reacciona cada vez que llega un correo de **Google Alerts**: analiza el
contenido, valida la señal y guarda el lead en tu Google Sheets.

Ajusta la localidad y el nombre de la hoja si los cambiaste, y sustituye lo que
está entre corchetes por los datos de tu negocio.

```text
Cuando reciba un correo de Google Alerts, analiza el contenido del correo.

Identifica empresas ubicadas en mi localidad o provincia objetivo que coincidan con el sector activo en la Google Sheet "CRM Prospección", pestaña "Configuración".

Extrae solo empresas con una señal de compra clara y verificable:
- contratación
- financiación
- subvención
- contrato público
- expansión
- nueva sede
- cambio en la dirección
- problema organizativo relevante

Para cada empresa, extrae:
- nombre de la empresa
- sector
- localidad
- señal de compra
- tipo de señal
- URL de evidencia
- fecha de la evidencia
- web si está disponible
- decisor probable si es público
- cargo
- datos de contacto públicos
- motivo por el que puede encajar con tu negocio
- canal de primer contacto recomendado
- mensaje breve sugerido para LinkedIn, en español

No inventes datos que falten.
Si no hay URL de fuente, descarta el lead.
Antes de añadir la empresa, comprueba que no aparezca ya en "Leads diarios" ni en "Descartados".
Añade los leads válidos a "Leads diarios".
```

## Notas

- La pestaña **Configuración** manda: el flujo solo busca lo que tú definas ahí
  (localidad, sector y señales prioritarias).
- Las reglas de "No inventes" y "descarta el lead si no hay URL de fuente" son las
  que mantienen tu CRM limpio. No las quites.
- Revisa siempre la **URL de evidencia** antes de contactar: es la prueba de que
  la señal de compra es real.
