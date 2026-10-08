# NexoVenta Web — V2.1

**Versión:** 2.1  
**Actualización:** 8 de octubre de 2026  
**Nombre:** Facturación y posicionamiento SEO

Sitio oficial: https://nexoventa.com.ar/

## Novedades de V2.1

### Facturación electrónica
- La versión **NexoVenta PC Fiscal** se presenta como una opción comercial con facturación electrónica integrada con **ARCA**, de acuerdo con la confirmación de lanzamiento del titular.
- Se actualizaron la presentación de la versión PC, el plan Fiscal y las preguntas frecuentes para retirar las menciones de «facturación en desarrollo».
- Se incorporó la facturación a los títulos, descripciones y metadatos comerciales del sitio.
- Precio anunciado en el paquete web: **$34.990 ARS/mes** para PC Fiscal. Confirmar vigencia antes de publicar.
- No se anuncia sincronización Android–PC ni se prometen tipos de comprobantes que aún no hayan sido confirmados.

### SEO e indexación
- Se incorpora `sitemap.xml` con cinco URLs públicas del sitio.
- Se incorpora `robots.txt` para facilitar el rastreo y declarar la ubicación del sitemap.
- Se incorporan etiquetas `canonical` y `meta robots` a las cinco páginas.
- Se optimizan el título y la descripción de la página principal.
- Se incorporan metadatos Open Graph para compartir enlaces.
- Se incorporan datos estructurados JSON-LD para `Organization`, `WebSite` y `SoftwareApplication`, incluyendo NexoVenta Android y PC Fiscal.
- Se mantienen descripciones consistentes con las funciones anunciadas como disponibles.

## Funciones conservadas
- Formularios de **Baja de servicio** y **Arrepentimiento**.
- Integración de los formularios con Supabase y la función `crear-solicitud`.
- Visualización de números de solicitud.
- Páginas de Términos y Condiciones y Política de Privacidad.
- Enlaces y botones de contacto por WhatsApp.
- No se modifica la lógica de `script.js` ni de `solicitud.js`.
- No se incluyen claves de administración o de servicio en el frontend; solo credenciales publicables donde corresponda.

## Historial de versiones

### V2.1 — Facturación y SEO
- Publicidad del módulo PC Fiscal con ARCA como disponible, sujeto a validación operativa antes de su publicación comercial.
- SEO técnico y metadatos estructurados.
- Nuevos archivos `sitemap.xml` y `robots.txt`.

### V2.0 — Base anterior
- Versión tomada como base para la presente actualización.

### V1.5
- Sección «Cómo empezar» en tres pasos.
- Botón «Quiero NexoVenta» hacia WhatsApp con mensaje predefinido.
- Sin cambios funcionales en Baja, Arrepentimiento y páginas legales.

### V1.4
- Botones de Baja de Servicio y Arrepentimiento visibles desde la página principal.
- Formularios integrados con Supabase mediante `crear-solicitud`.
- Número de solicitud mostrado al usuario.
- Inclusión de `terminos.html` y `privacidad.html`.

## Publicación y verificación

1. Conservar el paquete **V2.0** como respaldo.
2. Publicar el contenido de **V2.1** en Cloudflare Pages.
3. Comprobar que la web y sus formularios sigan funcionando.
4. Confirmar que `https://nexoventa.com.ar/sitemap.xml` y `https://nexoventa.com.ar/robots.txt` respondan correctamente (HTTP 200).
5. En **Google Search Console → Indexación → Sitemaps**, enviar `sitemap.xml`.
6. Verificar indexación y rendimiento en los días siguientes. La indexación y el posicionamiento no están garantizados.

## Pendientes
- Confirmar operación de facturación electrónica en producción, alta fiscal de clientes y vigencia del precio anunciado.
- Completar y revisar la información identificatoria pendiente de los documentos legales.
- Medir resultados de búsqueda, clics y consultas comerciales para priorizar futuras mejoras SEO.
- **Registro legal de la marca NexoVenta en INPI:** pendiente; no se presentó solicitud ni se realizó pago.

> **Estado:** V2.1 preparada para publicación. La publicación efectiva y las comprobaciones en producción deben realizarse por separado.
