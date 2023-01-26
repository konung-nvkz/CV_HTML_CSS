// Скрипт для бокового меню
// объявляем переменные для использования
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
  
closeElem = document.querySelector('.menu__close');
//callback функция
hamburger.addEventListener('click', () => {
    menu.classList.add('active'); 
});
// эта часть скрывает меню при нажатии крестика сверху
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');  
});

//Скрипт для автоматического выставления рейтигов по навыкам
const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//JS
// добавляем скрипт, который покажет стрелку, если мы опукаемся вниз экрана.
// document.addEventListener("scroll", (event) => {
//   if (window.scrollY > 1000) {
//       document.querySelector('.pageup').style.display = "block";
//   } else {
//       document.querySelector('.pageup').style.display = "none";
//   }
// });