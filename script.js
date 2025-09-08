document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('form');
	if (!form) return;

	form.addEventListener('submit', function(e) {
		const email = form.querySelector('input[type="email"]');
		const password = form.querySelector('input[type="password"]');
		let valid = true;

		if (!email.value) {
			alert('El correo no puede estar vacío.');
			valid = false;
		} else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
			alert('El formato del correo es incorrecto.');
			valid = false;
		}

		if (!password.value || password.value.length < 8) {
			alert('La contraseña debe tener al menos 8 caracteres.');
			valid = false;
		}

		if (!valid) {
			e.preventDefault();
		}
	});
});
