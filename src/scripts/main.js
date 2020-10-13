const nav_btn = document.querySelector('button[data-action="toggle-menu"]')
const nav = document.querySelector('nav')

nav_btn.addEventListener('click', () => {
  nav.classList.toggle('open')
})