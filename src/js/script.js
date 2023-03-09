
/*******Скрипты для бокового меню*/ 
// объявляем переменные для использования
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');    

//callback функция делает меню активным из невидимого
hamburger.addEventListener('click', () => {
    menu.classList.add('active'); 
});

// Эта часть скрывает меню 
function closeMenu() {
    menu.classList.remove('active'); 
}

// эта часть скрывает меню при нажатии крестика сверху
closeElem.addEventListener('click', () => {
    closeMenu();  
});
// будем закрывать меню при нажатии ESC
document.addEventListener('keydown', (e) => { // следим за нажатием клавиши
    if (e.code === "Escape" && menu.classList.contains('active')) {  //выбираем два условия
        // 1 - нажата клавиша ESC
        // 2 - меню окрыто
        closeMenu(); // закрываем меню
    }
});
// и при клике вне меню
menu.addEventListener('click', (e) => { //на меню повешаем обработчик события клика        
    if (e.target === menu){ //если пользователь кликнул вне меню, то
        closeMenu(); // закрываем меню
    }
});


/************ */


//Скрипт для автоматического выставления рейтингов по навыкам
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//JS
// добавляем скрипт, который покажет стрелку, если мы опускаемся вниз экрана.
document.addEventListener("scroll", (event) => {
if (window.scrollY > 1000) {
    document.querySelector('.pageup').style.display = "block";
} else {
    document.querySelector('.pageup').style.display = "none";
}
});
//JS
// добавляем скрипт, который покажет стрелку, если мы опуcкаемся вниз экрана.
// document.addEventListener("scroll", (event) => {
//     if (window.scrollY < (calc-1000) {
//         document.querySelector('.pagedown').style.display = "block";
//     } else {
//         document.querySelector('.pagedown').style.display = "none";
//     }
//     });

// //<script>
// // поместить все текстовые узлы в элемент <span>
// // он занимает только то место, которое необходимо для текста
// for (let li of tree.querySelectorAll('li')) {
//     let span = document.createElement('span');
//     li.prepend(span);
//     span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
//     }

//     //  ловим клики на всём дереве
//     tree.onclick = function(event) {

//     if (event.target.tagName != 'SPAN') {
//         return;
//     }

//     let childrenContainer = event.target.parentNode.querySelector('ul');
//     if (!childrenContainer) return; // нет детей

//     childrenContainer.hidden = !childrenContainer.hidden;
// }
// //</script>


