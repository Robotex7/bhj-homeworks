window.addEventListener('scroll', function() {
    const reveals = document.querySelector('.reveal');

    for (const i = 0; i < reveals.lenght; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('reveal_active');
        } else {
            reveals[i].classList.remove('reveal_active')
        }
    }
});