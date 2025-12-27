# UX/UI Academy - Sitio Web Personal

Sitio web personal para profesor de UX/UI con múltiples secciones y funcionalidades.

## Características

### Secciones Principales

1. **Hero / Inicio**
   - Presentación profesional con estadísticas
   - Llamados a la acción claros
   - Diseño visual atractivo con animaciones

2. **Cursos Pregrabados**
   - Grid de cursos disponibles 24/7
   - Información de nivel, duración y precio
   - Sistema de badges para destacar cursos populares

3. **Tutorías Personalizadas**
   - Formulario de contacto integrado
   - Lista de beneficios de las tutorías 1 a 1
   - Información clara sobre el servicio

4. **Cursadas en Vivo**
   - Sección dinámica que muestra próximas cursadas
   - Gestión automática de fechas
   - Sistema de badges según proximidad del curso

5. **Para Empresas**
   - Presentación de servicios de capacitación
   - Portfolio y experiencia
   - Servicios específicos ofrecidos
   - CTA para consulta empresarial

6. **Footer Completo**
   - Navegación rápida
   - Información de contacto
   - Links legales

### Funcionalidades

- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales sutiles al hacer scroll
- **Formularios Funcionales**: Sistema de captura de leads
- **Sistema de Diseño**: Variables CSS para fácil personalización

## Estructura del Proyecto

```
web-uxui/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos globales y componentes
├── js/
│   └── main.js         # JavaScript para interactividad
├── assets/
│   └── images/         # Imágenes del sitio
├── LICENSE
└── README.md
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Google Fonts**: Tipografía Inter

## Paleta de Colores

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #0ea5e9 (Sky Blue)
- **Accent**: #f59e0b (Amber)
- **Text**: #0f172a (Slate 900)
- **Background**: #ffffff / #f8fafc

## Características de Diseño

### Sistema de Variables CSS
El proyecto utiliza CSS Custom Properties para mantener consistencia:
- Colores
- Tipografía
- Espaciado
- Bordes
- Sombras
- Transiciones

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## Instalación y Uso

### Opción 1: Uso Directo
Simplemente abre `index.html` en tu navegador favorito.

### Opción 2: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx http-server

# Visita http://localhost:8000
```

## Personalización

### Cambiar Colores
Edita las variables en `css/styles.css`:
```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
    /* ... */
}
```

### Modificar Contenido
1. Edita el texto en `index.html`
2. Actualiza las imágenes en `assets/images/`
3. Personaliza los datos de cursos y servicios

### Gestión de Cursos en Vivo
Las fechas se gestionan en `js/main.js` en la función `updateLiveCourseStatus()`.

## Próximas Funcionalidades

- [ ] Sistema de suscripciones
- [ ] Blog de investigaciones UX/UI
- [ ] Sistema de pagos integrado
- [ ] Panel de administración
- [ ] Newsletter automatizado
- [ ] Integración con CMS

## Integración Backend (Futuro)

El sitio está preparado para integrarse con:
- APIs REST para cursos y contenido
- Sistema de autenticación
- Procesamiento de pagos (Stripe/PayPal)
- CMS headless (Strapi, Contentful, etc.)
- Base de datos para suscripciones

## Performance

- Carga rápida sin dependencias pesadas
- CSS optimizado
- JavaScript vanilla (sin frameworks)
- Imágenes optimizadas (cuando se agreguen)

## Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Contacto

Para consultas sobre el sitio o servicios:
- Email: contacto@uxuiacademy.com
- LinkedIn: [Tu perfil]
- Instagram: [@tu_usuario]

## Licencia

Ver archivo `LICENSE` para más detalles.

---

**Nota**: Este es un proyecto inicial. Las funcionalidades de backend, pagos y suscripciones se implementarán en futuras iteraciones.
