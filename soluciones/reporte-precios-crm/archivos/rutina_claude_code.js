/**
 * Rutina automatizada de extracción de precios — Claude desde Cero
 * ----------------------------------------------------------------
 * Esta rutina la ejecuta Claude Code en segundo plano de forma
 * programada (por ejemplo, todos los lunes a las 9:00 AM). Su trabajo
 * es revisar la lista de precios del proveedor, detectar los cambios
 * y dejar un Excel limpio y ordenado, listo para que Claude CoWork lo
 * cargue en la interfaz del CRM.
 *
 * No necesitas saber programar para usarla: ajusta solo las variables
 * marcadas con  // 👈 CAMBIA ESTO  y pídele a Claude Code que la
 * programe por ti.
 */

// 1) De dónde sacamos los precios del proveedor.
const ORIGEN_PRECIOS = "https://tu-proveedor.com/lista-de-precios"; // 👈 CAMBIA ESTO

// 2) Dónde dejamos el Excel limpio que usará Claude CoWork.
const ARCHIVO_SALIDA = "./plantilla_precios.xlsx"; // 👈 CAMBIA ESTO

// 3) Columnas que el CRM necesita, en este orden exacto.
const COLUMNAS = ["SKU", "Producto", "Precio anterior", "Precio nuevo", "Variación %"]; // 👈 CAMBIA ESTO

/**
 * Paso a paso de la rutina (Claude Code completa cada función).
 */
async function generarReportePrecios() {
  // a. Descargar la lista actual del proveedor.
  const preciosNuevos = await leerPreciosDelProveedor(ORIGEN_PRECIOS);

  // b. Comparar con la última lista guardada para detectar cambios.
  const preciosAnteriores = await leerUltimaLista(ARCHIVO_SALIDA);
  const cambios = compararPrecios(preciosAnteriores, preciosNuevos);

  // c. Armar un Excel limpio y ordenado solo con lo que cambió.
  await escribirExcel(ARCHIVO_SALIDA, COLUMNAS, cambios);

  console.log(`✅ Reporte listo: ${cambios.length} precios actualizados en ${ARCHIVO_SALIDA}`);
}

// Claude Code implementa estas funciones según tu proveedor.
async function leerPreciosDelProveedor(origen) { /* ... */ }
async function leerUltimaLista(archivo) { /* ... */ }
function compararPrecios(anteriores, nuevos) { /* ... */ }
async function escribirExcel(archivo, columnas, filas) { /* ... */ }

generarReportePrecios();
