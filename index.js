let menuData = [
    {
        title: 'Home',

    }
]



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

document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll(".menu-list li");
    var prevMenuList = null;
    var prevMenuListItems = [];
    var menuShowItems = document.querySelector('.menu-list__show');
    var menuContainer = document.querySelector('.menu-container__show')
    var prevBoton = null;
    var prevArrow = null;
    var label = document.createElement("label");
    
    botones.forEach(function(boton, index) {
      boton.addEventListener("click", function() {
        var buttonMenuItem = boton.querySelector('.menu-list-items');
        var currentMenuListItems = buttonMenuItem.querySelectorAll('div');
        var currentBtn = boton.querySelector('button');
        var arrow = currentBtn.querySelector('span')
        var btnText = currentBtn.textContent;
        console.log(currentBtn, arrow)

        menuContainer.appendChild(label);
        label.textContent = btnText;
        if (prevMenuList !== null) {
          prevMenuListItems.forEach(item => {
            prevMenuList.appendChild(item);
            item.classList.remove("show");
          });
          prevMenuListItems = [];
        }
        
        menuShowItems.innerHTML = '';
        

        currentMenuListItems.forEach((item, index) => {
          menuShowItems.appendChild(item);
          prevMenuListItems.push(item);
          setTimeout(function() {
            item.classList.add("show");
          }, index * 100);
        });

        if (prevBoton !== null) {
            prevBoton.classList.remove("change_color");
            prevArrow.classList.remove("show_svg");
          }
    
          // Añadir la clase 'seleccionado' al botón actual
          currentBtn.classList.add("change_color");
          arrow.classList.add("show_svg");
    
          // Guardar el botón actual como el botón previo
          prevBoton = currentBtn;
          prevArrow = arrow;
        
        prevMenuList = buttonMenuItem;
      });
    });
  });