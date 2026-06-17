# Prompts: Prospección diaria en Workspace Studio

Tres prompts en español, listos para pegar en **Google Workspace Studio**.
Ajusta el horario, la localidad y el nombre de la hoja si los cambiaste, y
sustituye lo que está entre corchetes por los datos de tu negocio.

## 1) Prompt principal (búsqueda diaria)

Crea el flujo proactivo que cada mañana investiga, puntúa y guarda los 3 mejores
leads.

```text
Cada día laborable a las 8:30 AM, lee la Google Sheet llamada "CRM Prospección", pestaña "Configuración".

Usa la configuración activa para identificar:
- localidad objetivo
- provincia
- sector objetivo
- número de leads necesarios
- señales de compra prioritarias
- servicio preferente

Busca en la web empresas ubicadas en la zona y el sector seleccionados que muestren al menos una señal de compra reciente y verificable.

Señales de compra válidas:
- contratación o selección de personal
- apertura de una nueva sede
- ampliación de actividad
- recepción de financiación, ayudas, subvenciones o contratos públicos
- cambio de CEO, gerente, director o administrador
- publicación de noticias de crecimiento relevantes
- señales públicas de tensión organizativa, como reseñas negativas relacionadas con el personal, la coordinación, la calidad del servicio, retrasos, rotación o problemas de gestión interna

Para cada empresa candidata, extrae:
- nombre de la empresa
- sector
- localidad
- web
- URL de la ficha de Google Maps si está disponible
- URL de LinkedIn de la empresa si está disponible
- nombre del decisor probable si es público
- cargo del decisor
- URL de LinkedIn del decisor si es público
- email profesional público si está disponible
- teléfono de la empresa
- señal de compra
- tipo de señal
- URL de evidencia
- fecha de la evidencia
- motivo por el que esta empresa puede encajar con tu propuesta de valor
- canal de contacto recomendado
- mensaje inicial sugerido para LinkedIn, en español
- puntuación del lead de 0 a 100

Reglas:
- No inventes nombres, emails, cargos, señales ni URLs.
- Si no encuentras un dato en una fuente pública, escribe "No localizado".
- No añadas un lead si no hay URL de evidencia.
- Antes de añadir un lead, comprueba que la empresa no aparezca ya en "Leads diarios" ni en "Descartados".
- Añade solo los 3 mejores leads a la pestaña "Leads diarios".
- Envíame un breve resumen por Gmail o Google Chat con los 3 leads seleccionados.
```

## 2) Prompt para analizar Google Alerts

Una segunda automatización, más sencilla, que reacciona cada vez que llega un
correo de Google Alerts.

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

## 3) Prompt para generar el mensaje comercial

Cuando el lead ya está en Sheets, redacta el mensaje a partir de los datos de la
fila.

```text
Con los datos del lead de la fila actual, escribe un mensaje breve de conexión de LinkedIn en español.

Reglas:
- Máximo 200 caracteres.
- Tono natural y profesional.
- No vendas directamente.
- Menciona la empresa o la señal solo si resulta natural.
- Posicióname como alguien que ayuda a las PYMEs con [tu propuesta de valor: por ejemplo, mejorar la gestión de personas, el clima laboral y los conflictos internos].
- Evita el lenguaje de venta agresiva.
```

Ejemplo de salida:

```text
Hola, [Nombre]. He visto la evolución de [Empresa] en Córdoba. Trabajo ayudando a PYMEs a mejorar clima, liderazgo y gestión de personas. Me encantará seguir vuestra actividad.
```

## Notas

- La pestaña **Configuración** manda: la IA solo busca lo que tú definas ahí
  (localidad, sector y señales prioritarias).
- Las reglas de "No inventes" y "No añadas un lead sin URL de evidencia" son las
  que mantienen tu CRM limpio. No las quites.
- Revisa siempre la **URL de evidencia** antes de contactar: es la prueba de que
  la señal de compra es real.
