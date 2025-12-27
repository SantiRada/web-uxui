# UX/UI Academy - Sitio Web Personal

Sitio web personal multi-página para profesor de UX/UI con diseño Neobrutalism UI inspirado en Figma.

## 🎨 Estilo Visual

El sitio utiliza **Neobrutalism UI Design**, caracterizado por:
- Bordes gruesos y negros (4px)
- Sombras duras sin blur
- Colores vibrantes y saturados
- Tipografía bold y atrevida
- Elementos planos con profundidad creada por sombras
- Alto contraste visual
- Estética inspirada en la marca Figma

## 📄 Estructura del Sitio

### Página Principal (index.html)
- Hero section con presentación profesional
- Sección "Sobre mí" con información personal
- Resúmenes de cada servicio con links a páginas dedicadas
- Call to action final

### Páginas Individuales

1. **courses.html** - Cursos Pregrabados
   - Catálogo completo de cursos por nivel (Principiante, Intermedio, Avanzado)
   - Descripción detallada de cada curso
   - Información sobre qué incluyen los cursos
   - Preguntas frecuentes
   - Precios y modalidades

2. **tutoring.html** - Tutorías 1 a 1
   - Explicación del servicio de mentoría personalizada
   - Para quién son las tutorías
   - Áreas en las que se puede trabajar
   - Proceso de trabajo
   - Paquetes y precios
   - Testimonios
   - Formulario de contacto

3. **live-courses.html** - Cursadas en Vivo
   - Información sobre bootcamps intensivos
   - Próximas cursadas disponibles
   - Temario completo semana por semana
   - Qué incluye el bootcamp
   - Comparación con cursos pregrabados
   - Preguntas frecuentes
   - Formulario de inscripción

4. **business.html** - Capacitación Empresarial
   - Servicios de capacitación para equipos
   - Áreas de especialización
   - Formatos de capacitación disponibles
   - Beneficios para la empresa
   - Proceso de trabajo
   - Testimonios de empresas
   - Formulario de contacto empresarial

## 🎯 Características Principales

### Diseño Neobrutalism
- Variables CSS para colores vibrantes
- Bordes gruesos en todos los elementos
- Sombras duras (sin blur) con desplazamiento
- Tipografía Inter con pesos bold
- Efectos hover con transformaciones y sombras incrementadas
- Botones con estados activos visuales

### Navegación Multi-Página
- Navegación principal que se mantiene en todas las páginas
- Links directos a cada sección
- Responsive design para móvil, tablet y desktop
- Menú hamburguesa en móvil

### Contenido Extenso
- Cada página tiene suficiente contenido para scroll completo
- Información detallada sobre cada servicio
- FAQs en cada sección
- Llamados a la acción claros

### Formularios Funcionales
- Formulario de contacto para tutorías
- Formulario de inscripción para cursadas en vivo
- Formulario de consulta empresarial
- Validación HTML5 básica

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Sistema de diseño Neobrutalism con variables CSS
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Google Fonts**: Tipografía Inter (300-900)

## 🎨 Paleta de Colores Neobrutalism

```css
--primary-color: #FF6B6B      /* Coral vibrante */
--secondary-color: #4ECDC4    /* Turquesa */
--accent-yellow: #FFE66D      /* Amarillo brillante */
--accent-purple: #A8E6CF      /* Menta */
--accent-orange: #FF8B94      /* Coral claro */
--accent-blue: #95E1D3        /* Aqua */
--black: #000000              /* Negro puro */
--white: #FFFFFF              /* Blanco puro */
```

## 📁 Estructura de Archivos

```
web-uxui/
├── index.html              # Página principal
├── courses.html            # Página de cursos
├── tutoring.html           # Página de tutorías
├── live-courses.html       # Página de cursadas en vivo
├── business.html           # Página de capacitación empresarial
├── css/
│   └── styles.css          # Estilos Neobrutalism globales
├── js/
│   └── main.js             # JavaScript para interactividad
├── assets/
│   └── images/             # Imágenes del sitio
├── LICENSE
└── README.md
```

## 🚀 Instalación y Uso

### Opción 1: Uso Directo
Simplemente abre `index.html` en tu navegador.

### Opción 2: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx http-server

# Visita http://localhost:8000
```

## 🎯 Funcionalidades JavaScript

- **Menú móvil**: Toggle del menú hamburguesa
- **Formularios**: Manejo y validación de todos los formularios
- **Animaciones**: Scroll reveal para tarjetas y elementos
- **Navegación activa**: Highlight de página actual en navegación
- **Smooth scroll**: Para anchors dentro de la misma página

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Adaptaciones Móviles
- Menú hamburguesa
- Grids adaptables a una columna
- Tamaños de fuente escalables
- Espaciado optimizado

## 🔮 Futuras Funcionalidades

- [ ] Sistema de suscripciones para contenido mensual
- [ ] Blog de investigaciones UX/UI
- [ ] Sistema de pagos integrado (Stripe/PayPal)
- [ ] Panel de administración
- [ ] Newsletter automatizado
- [ ] Integración con CMS headless
- [ ] Sistema de autenticación de usuarios
- [ ] Base de datos para gestión de contenido

## 💡 Personalización

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
1. Edita el texto en los archivos HTML
2. Actualiza las imágenes en `assets/images/`
3. Personaliza los datos de cursos, precios y servicios

### Ajustar Estilo Neobrutalism
Modifica las variables de bordes y sombras:
```css
:root {
    --border-width: 4px;
    --shadow-sm: 4px 4px 0px var(--black);
    --shadow-md: 6px 6px 0px var(--black);
    /* ... */
}
```

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📊 Performance

- Sin frameworks pesados
- CSS optimizado con variables
- JavaScript vanilla (sin dependencias)
- Carga rápida
- Diseño optimizado para Core Web Vitals

## 🎓 Secciones por Página

### index.html
- Hero + About + Previews de servicios

### courses.html
- 9+ cursos catalogados por nivel
- 4 secciones de beneficios
- FAQs completos

### tutoring.html
- 6 áreas de enfoque
- 3 paquetes de precios
- Testimonios
- Proceso de 4 pasos

### live-courses.html
- Bootcamp detallado semana por semana
- 6 beneficios incluidos
- Comparativa live vs grabado
- FAQs específicos

### business.html
- 4 áreas de capacitación
- 4 formatos de programas
- 5 beneficios empresariales
- Testimonios de empresas
- Proceso de trabajo

## 📞 Contacto

Para consultas sobre el sitio o servicios:
- Email: contacto@uxuiacademy.com
- LinkedIn: [Tu perfil]
- Instagram: [@tu_usuario]

## 📄 Licencia

Ver archivo `LICENSE` para más detalles.

---

**Diseño**: Neobrutalism UI inspirado en Figma
**Última actualización**: 2025
