var hamburguer = document.querySelector('.Side-hamburguer')

hamburguer.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('show-bar')
})
