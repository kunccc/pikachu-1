import string from './css.js'

const player = {
  n: 1,
  time: 50,
  id: undefined,
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: () => {
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.ui.html.innerText = string.substr(0, player.n)
    player.ui.style.innerHTML = string.substr(0, player.n)
    player.ui.html.scrollTop = player.ui.html.scrollHeight
    player.n += 1
    if(player.n > string.length){
      window.clearInterval(run)
    }
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  slow: () => {
    player.pause()
    player.time = 150
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 50
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 10
    player.play()
  }
}

player.init()