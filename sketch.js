



function cellCreation(){
for(i = 0; i < 16; ++i){
    let pixl = document.querySelector('#cell');
    let pixel = document.createElement('p');
    pixel.setAttribute('id', "pixel");
    pixl.appendChild(pixel);
    document.getElementById("pixel").textContent = "Test";
}

}

cellCreation();