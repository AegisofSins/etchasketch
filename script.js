//1. Create 100rem x 100rem HTML container
//2. Create 
const main = document.getElementById('main');
const grid = document.createElement('div');
const value = document.querySelector('#value');
const input = document.querySelector('.slider');
const clearN = document.querySelector('.clearNotepad');
let colorPicker = new iro.ColorPicker('#picker', {
  width: 200,
});



let size = input.value;
  input.addEventListener('input', () => { 
  size = input.value; 
  return size;})

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//CONTAINER
main.appendChild(grid);
grid.classList.add('grid');

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('gridElement')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement);
    }
  }

//COLOR SELECTOR
colorPicker.on('color:change', e => {
  color = e.hexString;
  return color;
});

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown ) return;
    else {e.target.style.backgroundColor = color}
}


//GRID SELECTOR
value.textContent = ('Grid Size: ' + input.value + ' x ' + input.value);
input.addEventListener('input', e => {
  value.textContent = (e.target.value + ' x ' + e.target.value)
})


//GRID RESET
function gridReset(){
  elem = grid.children;
  for (let i = elem.length - 1; i >= 0; --i) {
    elem[i].removeAttribute('style');
  }
}
clearN.addEventListener('click', () => gridReset());


//ON WINDOWS LOAD
window.onload = setupGrid(size);
input.addEventListener('input', () => {
  gridReset();
  setupGrid(input.value);});





