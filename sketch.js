
   const gridSize = 10;
   let grid = gridSize * gridSize;
   let container = document.querySelector('#container');

   

 let divGrid = function() {  
  for(i = 0; i < grid; ++i){
      cellCreation();
     }
    }

  

  let cellCreation = function(){

      let pixel = document.createElement('div');
      pixel.classList.add("pixel");
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



container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
window.addEventListener(onload, divGrid());