// ===================================================
// MATERIAL DESIGN - JAVASCRIPT MEJORADO
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del formulario
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');
    const togglePassword = document.getElementById('togglePassword');
    const passwordStrength = document.getElementById('passwordStrength');
    const strengthFill = passwordStrength.querySelector('.strength-fill');
    const strengthText = passwordStrength.querySelector('.strength-text');
    const materialButton = document.querySelector('.material-button');
    
    // Inicializar funcionalidades
    initFloatingLabels();
    initPasswordToggle();
    initPasswordStrength();
    initRippleEffect();
    initFormValidation();
    initSocialButtons();
    
    // =============================================
    // LABELS FLOTANTES MATERIAL DESIGN
    // =============================================
    function initFloatingLabels() {
        const inputs = [nombreInput, correoInput, contrasenaInput];
        
        inputs.forEach(input => {
            // Activar label si hay contenido al cargar
            if (input.value.trim() !== '') {
                input.nextElementSibling.classList.add('active');
            }
            
            // Eventos para manejar el label
            input.addEventListener('focus', function() {
                this.nextElementSibling.classList.add('active');
            });
            
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.nextElementSibling.classList.remove('active');
                }
            });
        });
    }
    
    // =============================================
    // TOGGLE DE CONTRASEÑA
    // =============================================
    function initPasswordToggle() {
        togglePassword.addEventListener('click', function() {
            const type = contrasenaInput.type === 'password' ? 'text' : 'password';
            contrasenaInput.type = type;
            
            // Cambiar icono
            this.textContent = type === 'password' ? 'visibility_off' : 'visibility';
            
            // Efecto de animación
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // =============================================
    // INDICADOR DE FUERZA DE CONTRASEÑA
    // =============================================
    function initPasswordStrength() {
        contrasenaInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            if (password.length > 0) {
                passwordStrength.classList.add('active');
                updatePasswordStrength(strength);
            } else {
                passwordStrength.classList.remove('active');
            }
        });
    }
    
    function calculatePasswordStrength(password) {
        let score = 0;
        let feedback = '';
        
        // Longitud
        if (password.length >= 8) score += 25;
        if (password.length >= 12) score += 25;
        
        // Números
        if (/\d/.test(password)) score += 15;
        
        // Minúsculas y mayúsculas
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;
        
        // Caracteres especiales
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 15;
        
        // Determinar nivel y feedback
        if (password.length < 8) {
            feedback = 'Mínimo 8 caracteres';
        } else if (score < 40) {
            feedback = 'Contraseña débil';
        } else if (score < 70) {
            feedback = 'Contraseña media';
        } else {
            feedback = 'Contraseña fuerte';
        }
        
        return { score, feedback };
    }
    
    function updatePasswordStrength(strength) {
        strengthFill.style.width = strength.score + '%';
        strengthText.textContent = strength.feedback;
        
        // Remover clases anteriores
        strengthFill.classList.remove('weak', 'medium', 'strong');
        
        // Agregar clase según fortaleza
        if (strength.score < 40) {
            strengthFill.classList.add('weak');
        } else if (strength.score < 70) {
            strengthFill.classList.add('medium');
        } else {
            strengthFill.classList.add('strong');
        }
    }
    
    // =============================================
    // EFECTO RIPPLE EN BOTONES
    // =============================================
    function initRippleEffect() {
        materialButton.addEventListener('click', function(e) {
            const ripple = this.querySelector('.button-ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.transform = 'scale(0)';
            ripple.style.opacity = '1';
            
            // Trigger reflow
            ripple.offsetHeight;
            
            ripple.style.transform = 'scale(4)';
            ripple.style.opacity = '0';
        });
    }
    
    // =============================================
    // VALIDACIÓN DEL FORMULARIO
    // =============================================
    function initFormValidation() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Limpiar estados anteriores
            clearValidationStates();
            
            // Validar campos
            const nombreValido = validateNombre();
            const correoValido = validateCorreo();
            const contrasenaValida = validateContrasena();
            
            if (nombreValido && correoValido && contrasenaValida) {
                showSuccessMessage();
                logFormData();
            }
        });
        
        // Validación en tiempo real
        nombreInput.addEventListener('blur', validateNombre);
        correoInput.addEventListener('blur', validateCorreo);
        contrasenaInput.addEventListener('blur', validateContrasena);
    }
    
    function validateNombre() {
        const nombre = nombreInput.value.trim();
        const container = nombreInput.closest('.input-container');
        
        if (nombre === '') {
            setFieldError(container, 'El nombre es obligatorio');
            return false;
        }
        
        if (nombre.length < 2) {
            setFieldError(container, 'El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        setFieldSuccess(container);
        return true;
    }
    
    function validateCorreo() {
        const correo = correoInput.value.trim();
        const container = correoInput.closest('.input-container');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (correo === '') {
            setFieldError(container, 'El correo es obligatorio');
            return false;
        }
        
        if (!emailRegex.test(correo)) {
            setFieldError(container, 'Formato de correo inválido');
            return false;
        }
        
        setFieldSuccess(container);
        return true;
    }
    
    function validateContrasena() {
        const contrasena = contrasenaInput.value;
        const container = contrasenaInput.closest('.input-container');
        
        if (contrasena === '') {
            setFieldError(container, 'La contraseña es obligatoria');
            return false;
        }
        
        if (contrasena.length < 8) {
            setFieldError(container, 'Mínimo 8 caracteres');
            return false;
        }
        
        setFieldSuccess(container);
        return true;
    }
    
    function setFieldError(container, message) {
        container.classList.remove('success');
        container.classList.add('error');
        showToast(message, 'error');
    }
    
    function setFieldSuccess(container) {
        container.classList.remove('error');
        container.classList.add('success');
    }
    
    function clearValidationStates() {
        const containers = document.querySelectorAll('.input-container');
        containers.forEach(container => {
            container.classList.remove('error', 'success');
        });
    }
    
    // =============================================
    // MENSAJES TOAST MATERIAL DESIGN
    // =============================================
    function showToast(message, type = 'info') {
        // Remover toast anterior si existe
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="material-icons">${getToastIcon(type)}</i>
            <span>${message}</span>
        `;
        
        // Estilos del toast
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: getToastColor(type),
            color: 'white',
            padding: '12px 24px',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: '10000',
            animation: 'slideInUp 0.3s ease',
            minWidth: '200px',
            justifyContent: 'center'
        });
        
        document.body.appendChild(toast);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            toast.style.animation = 'slideOutDown 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    function getToastIcon(type) {
        const icons = {
            error: 'error',
            success: 'check_circle',
            warning: 'warning',
            info: 'info'
        };
        return icons[type] || 'info';
    }
    
    function getToastColor(type) {
        const colors = {
            error: '#F44336',
            success: '#4CAF50',
            warning: '#FF9800',
            info: '#2196F3'
        };
        return colors[type] || '#2196F3';
    }
    
    function showSuccessMessage() {
        showToast('¡Registro exitoso! Bienvenido a nuestra comunidad.', 'success');
    }
    
    function logFormData() {
        console.log('📝 Datos del formulario:', {
            nombre: nombreInput.value.trim(),
            correo: correoInput.value.trim(),
            contrasena: '***',
            timestamp: new Date().toISOString()
        });
    }
    
    // =============================================
    // BOTONES SOCIALES (DEMO)
    // =============================================
    function initSocialButtons() {
        const socialBtns = document.querySelectorAll('.social-btn');
        
        socialBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.textContent.trim();
                showToast(`Funcionalidad de ${provider} en desarrollo`, 'info');
            });
        });
    }
    
    // =============================================
    // ANIMACIONES CSS ADICIONALES
    // =============================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎨 Material Design JavaScript cargado correctamente');
});
