const MENU=document.getElementById('menu');


MENU.querySelectorAll('li');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});