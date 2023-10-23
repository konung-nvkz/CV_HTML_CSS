/*Scripts for side menu*/
/*Initialize variables */

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');    

//Callback function that changes menu visibility by adding "active" status.
hamburger.addEventListener('click', () => {
    menu.classList.add('active'); 
});

// Hide menu by removing "active" status from it 
function closeMenu() {
    menu.classList.remove('active'); 
}

// Hide menu by clicking on the cross on top side
closeElem.addEventListener('click', () => {
    closeMenu();  
});

// Hide menu by pressing ESC.
//We add listener that works when both ESC button is pressed and menu is open; 
//Fulfillment of these conditions leads to a call of the function, that hides menu.
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menu.classList.contains('active')) {
        closeMenu();
    }
});

// The same logic when clicking off the menu:
//Listener looks if user clicks out of the menu field and calls the function, that hides menu.
menu.addEventListener('click', (e) => {       
    if (e.target === menu){
        closeMenu();
    }
});

/*****Other scripts used on page***/

//Script for automatic rating of skills
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//JS
// The script that will show an arrow if we go down the screen.
document.addEventListener("scroll", (event) => {
if (window.scrollY > 1000) {
    document.querySelector('.pageup').style.display = "block";
} else {
    document.querySelector('.pageup').style.display = "none";
}
});

