import './styles.css'
const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let state = 0

add.addEventListener('click', () => {
  state++
  render()
})

sub.addEventListener('click', () => {
  state--
  render()
})

asyncBtn.addEventListener('click', () => {
  console.log('asyncBtn')
  setTimeout(() => {
    state++
  }, 2000)
  render()
})

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  render()
})

function render() {
  counter.textContent = state.toString()
}
render()
