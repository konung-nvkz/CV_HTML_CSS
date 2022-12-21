import './index.scss';
import image from './img/photo_big.jpg';

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Здесь должно быть резюме!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)
const img = new Image();

