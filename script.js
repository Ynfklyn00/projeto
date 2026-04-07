function toggleMode() {
  const  html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  //OU HTML.CLASSLIST.TOGGLE('LIGHT') PARA MES AÇÃO ACIMA

  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/ynfklyn3.png')
  } else {
    img.setAttribute('src', './assets/ynfklyn2.png')
  }
}