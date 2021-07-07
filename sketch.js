
   const gridSize = prompt();
   let grid = gridSize * gridSize;
   let container = document.querySelector('#container');
   let etchColor = `pink`;
  
  

  let cellCreation = function(){

    for(i = 0; i < grid; ++i){  
    
      let pixelContainer = document.createElement('div');
      pixelContainer.classList.add("pixel");
      container.appendChild(pixelContainer);

      let pixel = document.querySelectorAll('.pixel');
      pixel.forEach(pixel => pixel.addEventListener('mouseover', colorChange));

     // let btn = document.querySelector('#reset');
      //btn.addEventListener('click', ()=> {
     // pixel.style.background = 'white';
    //  });
    }

      // changes color of background.
    //  pixel.addEventListener('mouseover', function(event){
      //  pixel.style.background = 'pink';
      //});

  //  let rainbowButton = document.querySelector('#rainbow');
    //rainbowButton.addEventListener('click', () => {
      //document.this.style.background = colorChange();
      //console.log("Rainbow!")
   // });

      function colorChange(){
        switch (etchColor){
        case 'pink':
          this.style.backgroundColor = 'pink';
        console.log('mouse over works');

        case 'rainbow':
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } 
      }
    }
        //let colorChange = () =>{
        //Math.floor(Math.random() * 16777215);
        //document.this.style.backgroundColor = colorChange;
        //}

    
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
window.addEventListener(onload, cellCreation());