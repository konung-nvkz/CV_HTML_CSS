// Smooth scroll and pageup
// // jquery
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1000) {
//         $('.pageup').fadeIn();
//     } else {
//         $('.pageup').fadeOut();
//     }
// });

// $("a[href^='#']").click(function(){
//     const _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//     return false;
// });

//JS
// добавляем скрипт, который покажет стрелку, если мы опукаемся вниз экрана.
document.addEventListener("scroll", (event) => {
    if (window.scrollY > 1000) {
        document.querySelector('.pageup').style.display = "block";
    } else {
        document.querySelector('.pageup').style.display = "none";
    }
});

// document.querySelectorAll('a[href^="#"').forEach(link => {

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         let href = this.getAttribute('href').substring(1);
//         console.log(this.getAttribute('href'))
        

//         const scrollTarget = document.getElementById(href);

//         const topOffset = document.querySelector('.experience').offsetHeight;
//         // const topOffset = 0; // если не нужен отступ сверху 
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// });