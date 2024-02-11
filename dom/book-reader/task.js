const book = document.getElementById('book');
const fonts = Array.from(document.querySelectorAll('.font-size'));

for (const font of fonts) {
    font.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        fonts.forEach(i => i.classList.remove('font-size_active'));
        target.classList.add('font-size_active');
        if (target.dataset.size === 'small') {
            book.classList.remove('book_fs-big')
            book.classList.add('font-size_small')
        } else if (target.dataset.size === 'big') {
            book.classList.remove('font-size_small')
            book.classList.add('book_fs-big')
        } else {
            book.classList.remove('book_fs-big')
            book.classList.add('font-size_small')
        }
    })
}