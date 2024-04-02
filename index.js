
const data = [
    {
        id: "abc123",
        title: "Technology",
        description: ["Innovation", "Development", "Progress"]
    },
    {
        id: "def456",
        title: "Healthcare",
        description: ["Wellness", "Medical Care", "Healthy Living"]
    },
    {
        id: "ghi789",
        title: "Education",
        description: ["Learning", "Knowledge", "Growth"]
    },
    {
        id: "jkl012",
        title: "Finance",
        description: ["Investment", "Budgeting", "Financial Planning"]
    },
    {
        id: "mno345",
        title: "Hospitality",
        description: ["Service", "Comfort", "Hospitality"]
    }
];


let buttonMenuOpen = document.querySelector('.menu-icon-open');
let buttonMenuClose = document.querySelector('.menu-icon-close');
let menu = document.querySelector('.nav-menu-lists');


function menuResponsive() {
    if (window.innerWidth < 768) {
        menu.classList.add('open-menu');
    } else {
        menu.classList.remove('open-menu');
    }
}

function menuData() {
    let menuList = document.querySelector('.nav-menu-wrapper');
    data.forEach((item) => {
        let menuItem = document.createElement('article');
        menuItem.classList.add('nav-menu-item');

        menuItem.innerHTML = `
            <div id={${item.title}} class="menu-list-container">
                <h3>${item.title}</h3>
                <div class="line-divide"></div>
                <ul>
                    ${item.description.map((desc) => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
        menuList.appendChild(menuItem);
    });
}

function closeMenuData() {
    let menuList = document.querySelector('.nav-menu-wrapper');
    menuList.innerHTML = '';
}


function openMenu() {
    if (buttonMenuOpen.classList.contains('open')) {
       buttonMenuOpen.classList.remove('open');
       buttonMenuClose.classList.add('open');
   }

   if (!menu.classList.contains('open-menu')) {
       menu.classList.add('open-menu');
       menuData();
   } else {
       menu.classList.remove('open-menu');
   }
}

function closeMenu() {
    if (buttonMenuClose.classList.contains('open')) {
       buttonMenuClose.classList.remove('open');
       buttonMenuOpen.classList.add('open');
       console.log('entro')
   }

   if (menu.classList.contains('open-menu')) {
       menu.classList.remove('open-menu');
       closeMenuData();
   } else {
       menu.classList.add('open-menu');
   }
}


function openMenuDynamic(item, itemsArr) {
    let itemSelected;
    let itemWrapper = item.querySelector('.content_image');
    let itemArr = Array.from(itemWrapper.classList);

    if (itemsArr && item && itemsArr.length > 0) {
        itemsArr.forEach((item) => {
            var itemOpen = item.querySelector('.content_image');
            if (itemOpen.classList.contains('links-show')) {
                itemOpen.classList.remove('links-show');
            }
        });
    }

    if (item.classList.contains('image_content_wrapper')) {
        
        itemSelected = item.querySelector('.content_image');
    }

    if (itemWrapper) {
        if (itemArr.length > 0 && itemArr.includes('links-show')) {
            
            itemWrapper.classList.remove('links-show');
        }  else {
            
            itemWrapper.classList.add('links-show');
        }
    }
    
}


function menuRender(menu, btn, arr, btns) {
    console.log(btns)
    let menuItemActive = null;
    var currentMenuListItems = menu.querySelectorAll('.menu-list-items');

    currentMenuListItems.forEach((item, index) => {
        if (index === 0) {
            console.log(item.dataset)
            menuItemActive = item.dataset.list;
        }
    })

    console.log(menuItemActive)
    console.log(currentMenuListItems)

    if (menuItemActive !== null) {
        currentMenuListItems.forEach((item, index) => {
            if (item.dataset.list === menuItemActive) {
                console.log(item)

                item.classList.add('show');
            }
        });
    }

    if (menu && btn && arr) {
        if (!menu.classList.contains('open-menu')) {
            menu.classList.add('open-menu');
        } else {
            menu.classList.remove('open-menu');
        }
        if (!btn.classList.contains('openMenu')) {
            btn.classList.add('openMenu');
        } else { 
            btn.classList.remove('openMenu');
        }
    }
}

function menuRenderItems() {

}


buttonMenuOpen.addEventListener('click', openMenu);

buttonMenuClose.addEventListener('click', closeMenu);

document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll(".menu-list li");
    var prevMenuList = null;
    var prevMenuListItems = [];
    var arrItemsFilter = [];
    var menuShowItems = document.querySelector('.menu-list__show');
    var menuContainer = document.querySelector('.menu-container__show')
    var prevBoton = null;
    var prevArrow = null;
    var prevNavBtn = null;
    let prevItemSelected;
    var label = document.createElement("label");
    var navListButtons = document.querySelectorAll('.nav_container li')
    var dynamicButons = document.querySelectorAll('.image_content_wrapper')

    if (navListButtons.contains) {}

    

    dynamicButons.forEach(function(boton, index) {
        boton.addEventListener("click", function(e) {
            e.preventDefault();
            prevItemSelected = boton;
            
            openMenuDynamic(boton, dynamicButons)
        });
    });
            

    navListButtons.forEach(function(boton, index) {

        if (boton.classList.contains('menu-nav-li')) {
            arrItemsFilter.push(boton);
        }

        boton.addEventListener("click", function(e) {
            e.preventDefault();
            var menuContainer = boton.querySelector('.menu-container');
            var trueBoton = boton.querySelector('button');

            menuRender(menuContainer, trueBoton, arrItemsFilter, botones)
        });

    })
    
    botones.forEach(function(boton, index) {
      boton.addEventListener("click", function() {
        var buttonMenuItem = boton.querySelector('.menu-list-items');
        var currentMenuListItems = buttonMenuItem.querySelectorAll('div');
        var currentBtn = boton.querySelector('button');
        var arrow = currentBtn.querySelector('span')
        var btnText = currentBtn.textContent;


        menuRenderItems(buttonMenuItem, currentMenuListItems, currentBtn, arrow, btnText);

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

