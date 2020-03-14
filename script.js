const MENU=document.getElementsById('menu');


MENU.querySelectorAll('li');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(ul=> el.classList.remove('active'));
    event.target.classList.add('active');
});