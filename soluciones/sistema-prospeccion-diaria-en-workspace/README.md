# 🎯 Prospección diaria de leads locales con Google Alerts

> **Categoría:** Prospección de clientes · **Dificultad:** Intermedio · **Tiempo:** 30-45 min

Un sistema sencillo: **Google Alerts** detecta las señales de compra y **Workspace
Studio** las convierte cada día en leads locales cualificados dentro de tu Google
Sheets.

> Necesitas Google Workspace con **Workspace Studio**, **Google Sheets**,
> **Gmail/Google Alerts** y **Gemini**. Sin código.

---

## 🧩 El problema

Quieres prospectar empresas locales de forma constante, pero sin pasar cada día
una o dos horas buscando a mano en Google, LinkedIn o portales de empleo. Y lo
difícil no es encontrar empresas, sino encontrar las que tienen **una señal real
de oportunidad**: que están contratando, creciendo, han cambiado de gerente, han
recibido una subvención, abren nueva sede o tienen reseñas negativas de
organización o trato.

## 💡 La idea

Montar un sistema reactivo con tres piezas:

- **Google Alerts** como detector de señales: te avisa por correo cuando aparece
  una novedad de tu sector y localidad.
- **Workspace Studio** como investigador: lee ese correo, valida la señal,
  localiza datos públicos y prepara el lead.
- **Google Sheets** como centro de control: guarda cada lead con su evidencia y
  un primer mensaje listo para contactar.

## 🛠️ La construcción, paso a paso

1. **Crea la hoja en Google Sheets.** Llámala **CRM Prospección** con tres
   pestañas: Configuración, Leads diarios y Descartados.
2. **Configura tus Google Alerts.** Combina localidad + sector + una palabra
   clave de señal. Cada novedad que Google indexe llega directa a tu Gmail.
3. **Crea el flujo en Workspace Studio.** Al llegar un correo de Google Alerts,
   analiza el contenido, valida que haya una señal con URL de evidencia y guarda
   el lead en "Leads diarios".

### Pestaña Configuración

Aquí decides qué se busca esa semana; solo cambias el sector o la localidad sin
tocar el flujo.

| Campo | Ejemplo |
|---|---|
| Localidad / Provincia | Córdoba |
| Sector objetivo | Transporte |
| Tamaño ideal | 10-40 trabajadores |
| Señales prioritarias | contratación, expansión, cambio de gerente, reseñas negativas |
| Estado | Activo |

### Pestaña Leads diarios

La tabla principal. Estas son las columnas que de verdad importan:

| Campo | Descripción |
|---|---|
| Empresa / Sector / Localidad | Identificación básica |
| Señal de compra / Tipo | Qué ha pasado y de qué tipo |
| Fuente (URL) | Evidencia pública — obligatoria |
| Decisor / Cargo | Persona de contacto si es pública |
| Canal recomendado | LinkedIn, llamada, email, visita |
| Mensaje sugerido | Borrador inicial de contacto |
| Estado | Nuevo, contactado, descartado |

> Regla importante: **si no hay URL de evidencia, no entra el lead**. La pestaña
> **Descartados** guarda las empresas que ya rechazaste para que no vuelvan a
> aparecer.

### Ejemplos de Google Alerts

```text
"empresa Córdoba" "nuevo gerente"
"transporte Córdoba" "oferta de empleo"
"empresa de limpieza Córdoba" "seleccionamos personal"
"hostelería Córdoba" "amplía plantilla"
"empresa Córdoba" "subvención"
"empresa Córdoba" "abre nueva sede"
"empresa Córdoba" "adjudicación"
```

## 📝 El prompt que usamos

Este es el prompt del flujo de Workspace Studio que reacciona a cada correo de
Google Alerts. También está en
[`archivos/prompt-prospeccion-diaria.md`](archivos/prompt-prospeccion-diaria.md).
Sustituye lo que está entre corchetes por los datos de tu negocio.

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

## 🚀 El resultado

Cada vez que salta una alerta relevante, tendrás en Google Sheets una fila limpia,
lista para contactar:

| Empresa | Sector | Localidad | Señal | Fuente | Decisor | Canal |
|---|---|---|---|---|---|---|
| Transportes X | Transporte | Córdoba | Busca conductores | URL | Gerente | LinkedIn |
| Limpiezas Y | Limpieza | Lucena | Nueva adjudicación | URL | Administrador | Llamada |

Con un mensaje inicial sugerido ya redactado, por ejemplo:

```text
Hola, [Nombre]. He visto la evolución de [Empresa] en Córdoba. Trabajo ayudando a PYMEs a mejorar clima, liderazgo y gestión de personas. Me encantará seguir vuestra actividad.
```

## 🔁 Hazlo tuyo

- **Por sector semanal:** rota el sector cada lunes (transporte, limpieza,
  hostelería…) para hablar el lenguaje de cada uno.
- **Por señal:** crea alertas centradas en una señal concreta (subvenciones,
  cambios directivos, nuevas aperturas) para detectar empresas "calientes".
- **Por servicio:** ajusta las palabras clave según el servicio que quieras
  vender y sus señales asociadas.

## ⚠️ Uso responsable

Trabaja solo con información pública y profesional y con un fin legítimo de
contacto de negocio. Revisa siempre la URL de evidencia antes de contactar y
trata los datos de las personas conforme a la normativa aplicable.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/sistema-prospeccion-diaria-en-workspace/
