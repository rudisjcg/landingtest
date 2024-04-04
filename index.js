const data = [
  {
    id: "abc123",
    title: "Technology",
    description: ["Innovation", "Development", "Progress"],
  },
  {
    id: "def456",
    title: "Healthcare",
    description: ["Wellness", "Medical Care", "Healthy Living"],
  },
  {
    id: "ghi789",
    title: "Education",
    description: ["Learning", "Knowledge", "Growth"],
  },
  {
    id: "jkl012",
    title: "Finance",
    description: ["Investment", "Budgeting", "Financial Planning"],
  },
  {
    id: "mno345",
    title: "Hospitality",
    description: ["Service", "Comfort", "Hospitality"],
  },
];

let buttonMenuOpen = document.querySelector(".menu-icon-open");
let buttonMenuClose = document.querySelector(".menu-icon-close");
let menu = document.querySelector(".nav-menu-lists");
let menuStatus;

var botones = document.querySelectorAll(".menu-list li");
var prevMenuList = null;
var prevMenuListItems = [];
var arrItemsFilter = [];
var menuShowItems = document.querySelector(".menu-list__show");
var menuContainer = document.querySelector(".menu-container__show");
var prevBoton = null;
var prevArrow = null;
var prevNavBtn = null;
let prevItemSelected;
var label = document.createElement("label");
var navListButtons = document.querySelectorAll(".nav_container li");
var dynamicButons = document.querySelectorAll(".image_content_wrapper");
var actualItemsSel;
var prevItemSel = null;

function menuResponsive() {
  if (window.innerWidth < 768) {
    menu.classList.add("open-menu");
  } else {
    menu.classList.remove("open-menu");
  }
}

function menuData() {
  let menuList = document.querySelector(".nav-menu-wrapper");
  data.forEach((item) => {
    let menuItem = document.createElement("article");
    menuItem.classList.add("nav-menu-item");

    menuItem.innerHTML = `
            <div id={${item.title}} class="menu-list-container">
                <h3>${item.title}</h3>
                <div class="line-divide"></div>
                <ul>
                    ${item.description
                      .map((desc) => `<li>${desc}</li>`)
                      .join("")}
                </ul>
            </div>
        `;
    menuList.appendChild(menuItem);
  });
}

function closeMenuData() {
  let menuList = document.querySelector(".nav-menu-wrapper");
  menuList.innerHTML = "";
}

function openMenuStatic() {
  if (buttonMenuOpen.classList.contains("open")) {
    buttonMenuOpen.classList.remove("open");
    buttonMenuClose.classList.add("open");
  }

  if (!menu.classList.contains("open-menu")) {
    menu.classList.add("open-menu");
    menuData();
  } else {
    menu.classList.remove("open-menu");
  }
}

function closeMenu() {
  if (buttonMenuClose.classList.contains("open")) {
    buttonMenuClose.classList.remove("open");
    buttonMenuOpen.classList.add("open");
  }

  if (menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    closeMenuData();
  } else {
    menu.classList.add("open-menu");
  }
}

buttonMenuOpen.addEventListener("click", openMenuStatic);

buttonMenuClose.addEventListener("click", closeMenu);

function openMenuDynamic(item, itemsArr) {
  let itemSelected;
  let itemWrapper = item.querySelector(".content_image");
  let itemArr = Array.from(itemWrapper.classList);

  if (itemsArr && item && itemsArr.length > 0) {
    itemsArr.forEach((item) => {
      var itemOpen = item.querySelector(".content_image");
      if (itemOpen.classList.contains("links-show")) {
        itemOpen.classList.remove("links-show");
      }
    });
  }

  if (item.classList.contains("image_content_wrapper")) {
    itemSelected = item.querySelector(".content_image");
  }

  if (itemWrapper) {
    if (itemArr.length > 0 && itemArr.includes("links-show")) {
      itemWrapper.classList.remove("links-show");
    } else {
      itemWrapper.classList.add("links-show");
    }
  }
}

function openMenu(menu, btn, btns) {
  if (btns) {
    btns.forEach((btn, index) => {
      var buttonMenuItem = btn.querySelector(".menu-list-items");
      // Restablecer el estado de selección de los elementos del menú
      buttonMenuItem.dataset.selected = false;
      if (index === 0) {
        menuRenderItems(btn);
      }
    });
  }

  if (menu && btn) {
    menu.classList.toggle("open-menu");
    btn.classList.toggle("openMenu");
  }
}

function menuRenderItems(btn) {
  var buttonMenuItem = btn.querySelector(".menu-list-items");
  var currentMenuListItems = Array.from(buttonMenuItem.querySelectorAll("div"));
  var currentBtn = btn.querySelector("button");
  var arrow = currentBtn.querySelector("span");
  var btnText = currentBtn.textContent;

  console.log(buttonMenuItem)

  menuContainer.appendChild(label);
  label.textContent = btnText;

  // Limpiar elementos previos del menú mostrado
  if (prevMenuList !== null) {
    prevMenuList.dataset.selected = false;
    prevMenuListItems.forEach((item) => {
      prevMenuList.appendChild(item);
      item.classList.remove("show");
    });
    prevMenuListItems = [];
  }

  menuShowItems.innerHTML = "";

  if (currentMenuListItems) {
    // Solo mover y mostrar elementos si no han sido seleccionados antes
    if (buttonMenuItem.dataset.selected !== "true") {
      buttonMenuItem.dataset.selected = true;

      currentMenuListItems.forEach((item, index) => {
        menuShowItems.appendChild(item);
        prevMenuListItems.push(item);
        setTimeout(function () {
          item.classList.add("show");
        }, index * 100);
      });
    }
  }

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

  console.log(
    btn,
    buttonMenuItem,
    currentMenuListItems,
    currentBtn,
    arrow,
    btnText,
    menuContainer,
    label,
    menuShowItems,
    prevMenuList,
    prevMenuListItems,
    prevBoton,
    prevArrow
  );
}

document.addEventListener("DOMContentLoaded", function () {
  dynamicButons.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      prevItemSelected = boton;

      openMenuDynamic(boton, dynamicButons);
    });
  });

  navListButtons.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      var menuContainer = boton.querySelector(".menu-container");
      var trueBoton = boton.querySelector("button");

      openMenu(menuContainer, trueBoton, botones);
    });
  });

  botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      e.stopPropagation();
      menuRenderItems(boton);
    });
  });
});
