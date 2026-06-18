# Prompt para programar la rutina en Claude Code

Pega esto en Claude Code para que cree y programe la rutina de extracción
de precios. Reemplaza lo que está entre corchetes.

```text
Quiero automatizar la actualización de precios de mi proveedor.

Contexto:
- Mi proveedor publica su lista de precios en: [URL o ubicación del archivo].
- Cada semana cambian algunos precios y necesito reflejarlos en mi CRM.
- Mi CRM es cerrado: no se puede conectar por API ni integraciones.

Quiero que:
1. Crees una rutina que lea la lista del proveedor.
2. Compare con la última versión guardada y detecte SOLO los precios que cambiaron.
3. Genere un Excel limpio y ordenado con estas columnas:
   SKU, Producto, Precio anterior, Precio nuevo, Variación %.
4. Programes la rutina para que se ejecute en segundo plano
   todos los lunes a las 9:00 AM.

Usa lenguaje claro y avísame si necesitas algún dato extra.
```

## Para cargar el Excel en el CRM con Claude CoWork

Una vez generado el Excel, abre tu CRM en Chrome y dale esta instrucción a la
extensión de **Claude CoWork**:

```text
Toma los datos del archivo plantilla_precios.xlsx y cárgalos en este CRM.
Por cada fila:
1. Busca el producto por su SKU.
2. Abre su ficha y actualiza el campo "Precio" con el "Precio nuevo".
3. Guarda y pasa al siguiente.
Avísame si un SKU no existe en el CRM en lugar de inventarlo.
```
