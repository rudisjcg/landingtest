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

console.log(menu);




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


buttonMenuOpen.addEventListener('click', openMenu);

buttonMenuClose.addEventListener('click', closeMenu);