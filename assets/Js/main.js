const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar');

const showMenu = () => navbar.classList.toggle('hidden');

const hideMenu = () => {
    if(!navbar.classList.contains('hidden')) navbar.classList.add('hidden');
}

toggleMenu.addEventListener('click', showMenu);
window.addEventListener('scroll', hideMenu);


