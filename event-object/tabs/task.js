const tabs1 = document.getElementById('tabs1');
const tabs = Array.from(tabs1.querySelectorAll('.tab'));
const tabsContent = Array.from(tabs1.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(s => s.classList.remove('tab_active'));
        tabs[index].classList.add('tab_active');

        tabsContent.forEach(s => s.classList.remove('tab__content_active'));
        tabsContent[index].classList.add('tab__content_active');
    })
})