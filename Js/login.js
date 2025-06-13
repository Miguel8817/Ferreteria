document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Limpiar errores anteriores
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });

        // Obtener valores
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        let isValid = true;

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        // Validar contraseña (mínimo 6 caracteres)
        if (password.length < 6) {
            document.getElementById('password-error').style.display = 'block';
            isValid = false;
        }

        // Si todo es válido
        if (isValid) {
            // Aquí iría la lógica para enviar los datos al servidor
            console.log('Inicio de sesión válido', { email, password });

            // Simular envío exitoso
            setTimeout(() => {
                window.location.href = 'productos.html';
            }, 1000);
        }
    });
});