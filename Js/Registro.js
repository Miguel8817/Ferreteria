document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmar');
    const strengthMeter = document.getElementById('strength-meter');

    // Validación de contraseña en tiempo real
    passwordInput.addEventListener('input', function () {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        updateStrengthMeter(strength);

        if (password.length > 0 && password.length < 8) {
            document.getElementById('password-error').style.display = 'block';
        } else {
            document.getElementById('password-error').style.display = 'none';
        }

        // Validar coincidencia si el campo de confirmación tiene contenido
        if (confirmInput.value.length > 0) {
            validatePasswordMatch();
        }
    });

    // Validar coincidencia de contraseñas
    confirmInput.addEventListener('input', validatePasswordMatch);

    // Envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Limpiar errores anteriores
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });

        // Validaciones
        let isValid = true;

        // Validar nombre
        if (document.getElementById('nombre').value.trim() === '') {
            document.getElementById('nombre-error').style.display = 'block';
            isValid = false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(document.getElementById('email').value.trim())) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        

        

        // Validar contraseña
        if (passwordInput.value.length < 8) {
            document.getElementById('password-error').style.display = 'block';
            isValid = false;
        }

        // Validar coincidencia
        if (passwordInput.value !== confirmInput.value) {
            document.getElementById('confirmar-error').style.display = 'block';
            isValid = false;
        }

        // Si todo es válido, enviar formulario
        if (isValid) {
            // Aquí iría el envío real al servidor
            // Por ahora solo simulamos el envío
            console.log('Formulario válido, enviando datos...');
            alert('Registro exitoso. Redirigiendo...');

            // Simular envío y redirección
            setTimeout(() => {
                window.location.href = '/Html/productos.html';
            }, 1500);
        }
    });

    function calculatePasswordStrength(password) {
        let strength = 0;

        // Longitud mínima
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;

        // Contiene números
        if (/\d/.test(password)) strength += 1;

        // Contiene mayúsculas y minúsculas
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

        // Contiene caracteres especiales
        if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

        return strength;
    }

    function updateStrengthMeter(strength) {
        const meter = strengthMeter;
        let width = 0;
        let color = '#ff4444'; // Rojo (débil)

        switch (strength) {
            case 1:
                width = 25;
                break;
            case 2:
                width = 50;
                color = '#ffbb33'; // Amarillo (medio)
                break;
            case 3:
                width = 75;
                color = '#00C851'; // Verde (fuerte)
                break;
            case 4:
            case 5:
                width = 100;
                color = '#00C851'; // Verde (muy fuerte)
                break;
            default:
                width = 0;
        }

        meter.style.width = width + '%';
        meter.style.backgroundColor = color;
    }

    function validatePasswordMatch() {
        if (passwordInput.value !== confirmInput.value) {
            document.getElementById('confirmar-error').style.display = 'block';
        } else {
            document.getElementById('confirmar-error').style.display = 'none';
        }
    }
});