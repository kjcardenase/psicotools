import scrollTopButton from '../js/scroll.js';
import slider from './slider.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    scrollTopButton('.scroll-top-btn');
    slider();
});
