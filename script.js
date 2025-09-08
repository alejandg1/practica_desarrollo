document.addEventListener('DOMContentLoaded', function() {
	const button = document.getElementById('send');
	const form = document.querySelector('form');
	if (!button || !form) return;

	button.addEventListener('click', function(e) {
		e.preventDefault();
		const email = document.getElementById('mail');
		const password = document.getElementById('password');
		let valid = true;

		// Validar correo no vacío y formato correcto
		if (!email.value) {
			alert('El correo no puede estar vacío.');
			valid = false;
		} else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
			alert('El formato del correo es incorrecto.');
			valid = false;
		}

		// Validar contraseña mínimo 8 caracteres
		if (!password.value || password.value.length < 8) {
			alert('La contraseña debe tener al menos 8 caracteres.');
			valid = false;
		}

		if (valid) {
			alert('Formulario válido. ¡Datos listos para enviar!');
		}
	});
});
