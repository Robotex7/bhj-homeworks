const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function(rotator) {
    const items = rotator.querySelectorAll('.rotator__case');
    const index = 0;

    setInterval(function() {
        items[index].classList.remove('rotator__case_active');
        index = (index + 1) % items.length;
        items[index].classList.add('rotator__case_active');
    }, 1000);
});