
let etchSize = parseInt(prompt());



let cellCreation = function(){

let grid = etchSize * etchSize;
for(i = 0; i < grid; ++i){
    let pixl = document.querySelector('#cell');
    let pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.setAttribute('id', "pixel");
    pixl.appendChild(pixel);

    cell.style.gridTemplateColumns = 'repeat($(etchSize), 1fr)';



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