# Propuesta de rediseño — Alcaldía Venustiano Carranza

Propuesta conceptual de portal ciudadano con identidad cromática vino y blanco. La interfaz está pensada como una presentación ejecutiva de una experiencia digital institucional moderna.

## Ejecutar localmente

Requiere Python 3 o cualquier servidor estático.

```bash
python3 -m http.server 4173
```

Abre `http://localhost:4173` en Chrome.

También puedes abrir `index.html` directamente, aunque se recomienda usar un servidor local.

## Tecnologías
- HTML5 y CSS3 personalizado.
- Bootstrap 5.3.3.
- Bootstrap Icons.
- JavaScript ES6.
- Componentes interactivos propios: menú móvil, filtros, modales y chatbot simulado.

Las librerías y tipografías se cargan mediante CDN, por lo que se requiere conexión a internet.

## Estructura
- `index.html`: página principal.
- `css/styles.css`: identidad visual, componentes y responsive.
- `js/app.js`: navegación, filtros, modal y chatbot.

## Importante: contenido demostrativo
Los nombres de programas, convocatorias, eventos, fechas, textos y respuestas del chatbot son ejemplos de presentación. No representan convocatorias, programas o servicios vigentes verificados. Antes de publicar, sustituir por información aprobada por la Alcaldía.

Las fotografías se cargan desde Unsplash mediante URL remota. Sustituirlas por imágenes institucionales autorizadas antes de publicar.

El chatbot no usa IA ni backend y no consulta bases de datos. Sus respuestas son reglas predefinidas en JavaScript.

## Alcance
Esta es una propuesta frontend independiente. No modifica ni reemplaza sistemas, rutas, bases de datos, trámites ni servicios reales del portal institucional.
