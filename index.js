

let buttonMenuOpen = document.querySelector('.menu-icon-open');
let buttonMenuClose = document.querySelector('.menu-icon-close');

console.log(buttonMenuOpen, buttonMenuClose);


function openMenu() {
     if (buttonMenuOpen.classList.contains('open')) {
        buttonMenuOpen.classList.remove('open');
        buttonMenuClose.classList.add('open');
    }
}

function closeMenu() {
     if (buttonMenuClose.classList.contains('open')) {
        buttonMenuClose.classList.remove('open');
        buttonMenuOpen.classList.add('open');
        console.log('entro')
    }
}


buttonMenuOpen.addEventListener('click', openMenu);

buttonMenuClose.addEventListener('click', closeMenu);