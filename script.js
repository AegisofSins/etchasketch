//1. Create 100rem x 100rem HTML container
//2. Create 
const main = document.getElementById('main');
const grid = document.createElement('div');

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

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown ) return;
    
}





