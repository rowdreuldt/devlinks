function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // se tiver o light mode, adicionar a imagem light

  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/profile-light.jpg")
    img.setAttribute("alt", "Foto de Perfil do Criador Light")
    
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/pedroerthal_AS.png")
    img.setAttribute("alt", "Foto de Perfil do Criador Dark")
  }
  }
