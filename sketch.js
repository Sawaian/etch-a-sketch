
let etchSize = parseInt(prompt());



let cellCreation = function(){

let grid = etchSize * etchSize;

for(i = 0; i < grid; ++i){

    let container = document.querySelector('#container');
    let pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.setAttribute('id', "pixel");

    container.style.gridTemplateColumns = `repeat(${etchSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${etchSize}, 1fr)`;
    
    container.appendChild(pixel);                                                

    // changes color of background.
    pixel.addEventListener('mouseover', function(){
      pixel.style.background = 'pink';
    });


      let btn = document.querySelector('#reset');
      btn.addEventListener('click', ()=> {
      pixel.style.background = 'white';
      });

    

    }
}
window.addEventListener(onload, cellCreation());