# NexoVenta Web V2.2

**Versión:** 2.2  
**Fecha:** 08/10/2026  
**Nombre:** Posicionamiento SEO comercial  
**Publicación:** pendiente de desplegar y verificar en Cloudflare Pages.

## Objetivo de V2.2

Mejorar la visibilidad orgánica de NexoVenta ante comerciantes de Argentina que buscan software de ventas, control de stock, gestión comercial y facturación electrónica. La indexación y el posicionamiento dependen de los buscadores y no están garantizados.

## Novedades V2.2 (respecto de V2.1)

- Nueva página `software-gestion-comercios.html`, dedicada a búsquedas de gestión comercial, ventas y stock.
- Nueva página `facturacion-electronica-arca.html`, dedicada a búsquedas relacionadas con facturación electrónica y ARCA.
- Se mejoró el encabezado comercial de `index.html` y se incorporaron enlaces internos a ambas páginas.
- Se amplió `sitemap.xml` de cinco a siete URL públicas, incluyendo ambas páginas nuevas.
- Se mantuvieron los datos estructurados y metadatos SEO de la versión de base, con facturación electrónica de PC presentada como disponible según lo informado por el titular.

## Funciones conservadas

- Página principal y oferta de Android, PC y PC Fiscal.
- Enlaces a WhatsApp y navegación del sitio.
- Formularios de baja de servicio y arrepentimiento y su integración existente con la Edge Function `crear-solicitud` de Supabase.
- Documentos de términos y privacidad.
- Recursos gráficos, estilos y archivos JS preexistentes.

**No se modificaron** `script.js`, `solicitud.js` ni la configuración de Supabase. No se anuncia sincronización Android–PC como función implementada ni habilitación fiscal automática del cliente.

## Historial resumido

### V2.1 — Facturación electrónica y SEO técnico
- Se pasó a presentar la facturación electrónica integrada con ARCA de NexoVenta PC Fiscal como disponible, según la confirmación del titular.
- Se incorporaron `sitemap.xml` y `robots.txt`, metadatos SEO, etiquetas sociales y datos estructurados para buscadores.
- Se verificó `nexoventa.com.ar` en Google Search Console y se comprobó que su página principal estaba indexada. La aceptación del sitemap por Search Console seguía pendiente.

### V2.0 — Web comercial previa
- Base del diseño y de la oferta comercial anterior a las optimizaciones SEO.

### V1.5 — Inicio y contacto
- Sección «Cómo empezar» en tres pasos.
- Botón «Quiero NexoVenta» con enlace a WhatsApp y mensaje predefinido.

### V1.4 — Trámites y legales
- Formularios de baja y arrepentimiento vinculados a Supabase, con generación de número de solicitud.
- Páginas `terminos.html` y `privacidad.html`.

## Publicación de V2.2 en Cloudflare Pages

1. Conservar una copia de seguridad de la V2.1 publicada.
2. Subir el contenido de este paquete manteniendo los archivos en la raíz del sitio y `assets/` como subcarpeta.
3. Comprobar `https://nexoventa.com.ar/`, las dos páginas nuevas, `https://nexoventa.com.ar/sitemap.xml` y `https://nexoventa.com.ar/robots.txt`.
4. Probar navegación, WhatsApp y formularios de solicitud en la web publicada, sin generar solicitudes reales innecesarias.
5. Revisar el sitemap desde Google Search Console una vez disponible; puede tardar en procesarse. No solicitar indexación del archivo XML como página.

## Pendientes

- Completar los datos identificatorios aún pendientes en documentos legales antes de la comercialización definitiva.
- Confirmar operatividad fiscal en producción para cada cliente y vigencia de los precios anunciados.
- Medir impresiones, consultas, clics y contactos desde Search Console, una vez que haya datos.
- El registro de la marca NexoVenta ante INPI está pausado y pendiente de revisión de antecedentes.

## Seguridad

El frontend debe usar únicamente credenciales publicables de Supabase. Nunca incluir `service_role` ni secretos privados en los archivos web.
