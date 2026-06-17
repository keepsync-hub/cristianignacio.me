# 🎯 Prospección diaria de 3 leads locales con Workspace Studio

> **Categoría:** Prospección de clientes · **Dificultad:** Intermedio · **Tiempo:** 60-90 min para una primera versión

Sistema para encontrar cada día **3 empresas de tu localidad y sector elegido**
que muestren señales de compra: contratación, crecimiento, cambio de gerente,
financiación, expansión, adjudicaciones o señales de tensión organizativa.

> Necesitas Google Workspace con **Workspace Studio**, **Google Sheets**,
> **Gmail/Google Alerts** y **Gemini**. Sin código en la versión básica.

---

## 🧩 El problema

Quieres prospectar empresas locales de forma constante, pero sin tener que pasar
cada día una o dos horas buscando manualmente en Google, LinkedIn, Google Maps,
noticias o portales de empleo.

El problema no es solo encontrar empresas. El verdadero reto es encontrar
empresas que tengan **alguna señal real de oportunidad**. Para Loke, una empresa
puede ser buen lead si:

- está contratando personal;
- está creciendo;
- ha recibido financiación o subvención;
- ha cambiado de gerente;
- abre nueva sede;
- tiene reseñas negativas relacionadas con trato, organización o equipo;
- muestra rotación, desorden interno o necesidad de profesionalizar personas;
- pertenece a un sector intensivo en personal: transporte, hostelería, limpieza,
  comercio, logística, salud privada, residencias, restauración, etc.

La dificultad está en juntar todo esto en una hoja de Google Sheets de forma
ordenada y útil para contactar.

## 💡 La idea

Crear un sistema con **Google Sheets como centro de control** y **Workspace
Studio como investigador diario**. Tú indicas la localidad, el sector, las
señales que quieres priorizar y el número de leads diarios. Y el flujo hace cada
día lo siguiente:

1. busca empresas;
2. detecta señales de compra;
3. localiza datos públicos;
4. identifica decisor probable;
5. puntúa el lead;
6. guarda los 3 mejores en Google Sheets;
7. te propone un primer mensaje de contacto.

La recomendación es montarlo en tres fases:

- **Versión sencilla:** Google Alerts + Workspace Studio + Google Sheets.
- **Versión proactiva:** Workspace Studio busca cada día por sector y localidad.
- **Versión avanzada:** Apps Script + Places API + Workspace Studio.

## 🛠️ La construcción, paso a paso

### 1. Crea la hoja principal en Google Sheets

Nombre recomendado: **CRM Prospección Loke**. Crea estas cinco pestañas:

1. **Configuración**
2. **Leads diarios**
3. **Descartados**
4. **Consultas**
5. **Seguimiento**

### 2. Pestaña: Configuración

Aquí decides qué se busca esa semana. Así no tienes que tocar el flujo: solo
cambias el sector o la localidad en Sheets.

| Campo | Ejemplo |
|---|---|
| Localidad | Córdoba |
| Provincia | Córdoba |
| Sector objetivo | Transporte |
| Nº leads diarios | 3 |
| Tamaño ideal | 10-40 trabajadores |
| Señales prioritarias | contratación, expansión, cambio gerente, reseñas negativas |
| Servicio Loke prioritario | Radar Loke / Loke 360 / protocolos / conflictos |
| Estado | Activo |

### 3. Pestaña: Leads diarios

La tabla principal donde Workspace Studio irá guardando los leads.

| Campo | Descripción |
|---|---|
| Fecha detección | Día en que entra el lead |
| Empresa | Nombre de la empresa |
| Sector | Sector detectado |
| Localidad | Ciudad o provincia |
| Web | Página oficial |
| Google Maps | Enlace a ficha si se localiza |
| LinkedIn empresa | Enlace a empresa |
| Decisor probable | Nombre si aparece públicamente |
| Cargo | Gerente, CEO, responsable RRHH, administrador |
| LinkedIn decisor | Perfil si se localiza |
| Email público | Solo si aparece públicamente |
| Teléfono empresa | Teléfono corporativo |
| Señal de compra | Qué ha pasado |
| Tipo de señal | contratación, expansión, financiación, cambio, conflicto |
| Fuente | URL de evidencia |
| Fecha de la señal | Fecha de noticia/oferta/publicación |
| Score | Puntuación 0-100 |
| Motivo Loke | Por qué puede encajar con Loke |
| Canal recomendado | LinkedIn, llamada, email, visita, BNI |
| Mensaje sugerido | Texto inicial |
| Estado | Nuevo, revisado, contactado, descartado |
| Notas | Observaciones |

> Regla importante: **si no hay URL de evidencia, no entra el lead**.

### 4. Pestaña: Descartados

Sirve para que el sistema no vuelva a proponerte empresas que ya has descartado.

| Empresa | Motivo | Fecha | Fuente |
|---|---|---|---|
| Empresa X | Muy grande / no encaja / ya contactada | 17/06/2026 | URL |

### 5. Pestaña: Consultas

Aquí guardas búsquedas tipo para que Workspace Studio tenga un marco de trabajo.

```text
"transporte Córdoba" "oferta de empleo"
"empresa de limpieza Córdoba" "seleccionamos personal"
"hostelería Córdoba" "amplía plantilla"
"empresa Córdoba" "ha recibido financiación"
"empresa Córdoba" "subvención"
"empresa Córdoba" "nuevo gerente"
"empresa Córdoba" "nombramiento gerente"
"empresa Córdoba" "abre nueva sede"
"empresa Córdoba" "adjudicación"
"empresa Córdoba" "crecimiento plantilla"
```

Puedes tener bloques por sector:

```text
Sector: transporte
"transporte Córdoba" "conductor"
"transporte Córdoba" "seleccionamos"
"empresa transporte Córdoba" "amplía plantilla"
"logística Córdoba" "oferta de empleo"
```

```text
Sector: hostelería
"restaurante Córdoba" "buscamos camarero"
"hostelería Córdoba" "seleccionamos personal"
"grupo hostelero Córdoba" "nueva apertura"
"restaurante Córdoba" "reseñas personal"
```

## 📝 Los prompts que usamos

Los tres prompts también están sueltos en
[`archivos/prompt-prospeccion-diaria.md`](archivos/prompt-prospeccion-diaria.md).

### 1) Prompt principal (búsqueda diaria)

```text
Cada día laborable a las 8:30 AM, lee la Google Sheet llamada "CRM Prospección Loke", pestaña "Configuración".

Usa la configuración activa para identificar:
- localidad objetivo
- provincia
- sector objetivo
- número de leads necesarios
- señales de compra prioritarias
- servicio Loke preferente

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
- motivo por el que esta empresa puede encajar con Loke Trabajo Social y Talento
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

### 2) Prompt para analizar Google Alerts

Una segunda automatización más sencilla, que reacciona a los correos de Google
Alerts.

```text
Cuando reciba un correo de Google Alerts, analiza el contenido del correo.

Identifica empresas ubicadas en Córdoba o la provincia de Córdoba que coincidan con el sector activo en la Google Sheet "CRM Prospección Loke", pestaña "Configuración".

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
- motivo por el que puede encajar con Loke
- canal de primer contacto recomendado
- mensaje breve sugerido para LinkedIn, en español

No inventes datos que falten.
Si no hay URL de fuente, descarta el lead.
Antes de añadir la empresa, comprueba que no aparezca ya en "Leads diarios" ni en "Descartados".
Añade los leads válidos a "Leads diarios".
```

### 3) Prompt para generar el mensaje comercial

Cuando el lead ya está en Sheets, este prompt redacta el mensaje a partir de los
datos de la fila.

```text
Con los datos del lead de la fila actual, escribe un mensaje breve de conexión de LinkedIn en español.

Reglas:
- Máximo 200 caracteres.
- Tono natural y profesional.
- No vendas directamente.
- Menciona la empresa o la señal solo si resulta natural.
- Posiciona a Fran como alguien que ayuda a las PYMEs a mejorar la gestión de personas, el clima laboral y los conflictos internos.
- Evita el lenguaje de venta agresiva.
```

Ejemplo de salida:

```text
Hola, [Nombre]. He visto la evolución de [Empresa] en Córdoba. Trabajo ayudando a PYMEs a mejorar clima, liderazgo y gestión de personas. Me encantará seguir vuestra actividad.
```

## 🚀 El resultado

Cada día tendrás en Google Sheets una fila limpia por lead, algo así:

| Empresa | Sector | Localidad | Señal | Fuente | Decisor | Score | Canal |
|---|---|---|---|---|---|---:|---|
| Transportes X | Transporte | Córdoba | Busca conductores | URL | Gerente | 82 | LinkedIn |
| Limpiezas Y | Limpieza | Lucena | Nueva adjudicación | URL | Administrador | 78 | Llamada |
| Restaurante Z | Hostelería | Córdoba | Nueva apertura | URL | Propietario | 74 | LinkedIn |

Y recibirías un resumen diario:

```text
Hoy se han detectado 3 leads potenciales:

1. Transportes X
Señal: está seleccionando conductores.
Motivo Loke: crecimiento de plantilla y posible necesidad de ordenar onboarding, clima y coordinación.
Canal recomendado: LinkedIn + llamada.

2. Limpiezas Y
Señal: nueva adjudicación de servicio.
Motivo Loke: aumento de carga operativa y posible necesidad de coordinación de equipos.

3. Restaurante Z
Señal: nueva apertura.
Motivo Loke: incorporación de personal, liderazgo operativo y prevención de rotación.
```

## 🔁 Hazlo tuyo

### Adaptación 1: por sector semanal

La más recomendable. Cada semana eliges un sector, lo que te permite hablar su
lenguaje y preparar mensajes más concretos.

| Semana | Sector |
|---|---|
| Semana 1 | Transporte |
| Semana 2 | Limpieza |
| Semana 3 | Hostelería |
| Semana 4 | Comercio |
| Semana 5 | Residencias / ayuda a domicilio |
| Semana 6 | Clínicas privadas |
| Semana 7 | Logística |
| Semana 8 | Formación / academias |

### Adaptación 2: por señal de compra

En vez de trabajar por sector, trabajas por señal. Útil para detectar empresas
"calientes" aunque estén en sectores distintos.

| Día | Señal prioritaria |
|---|---|
| Lunes | Empresas contratando |
| Martes | Empresas con reseñas negativas |
| Miércoles | Empresas que han recibido subvenciones |
| Jueves | Empresas con nueva apertura |
| Viernes | Empresas con cambio directivo |

### Adaptación 3: por servicio de Loke

Buscas leads según el servicio que quieras vender.

| Servicio Loke | Señales a buscar |
|---|---|
| Radar Loke | crecimiento, desorden, reseñas, rotación |
| Loke 360 | empresas 10-40 trabajadores sin RRHH |
| Protocolos de acoso | empresas +50, plan igualdad, obligación normativa |
| Conflictos internos | reseñas negativas, quejas de trato, mala coordinación |
| Loke Care | sectores con estrés, turnos, absentismo, atención al público |

## 🧭 Todas las formas posibles

### Opción 1: Google Alerts + Workspace Studio + Sheets

**Para empezar, es la mejor.** Gratuita o casi gratuita, fácil de montar, con
señales reales y menos riesgo de datos basura; ideal para noticias, contratación,
subvenciones y expansión. Inconveniente: depende de que Google Alerts encuentre
resultados. **Valoración: 9/10 para empezar.**

### Opción 2: Workspace Studio con búsqueda web diaria

Muy buena como complemento: funciona aunque no lleguen alertas, puedes pedirle 3
leads diarios directamente y se adapta al sector activo en Sheets. Inconveniente:
hay que controlar que no invente información y exige URLs de evidencia.
**Valoración: 8/10.**

### Opción 3: Google Maps manual + Workspace Studio para enriquecer

Tú metes empresas en bruto y Workspace Studio busca señales. Más control y mejor
calidad, ideal para Córdoba, y evita perder tiempo buscando decisores uno a uno.
Inconveniente: requiere una carga manual semanal. **Valoración: 8,5/10.**

### Opción 4: Places API + Apps Script + Workspace Studio

La versión profesional: escalable, ordenada, automatizable y buena para generar
bases por localidad y sector. Inconveniente: más técnica, con posible coste y
configuración de API. **Valoración: 9/10 a medio plazo, 6/10 para empezar.**

### Opción 5: Apollo / Clay / Make / Sales Navigator

Potente, pero no empezaría por aquí. Encuentra mejor a los decisores y enriquece
datos, más orientado a ventas B2B. Inconveniente: coste, complejidad, riesgo de
dispersarte y no siempre encaja con la prospección local artesanal.
**Valoración: 7/10 ahora, 9/10 cuando escales.**

## ✅ Mi recomendación final

Para Loke, el camino sería este:

### Fase 1 — Esta semana

- Google Sheet **CRM Prospección Loke**;
- Google Alerts por sector;
- flujo de Workspace Studio para leer alertas y guardar leads;
- mensaje diario resumen.

### Fase 2 — Semana siguiente

- flujo diario proactivo cada día a las 08:30;
- lee el sector activo, busca empresas y selecciona 3 leads;
- guarda en Sheets.

### Fase 3 — Cuando ya funcione

- score automático;
- estado de seguimiento;
- mensajes adaptados;
- dashboard semanal;
- Apps Script para evitar duplicados y mejorar el control.

## 📋 Checklist antes de ponerlo en marcha

- [ ] Crear Google Sheet con pestañas: Configuración, Leads diarios, Descartados, Consultas y Seguimiento.
- [ ] Definir el primer sector semanal.
- [ ] Crear 8-10 Google Alerts.
- [ ] Crear flujo en Workspace Studio para analizar emails de Google Alerts.
- [ ] Crear flujo diario de búsqueda proactiva.
- [ ] Exigir siempre URL de evidencia.
- [ ] No aceptar leads sin señal concreta.
- [ ] Revisar manualmente los 3 leads antes de contactar.
- [ ] Usar LinkedIn como primer canal preferente.
- [ ] Evitar emails comerciales fríos salvo que exista base jurídica y prudencia comunicativa.

## 📌 Versión resumida

La mejor arquitectura para este caso:

```text
Google Sheets    = panel de control
Google Alerts    = detector de señales
Workspace Studio = investigador y clasificador
Gemini           = análisis y redacción
Fran             = revisión final y contacto humano
```

Y el objetivo diario no es "buscar empresas", sino:

```text
Detectar 3 empresas con una razón concreta para hablar con Loke.
```

Ahí está la diferencia entre prospectar por volumen y prospectar con criterio.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/sistema-prospeccion-diaria-en-workspace/
