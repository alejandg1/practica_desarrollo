// Validaciones básicas de correo y contraseña
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
	if (!form) return;

	form.addEventListener('submit', function(e) {
		const email = form.querySelector('input[type="email"]');
		const password = form.querySelector('input[type="password"]');
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

		if (!valid) {
			e.preventDefault();
		}
	});
});
