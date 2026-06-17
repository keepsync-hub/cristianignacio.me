# 💼 Sistema de prospección diaria en Workspace

> **Categoría:** Prospección de clientes · **Dificultad:** Intermedio · **Tiempo:** 45 min

Consigue de forma automática 3 leads diarios cualificados, con señales reales de
compra, directos en tu Google Sheets usando Google Workspace Studio.

> Necesitas Google Workspace con **Workspace Studio**, **Google Sheets**,
> **Gmail/Google Alerts** y **Gemini** activados. Sin código.

---

## 🧩 El problema

Buscar clientes puerta a puerta o mandando mensajes en frío a ciegas es agotador
y no funciona. Pierdes horas navegando por internet intentando averiguar qué
empresas locales necesitan realmente tu ayuda, si tienen presupuesto o si están
contratando en este momento. Al final terminas con una base de datos llena de
información obsoleta, nombres inventados y correos genéricos del tipo
*info@empresa.com*.

## 💡 La idea

Creamos un sistema semi-automático en Google Workspace Studio que actúa como tu
investigador privado. El sistema lee qué sector quieres buscar esta semana,
rastrea internet (o tus alertas de Google) buscando empresas locales con
"señales de compra" reales —como que estén contratando o cambiando de gerente— y
te guarda los 3 mejores candidatos del día en un Google Sheets, cada uno con su
URL de evidencia para que puedas revisarlos.

## 🛠️ La construcción, paso a paso

1. **Crea la estructura base en Google Sheets.** Un libro llamado
   **"CRM Prospección Loke"** con cuatro pestañas:
   - **Configuración:** localidad, sector objetivo de la semana y señales de
     compra prioritarias.
   - **Leads diarios:** la tabla principal, con la URL fuente que demuestra cada
     señal.
   - **Descartados:** empresas que no te interesan, para que la IA no vuelva a
     sugerirlas.
   - **Consultas:** las cadenas de búsqueda que usará el sistema.
2. **Configura las fuentes de señales con Google Alerts.** Combina localidad,
   sector y palabras clave de compra (por ejemplo,
   *"transporte Córdoba" "amplía plantilla"*). Cada novedad que Google indexe
   llega directa a tu Gmail.
3. **Arma el flujo automatizado en Workspace Studio.** Lánzalo cuando llegue un
   correo de Google Alerts o cada mañana a las 08:30. El flujo lee tu
   configuración, pide a Gemini que investigue en la web, filtra duplicados y
   guarda solo los 3 leads con mayor puntuación del día.

## 📝 El prompt que usamos

El prompt completo está en
[`archivos/prompt-prospeccion-diaria.md`](archivos/prompt-prospeccion-diaria.md).
El flujo funciona en cualquier idioma; aquí lo tienes en español, listo para
pegar en Workspace Studio.

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

## 🚀 El resultado

Cada mañana empiezas la jornada con una notificación en Google Chat (o un correo
de Gmail) que resume los 3 mejores leads locales que están pasando por un momento
de cambio idóneo para ofrecerles tus servicios. Al abrir tu **Google Sheets**
tienes una fila limpia con el nombre del decisor, su LinkedIn, el motivo exacto
por el que encaja con tu negocio y un borrador de mensaje listo para copiar,
pegar y abrir conversación de forma natural.

## ⚠️ Uso responsable

Trabaja solo con información **pública y profesional** y con un fin legítimo de
contacto de negocio. La regla de "no añadas un lead sin URL de evidencia"
mantiene tu CRM limpio y verificable: revisa siempre esa fuente antes de
contactar. Trata los datos de las personas con respeto y conforme a la normativa
aplicable.

## 🔁 Hazlo tuyo

- **Enfoque de nicho semanal:** rota de sector cada lunes desde la pestaña de
  configuración (Semana 1: Transporte, Semana 2: Hostelería, Semana 3: Limpieza)
  para no saturar tu mercado local.
- **Escalado técnico con Apps Script:** sustituye la búsqueda web de Gemini por
  un script conectado a la API oficial de Google Places para extraer masivamente
  las fichas de Google Maps de tu región.
- **Filtro de enriquecimiento manual:** si prefieres precisión sobre
  automatización, rellena tú mismo 20 empresas los lunes desde directorios
  locales y usa Workspace Studio solo para "enriquecer" los datos (nombres de los
  decisores y sus noticias recientes).

---

📄 **Versión web:** https://cristianignacio.me/soluciones/sistema-prospeccion-diaria-en-workspace/
