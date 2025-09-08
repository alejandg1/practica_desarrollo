
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contrasena = contrasenaInput.value;
        
        let formularioValido = true;
        
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            formularioValido = false;
            return;
        }
        
        if (!validarCorreo(correo)) {
            formularioValido = false;
            return;
        }
        
        if (!validarContrasena(contrasena)) {
            formularioValido = false;
            return;
        }
        
        if (formularioValido) {
            alert('¡Registro exitoso! Todos los datos son válidos.');
        }
    });

    function validarCorreo(correo) {
        if (correo === '') {
            alert('Por favor, ingresa tu correo electrónico.');
            return false;
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!regexCorreo.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido (ejemplo: usuario@dominio.com).');
            return false;
        }
        
        return true;
    }

    function validarContrasena(contrasena) {
        if (contrasena === '') {
            alert('Por favor, ingresa tu contraseña.');
            return false;
        }
        
        if (contrasena.length < 8) {
            alert('La contraseña debe tener mínimo 8 caracteres.');
            return false;
        }
        
        return true;
    }
    
    correoInput.addEventListener('blur', function() {
        const correo = this.value.trim();
        if (correo !== '' && !validarCorreoSilencioso(correo)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
    
    contrasenaInput.addEventListener('input', function() {
        const contrasena = this.value;
        if (contrasena.length > 0 && contrasena.length < 8) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#ddd';
        }
    });

    function validarCorreoSilencioso(correo) {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    }
    
});
