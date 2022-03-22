// efeitos botao projetos
let btn01 = document.querySelector('.btn01')

btn01.addEventListener('mouseover', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(90deg)'
})

btn01.addEventListener('mouseout', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
})

btn01.addEventListener('click', function () {
  let imgarrow = document.querySelector('.img02')
  let projeto = document.querySelector('.projeto')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
  imgarrow.style.left = '10%'
  btn01.style.opacity = '0'
  btn01.style.visibility = 'hidden'
  projeto.style.opacity = '1'
  projeto.style.visibility = 'visible'
  projeto.style.left = '50%'
})

// efeito rede social
let face = document.querySelector('.face')
let insta = document.querySelector('.insta')
let tube = document.querySelector('.tube')
let whats = document.querySelector('.whats')

face.addEventListener('mouseover', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(120deg)'
})

face.addEventListener('mouseout', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
})

insta.addEventListener('mouseover', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(100deg)'
})

insta.addEventListener('mouseout', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
})

tube.addEventListener('mouseover', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(80deg)'
})

tube.addEventListener('mouseout', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
})

whats.addEventListener('mouseover', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(60deg)'
})

whats.addEventListener('mouseout', function () {
  let imgarrow = document.querySelector('.img02')
  imgarrow.style.transform = 'translate(-50%, -50%) rotate(0deg)'
})

// efeitos section projeto

let btn02 = document.querySelector('.btn02')

btn02.addEventListener('click', function () {
  let imgarrow = document.querySelector('.img02')
  let projeto = document.querySelector('.projeto')
  let btn01 = document.querySelector('.btn01')

  btn01.style.opacity = '1'
  btn01.style.visibility = 'visible'
  imgarrow.style.left = '50%'
  projeto.style.opacity = '0'
  projeto.style.visibility = 'hidden'
  projeto.style.left = '150%'
})
