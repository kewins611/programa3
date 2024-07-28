document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Validar nombre
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'El nombre es obligatorio.');
            valid = false;
        } else {
            removeError(nameInput);
        }

        // Validar correo electrónico
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El correo electrónico es obligatorio.');
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'El correo electrónico no es válido.');
            valid = false;
        } else {
            removeError(emailInput);
        }

        // Validar mensaje
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'El mensaje es obligatorio.');
            valid = false;
        } else {
            removeError(messageInput);
        }

        // Si todo es válido, enviar el formulario
        if (valid) {
            form.submit();
        }
    });

    const showError = (input, message) => {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const small = formGroup.querySelector('small');
        if (small) {
            small.textContent = message;
        } else {
            const errorText = document.createElement('small');
            errorText.textContent = message;
            formGroup.appendChild(errorText);
        }
    };

    const removeError = (input) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        const small = formGroup.querySelector('small');
        if (small) {
            formGroup.removeChild(small);
        }
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };
});
