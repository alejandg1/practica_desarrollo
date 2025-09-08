# 📝 Formulario de Registro - Proyecto Web Básico

Este es un proyecto de formulario de registro desarrollado con **HTML5**, **CSS3** y **JavaScript puro**. Incluye validaciones del lado del cliente y un diseño responsive moderno.

## 🚀 Características

- ✅ **HTML5 semántico** con estructura completa
- ✅ **CSS3 moderno** con Flexbox y efectos de transición
- ✅ **JavaScript puro** sin dependencias externas
- ✅ **Validaciones en tiempo real**:
  - Correo electrónico con formato válido
  - Contraseña con mínimo 8 caracteres
  - Campos obligatorios
- ✅ **Diseño responsive** para todos los dispositivos
- ✅ **Alertas informativas** para el usuario

## 📁 Estructura del Proyecto

```
DW/
├── index.html      # Archivo principal HTML
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este archivo
```
## 🛠️ Instalación

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requieren instalaciones adicionales

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd DW
   ```

2. **No requiere instalación de dependencias**
   - El proyecto utiliza HTML, CSS y JavaScript puro
   - No necesita Node.js, npm, ni otros gestores de paquetes

## 🚀 Ejecución

### Método 1: Abrir directamente en el navegador
1. Navega hasta la carpeta del proyecto
2. Haz doble clic en `index.html`
3. El formulario se abrirá automáticamente en tu navegador predeterminado

### Método 2: Desde la terminal

```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

### Método 3: Servidor local (Opcional)
Si prefieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000

```
Luego visita: `http://localhost:8000`

## 🧪 Cómo Probar el Formulario

### Casos de Prueba

1. **Campos vacíos**
   - Deja cualquier campo vacío y presiona "Registrarse"
   - **Resultado esperado**: Alert pidiendo completar el campo

2. **Correo inválido**
   - Ingresa: `usuario` (sin @ ni dominio)
   - **Resultado esperado**: Alert de formato incorrecto

3. **Contraseña muy corta**
   - Ingresa una contraseña de menos de 8 caracteres
   - **Resultado esperado**: Alert solicitando mínimo 8 caracteres

4. **Datos válidos**
   - Nombre: `Juan Pérez`
   - Correo: `juan@ejemplo.com`
   - Contraseña: `mipassword123`
   - **Resultado esperado**: Alert de "¡Registro exitoso!"

### Validaciones Implementadas

| Campo | Validaciones |
|-------|-------------|
| **Nombre** | ✅ Campo obligatorio |
| **Correo** | ✅ Campo obligatorio<br>✅ Formato válido (usuario@dominio.com) |
| **Contraseña** | ✅ Campo obligatorio<br>✅ Mínimo 8 caracteres |

## 🎨 Personalización

### Modificar Estilos
Edita el archivo `style.css` para cambiar:
- Colores del tema
- Tipografías
- Tamaños y espaciados
- Efectos de transición

### Agregar Validaciones
En `script.js` puedes agregar:
- Validaciones más complejas para contraseñas
- Verificación de confirmación de contraseña
- Validaciones de formato de nombre

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura y semántica
- **CSS3**: Estilos, Flexbox, transiciones
- **JavaScript ES6**: Validaciones y lógica

## 📱 Compatibilidad

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |


## 👨‍💻 Desarrollo

Este proyecto fue desarrollado siguiendo las mejores prácticas de:
- HTML semántico
- CSS modular y responsive
- JavaScript vanilla sin dependencias
- Accesibilidad web básica

---
