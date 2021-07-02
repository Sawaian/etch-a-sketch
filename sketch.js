



let cellCreation = function(){
for(i = 0; i < 256; ++i){
    let pixl = document.querySelector('#cell');
    let pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.setAttribute('id', "pixel");
    pixl.appendChild(pixel);
    document.getElementById("pixel").textContent = "Test"; //It should show test 16 times
    // but it isn't. I'm missing something here and I'm not sure what.
    // When the for loop executes, it brings in all of this content. 
    //cell is selection, we create element p.
    //Is it possible that it's overwriting itself?

    // changes color of background.


    let divColor = document.getElementById( 'pixel' );
    divColor.onmouseover = function() {
      this.style.backgroundColor = 'green';
      let pixelColor = this.getElementsByTagName( 'pixelColor' );
      pixelColor[0].style.backgroundColor = 'green';
    };

}
}
window.addEventListener(onload, cellCreation());