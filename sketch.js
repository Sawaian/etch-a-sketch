


//function reset(){
  //cellCreation();

  //}


let cellCreation = function(){
for(i = 0; i < 256; ++i){
    let pixl = document.querySelector('#cell');
    let pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.setAttribute('id', "pixel");
    pixl.appendChild(pixel);
    document.getElementById("pixel").textContent = "Test"; 

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