# 📈 Reporte automático de precios para carga en CRM

> **Categoría:** Automatización de procesos · **Dificultad:** Intermedio · **Tiempo:** 45 min

Genera un Excel limpio con las actualizaciones de precios de tu proveedor
mediante una rutina de Claude Code y automatiza su carga en la interfaz de tu
CRM usando la extensión de navegador Claude CoWork.

---

## 🧩 El problema

Tu proveedor actualiza sus precios constantemente y necesitas reflejar esos
cambios en tu CRM para cotizar correctamente. El problema es que tu CRM es
cerrado y no permite conectar herramientas externas ni Inteligencia Artificial
para que se actualice solo. Hacer el seguimiento, buscar los cambios y armar el
archivo a mano todas las semanas te quita tiempo valioso y abre la puerta a
errores de digitación.

## 💡 La idea

Crear un flujo automatizado mediante una rutina de Claude Code que se ejecute en
segundo plano de forma programada para extraer los precios actualizados a un
Excel limpio. Después, usar Claude CoWork a través de su extensión de Google
Chrome para automatizar la carga de esos datos directamente desde la interfaz de
usuario del CRM, superando la limitación de un sistema cerrado.

## 🛠️ La construcción, paso a paso

1. **Configura la rutina de Claude Code** en segundo plano para que revise las
   actualizaciones del proveedor de forma programada.
2. **Programa la extracción** y genera un archivo de Excel limpio y ordenado
   todos los lunes exactamente a las 9:00 AM.
3. **Instala la extensión de Google Chrome de Claude CoWork** en el navegador.
4. **Configura Claude CoWork** para que tome los datos del Excel generado y
   automatice de forma secuencial la carga rellenando los campos en la interfaz
   del CRM.

## 📝 El prompt / los archivos que usamos

- Rutina de extracción: [`archivos/rutina_claude_code.js`](archivos/rutina_claude_code.js)
- Prompts listos para copiar: [`archivos/prompt-rutina-claude-code.md`](archivos/prompt-rutina-claude-code.md)
- Ejemplo de Excel limpio: [`archivos/plantilla_precios.csv`](archivos/plantilla_precios.csv)

> El Excel final (`plantilla_precios.xlsx`) lo genera la propia rutina; el CSV
> de ejemplo muestra las mismas columnas para que veas cómo queda.

## 🚀 El resultado

Un reporte de precios exacto y puntual listo cada lunes, junto con una carga de
datos al CRM completamente manos libres que elimina los errores humanos de
digitación y evita el trabajo manual aburrido.

## 🔁 Hazlo tuyo

- Adapta la rutina de Claude Code para que extraiga datos de múltiples
  proveedores simultáneamente.
- Modifica la frecuencia de ejecución (por ejemplo, diaria en lugar de semanal)
  si tu mercado requiere actualizaciones en tiempo real.

## 🎓 Cursos recomendados

Para implementar esta solución te conviene dominar antes:

- [Claude Code](https://cristianignacio.me/cursos/17-claude-code/) — para crear y programar la rutina que extrae los precios en segundo plano.
- [Claude Cowork](https://cristianignacio.me/cursos/04-claude-cowork/) — para usar la extensión de navegador que carga los datos en la interfaz del CRM.
- [Excel con Claude Cowork](https://cristianignacio.me/cursos/15-excel-con-claude-cowork/) — para generar el archivo de Excel limpio y ordenado del reporte.

---

📄 **Versión web:** https://cristianignacio.me/soluciones/reporte-precios-crm/
