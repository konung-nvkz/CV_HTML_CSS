import './index.scss';
import image from './img/photo_main.jpg';

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Собираем резюме!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)
const img = new Image();

// const anchors = document.querySelectorAll('a.menu_link')

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     })
//     })
// }
// Smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

