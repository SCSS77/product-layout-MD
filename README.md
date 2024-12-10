
# Documentación del Proyecto

## Descripción

Este proyecto implementa una estructura de layout utilizando el patrón **Holy Grail** y se adapta a diferentes dispositivos, asegurando un diseño responsive y accesible. Además, se ha integrado un sistema de estilos con CSS optimizado.

## Decisiones de Diseño

1. **Estructura del Layout:**
   - Se ha utilizado una estructura **Holy Grail CSS** para definir el layout principal del sitio, asegurando una disposición coherente y adaptable del contenido.
   
2. **Uso de CSS Minimizado:**
   - Se ha cargado un archivo **CSS minimizado** adicional para aplicar estilos más específicos a las secciones y elementos del contenido. Este archivo está optimizado para mejorar el rendimiento de carga del sitio.

   Para compilar los archivos CSS desde el archivo SCSS, se pueden usar los siguientes scripts de NPM:

   - **`build-css`**: Este script compila el archivo SCSS a un archivo CSS comprimido y luego utiliza **PostCSS** para aplicar optimizaciones y generar el archivo `styles.min.css`.
     ```bash
     npm run build-css
     ```

   - **`watch-css`**: Este script observa cualquier cambio en el archivo SCSS y genera automáticamente el archivo CSS optimizado en tiempo real.
     ```bash
     npm run watch-css
     ```

3. **Estructura HTML Semántica:**
   - Se ha priorizado una estructura semántica en el HTML para mejorar la accesibilidad y la indexación del contenido por motores de búsqueda.

## Cómo Probar la Solución

Para probar la solución localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd <DIRECTORIO_DEL_PROYECTO>
   ```

3. Instala las dependencias del proyecto utilizando **npm** (se asegura de incluir `node_modules`):

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre el navegador y accede a la aplicación en:

   ```bash
   http://localhost:5173/
   ```

   Esto abrirá la aplicación en tu navegador, donde podrás ver la interfaz de usuario interactiva y probar las funcionalidades.

## Criterios de Evaluación

### Correcto Uso de HolyGrail CSS

El diseño sigue el patrón **HolyGrail** con las siguientes secciones:

- Cabecera (header)
- Barra lateral de navegación
- Contenido principal
- Pie de página (footer)

Cada sección está correctamente posicionada usando CSS Grid y Flexbox.

### Responsive y Adaptabilidad del Diseño

El diseño se adapta a diferentes tamaños de pantalla mediante:
- Uso de `@media queries` para ajustar las propiedades del layout.
- El contenido se reorganiza para pantallas pequeñas.

### Estructura Semántica y Accesible del HTML

Se han utilizado las siguientes prácticas:
- **Etiquetas semánticas** como `<header>`, `<nav>`, `<sction>`, `<footer>`.
- Atributos de accesibilidad como `alt` para imágenes y roles para los elementos interactivos.
  
### Limpieza y Organización del Código

- **Archivos de estilo** separados en SCSS para modularidad.
- El código JavaScript está organizado por funcionalidad.

### Creatividad y Atención a los Detalles Visuales

- Uso de animaciones suaves y transiciones para mejorar la interacción del usuario.
- Diseño de productos visualmente atractivo con imágenes claras y botones interactivos.

## Tecnologías Utilizadas

- **HTML5**: Estructura básica de la página.
- **CSS3/SCSS**: Estilos responsivos utilizando CSS Grid y Flexbox.
- **JavaScript**: Funcionalidad dinámica y gestión de la interacción con el usuario.
- **Vite**: Herramienta de construcción para un desarrollo rápido y eficiente.

## Contribuciones

Si deseas contribuir al proyecto, por favor realiza un **fork** del repositorio y abre un **pull request** con tus mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.