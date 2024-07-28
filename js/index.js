document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el scroll suave al hacer clic en los enlaces del menú de navegación
    const smoothScroll = (target, duration) => {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        let startTime = null;

        const animateScroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateScroll);
    };

    // Añadir event listeners a los enlaces del menú de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                smoothScroll(targetId, 1000);
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Función para manejar el cambio de la clase 'active' en el menú de navegación según la sección visible
    const sections = document.querySelectorAll('section');
    const navListItems = document.querySelectorAll('nav ul li');

    const changeActiveNavItem = () => {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navListItems.forEach((item) => item.classList.remove('active'));
        navListItems[index].classList.add('active');
    };

    window.addEventListener('scroll', changeActiveNavItem);

    // Llamar a la función una vez al cargar la página para establecer el elemento activo correctamente
    changeActiveNavItem();
});
