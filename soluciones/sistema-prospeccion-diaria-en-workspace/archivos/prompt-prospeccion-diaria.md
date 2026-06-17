# Prompt: Prospección diaria en Workspace Studio

Pega este prompt en el flujo automatizado de **Google Workspace Studio**. El
flujo funciona en cualquier idioma; aquí lo tienes en español, listo para usar.
Ajusta el horario y el nombre de la hoja si los cambiaste.

```text
Cada día laborable a las 8:30 AM, lee la Google Sheet llamada "CRM Prospección Loke".
Usa los valores de la hoja para identificar la localidad objetivo, el sector objetivo, las señales de compra deseadas y el número máximo de leads por día.

Busca en la web empresas de esa localidad y ese sector que muestren al menos una señal de compra:
- Contratando o seleccionando personal
- Recibiendo financiación, ayudas, subvenciones o contratos públicos
- Abriendo una nueva sede o ampliando su actividad
- Cambio de CEO, gerente, director o administrador
- Señales públicas de problemas con empleados (rotación, quejas laborales)

Devuelve solo empresas en las que exista una URL de fuente pública verificable.
Para cada candidato, extrae: nombre de la empresa, sector, localidad, web, teléfono público, URL de LinkedIn de la empresa, nombre probable del decisor, cargo del decisor, URL de LinkedIn del decisor, email profesional público, señal de compra, tipo de señal, URL de evidencia y fecha de la evidencia.

Añade solo los 3 mejores leads a la pestaña "Leads diarios".
No inventes nombres, emails, cargos ni señales. Si no encuentras un dato, escribe "No localizado".
No añadas un lead si no hay URL de evidencia.
Antes de añadir un lead, comprueba que la empresa no aparezca ya en "Leads diarios" ni en "Descartados".
Envíame un mensaje de Google Chat con un breve resumen de los 3 leads seleccionados.
```

## Variantes útiles

- **Disparador reactivo:** en vez de (o además de) la hora fija, configura el
  flujo para que se ejecute cada vez que llegue un correo de **Google Alerts**.
- **Cambiar el canal de aviso:** sustituye "mensaje de Google Chat" por "un
  correo de Gmail" si prefieres el resumen en tu bandeja de entrada.
- **Borrador de mensaje:** añade "Para cada lead, redacta un borrador de primer
  mensaje personalizado, breve y natural, listo para copiar y pegar."

## Notas

- La pestaña **Configuración** manda: la IA solo busca lo que tú definas ahí
  (localidad, sector y señales prioritarias).
- Las reglas de "No inventes" y "No añadas un lead sin URL de evidencia" son las
  que mantienen tu CRM limpio. No las quites.
- Revisa siempre la **URL de evidencia** antes de contactar: es la prueba de que
  la señal de compra es real.
