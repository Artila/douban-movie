// 屏幕大小改变
window.addEventListener('resize', setRem)
// 屏幕方向发生变化，横屏 or 竖屏
window.addEventListener('orientationchange', setRem)

function setRem () {
  let html = document.querySelector('html')
  let width = document.body.getBoundingClientRect().width

  html.style.fontSize = width / 16 + 'px'
}

setRem()
