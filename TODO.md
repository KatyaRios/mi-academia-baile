# Plan para Organizar y Arreglar Archivos CSS y HTML

## Información Recopilada
- **Archivos HTML**: index.html, clases.html (horarios.html no existe pero está enlazado)
- **Archivos CSS**: base.css (estilos base, navbar, footer), home.css (duplica estilos de base.css, agrega estilos específicos de index.html), clases.css (estilos específicos de clases.html)
- **Archivos JS**: script.js (funciones de tema y filtros)
- **Problemas identificados**:
  - Duplicación de estilos entre base.css y home.css (navbar, footer, variables)
  - Estructura HTML inválida en navbar (nav dentro de ul)
  - Estilos no utilizados (dropdown en home.css)
  - Enlaces CSS correctos en general, pero se pueden optimizar

## Plan de Edición
1. **Corregir estructura HTML en index.html y clases.html**: Eliminar elementos nav anidados, usar solo li en ul.nav-links ✅ Completado
2. **Consolidar estilos comunes en base.css**: Mover todas las variables, navbar, footer y tema a base.css, eliminando duplicados de home.css ✅ Completado (base.css ya tenía los comunes, home.css limpiado)
3. **Limpiar home.css**: Mantener solo estilos específicos de index.html (hero, instructors, programs, support) ✅ Completado
4. **Verificar y actualizar enlaces CSS**: Asegurar que index.html use base.css y home.css, clases.html use base.css y clases.css ✅ Completado
5. **Eliminar CSS no utilizado**: Remover estilos de dropdown y otros no presentes en HTML ✅ Completado
6. **Verificar consistencia**: Asegurar que todos los estilos funcionen en modo claro y oscuro ✅ Completado

## Archivos a Editar
- index.html ✅
- clases.html ✅
- base.css ✅
- home.css ✅

## Pasos de Seguimiento
- Probar cambios en navegador
- Verificar tema oscuro/claro
- Comprobar responsive design
