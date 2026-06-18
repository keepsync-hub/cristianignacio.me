# 🎯 Prospección diaria de leads locales con Workspace Studio

> **Categoría:** Automatización comercial · **Dificultad:** Intermedio · **Tiempo:** 60-90 min

Encuentra de forma automática cada día **3 empresas** de tu localidad y sector que
muestren señales reales de crecimiento o necesidad para ofrecer tus servicios en el
momento perfecto.

> Necesitas Google Workspace con **Workspace Studio**, **Google Sheets** y
> **Gmail / Google Chat**. Sin código.

---

## 🧩 El problema

Quieres buscar clientes locales de manera constante, pero pasar una o dos horas al
día saltando entre Google, LinkedIn, Google Maps y portales de empleo es agotador.
Además, el verdadero reto no es solo listar empresas, sino saber cuáles de ellas
tienen **una necesidad real hoy** (porque están contratando, abriendo sedes,
cambiando de directiva o sufriendo desorganización interna) para no contactar a
puerta fría y sin argumentos.

## 💡 La idea

Crear un sistema automático donde usas una hoja de Google Sheets como centro de
control para elegir el sector y la ciudad, y dejas que **Workspace Studio** actúe
como tu investigador privado buscando en la web y seleccionando cada mañana los
**3 mejores leads** con evidencias reales.

## 🛠️ La construcción, paso a paso

1. **Crea el panel en Google Sheets.** Diseña un libro llamado **CRM Prospección
   Loke** con cinco pestañas clave: Configuración (donde pones el sector y ciudad
   de la semana), Leads diarios (la base de datos principal), Descartados (para no
   repetir empresas), Consultas (con frases de búsqueda tipo) y Seguimiento.
2. **Conecta Workspace Studio.** Configura una automatización proactiva web que se
   ejecute de forma diaria en la herramienta.
3. **Establece la regla de oro.** Configura el sistema para que solo acepte un lead
   si Workspace Studio encuentra y adjunta una URL que sirva como evidencia real de
   la oportunidad (un enlace a una oferta de empleo, una noticia, una reseña, etc.).
4. **Diseña la alerta de salida.** Activa un paso final para que, además de rellenar
   el Sheets, el sistema te envíe un resumen rápido de los 3 elegidos por Gmail o
   Google Chat para ponerte a trabajar de inmediato.

### Pestaña Configuración

Aquí decides qué se busca esa semana; solo cambias el sector o la ciudad sin tocar
la automatización.

| Campo | Ejemplo |
|---|---|
| Localidad / Provincia | Córdoba |
| Sector objetivo | Transporte |
| Nº de leads requeridos | 3 |
| Señales prioritarias | contratación, expansión, financiación, cambio de directiva, reseñas negativas |
| Servicio preferente | Gestión de personas |
| Estado | Activo |

### Pestaña Leads diarios

La tabla principal. Estas son las columnas que de verdad importan:

| Campo | Descripción |
|---|---|
| Empresa / Sector / Localidad | Identificación básica |
| Web · Google Maps · LinkedIn | URLs de la empresa |
| Señal de compra | Qué ha pasado y por qué es una oportunidad |
| Evidencia (URL) | Enlace que demuestra la señal — obligatorio |
| Decisor / Cargo | Persona de contacto si es pública |
| Lead score (0-100) | Prioridad calculada por el sistema |
| Mensaje sugerido | Primer mensaje de LinkedIn, <200 caracteres |

> Regla de oro: **si no hay URL de evidencia, no entra el lead**. Las pestañas
> **Leads diarios** y **Descartados** evitan que una misma empresa vuelva a
> aparecer.

## 📝 El prompt / los archivos que usamos

Para que el sistema funcione de forma proactiva cada mañana, se utiliza el siguiente
prompt base en Workspace Studio. También está en
[`archivos/prompt-prospeccion-diaria.md`](archivos/prompt-prospeccion-diaria.md)
(puedes guardar tus plantillas de mensajes y guías de búsqueda en la carpeta
`archivos/`).

```text
Cada día laborable a las 8:30, lee la Google Sheet llamada "CRM Prospección Loke", pestaña "Configuración".

Usa la configuración activa para identificar la localidad objetivo, la provincia, el sector, el número de leads requeridos, las señales de compra prioritarias y el servicio preferente.

Busca en la web empresas ubicadas en la zona y el sector seleccionados que muestren al menos una señal de compra reciente y verificable (contratación, expansión, financiación, cambios en la dirección o estrés organizativo/reseñas negativas).

Para cada empresa candidata, extrae: nombre de la empresa, sector, localidad, web, URLs de Google Maps/LinkedIn, decisor probable, cargo, datos de contacto públicos, señal de compra, URL de evidencia, lead score (0-100) y un primer mensaje sugerido para LinkedIn en español.

Reglas:
- No inventes datos. Si no lo encuentras, escribe "No localizado".
- No añadas un lead si no hay URL de evidencia.
- Revisa "Leads diarios" y "Descartados" para evitar duplicados.
- Añade solo los 3 mejores leads a "Leads diarios" y envíame un resumen por Gmail/Google Chat.
```

## 🚀 El resultado

Cada mañana a las 8:30 AM tendrás tu hoja de Google Sheets actualizada con 3
empresas "calientes", sus datos de contacto públicos, el nombre del posible
directivo, un enlace que demuestra por qué es una oportunidad y una propuesta de
mensaje corto de menos de 200 caracteres listo para copiar y pegar en LinkedIn.
También recibirás una notificación limpia en tu bandeja de entrada con el resumen
del día.

| Empresa | Sector | Localidad | Señal | Evidencia | Decisor | Score |
|---|---|---|---|---|---|---|
| Transportes X | Transporte | Córdoba | Busca conductores | URL | Gerente | 87 |
| Limpiezas Y | Limpieza | Lucena | Nueva adjudicación | URL | Administrador | 74 |

Con un mensaje inicial sugerido ya redactado, por ejemplo:

```text
Hola, [Nombre]. He visto que [Empresa] está creciendo en Córdoba. Ayudo a PYMEs a mejorar clima, liderazgo y gestión de personas. ¿Te viene bien charlar?
```

## 🔄 Hazlo tuyo

- **Por sector semanal:** cambia la pestaña de configuración cada lunes (ej.:
  Semana 1: Transporte, Semana 2: Hostelería) para enfocar tus tiros y especializar
  tu discurso.
- **Por señales de compra:** configura el sistema para buscar señales específicas
  según tus días de enfoque (ej.: los lunes empresas contratando, los miércoles
  empresas con reseñas negativas).
- **Por servicio específico:** filtra la búsqueda según el servicio que quieras
  empujar esa semana, adaptando las señales automáticas a las necesidades que cubre
  ese servicio de tu catálogo.

## ⚠️ Uso responsable

Trabaja solo con información pública y profesional y con un fin legítimo de
contacto de negocio. Revisa siempre la URL de evidencia antes de contactar y
trata los datos de las personas conforme a la normativa aplicable.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/sistema-prospeccion-diaria-en-workspace/
