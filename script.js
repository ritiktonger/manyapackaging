// Year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});

// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger?.addEventListener('click', () => {
  const open = getComputedStyle(menu).display !== 'none';
  menu.style.display = open ? 'none' : 'flex';
  menu.style.flexDirection = 'column';
  menu.style.gap = '14px';
  burger.setAttribute('aria-expanded', String(!open));
});

// Search toggle
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
searchBtn?.addEventListener('click', () => {
  const show = getComputedStyle(searchBar).display !== 'none';
  searchBar.style.display = show ? 'none' : 'flex';
});

// Slider (only on pages that have .slides)
let current = 0;
const slides = document.getElementById('slides');
const dots = Array.from(document.querySelectorAll('.dots button'));
function go(i){
  if(!slides || dots.length===0) return;
  current = (i + dots.length) % dots.length;
  slides.style.transform = `translateX(${-100 * current}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}
dots.forEach((d,i) => d.addEventListener('click', () => go(i)));
if(slides){ setInterval(() => go(current + 1), 5000); go(0); }

// Modals ------->//
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target == modal) modal.style.display = "none";
  });
}