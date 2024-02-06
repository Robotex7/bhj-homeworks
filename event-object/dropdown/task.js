const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));

value.addEventListener('click', () => list.classList.toggle('dropdown__list_active'));
for (const item of items) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        value.textContent = item.textContent;
        list.classList.remove('dropdown__list_active');
    })
}