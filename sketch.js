
   
   
   let btn = document.querySelector('#reset');
   btn.addEventListener('click', ()=> {
    reset();
    });
   let gridSize = parseInt(16);
   let grid = gridSize * gridSize;
   let container = document.querySelector('#container');
   let colorBtn = document.querySelector('#colorBtn');
   let etchColor = `pink`;

   
   function reset(){
     resetGrid();
     newGrid();
     cellCreation();
   }
  

   function newGrid(){
      gridSize = prompt();
      if (gridSize < 1 || gridSize > 100 || Number.isNaN(gridSize)){
      alert ('Choose a value between 1-100')
      newGrid();
      }
      else {
        newGridSize(gridSize);
      }
    }

    function newGridSize(){
      grid = gridSize * gridSize;
      return grid;
    }
 

  let cellCreation = function(){

      for(i = 0; i < grid; ++i){  
    
      let pixelContainer = document.createElement('div');
      pixelContainer.classList.add("pixel");
      container.appendChild(pixelContainer);

      let pixel = document.querySelectorAll('.pixel');
      pixel.forEach(pixel => pixel.addEventListener('mouseover', colorChange));

      container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        } 
      }


      function colorChange(){
        switch (etchColor){
        case 'pink':
          this.style.backgroundColor = 'pink';
        case 'rainbow':
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          break;
        }
      }
      
  function resetGrid() {
  const pixels = Array.from(container.childNodes);
  pixels.forEach((element) => {
    container.removeChild(element);
  });
    
      
    
  }


window.addEventListener(onload, cellCreation());