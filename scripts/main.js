const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById("icon-close");

function handleMenuToggleClick() {
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    console.log('Menu Mobile Hidden Status:', mobileMenu.classList.contains('hidden'));
    console.log('Ikon Garis Hidden Status:', iconOpen.classList.contains('hidden'));
    console.log('Ikon X Hidden Status:', iconClose.classList.contains('hidden'));
}

menuToggle.addEventListener('click', handleMenuToggleClick);

