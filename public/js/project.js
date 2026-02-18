const mainImg = document.getElementById("mainImg")

const images = document.getElementById("images").getElementsByTagName("img")
for(let img of images){
    img.onclick = function(){
        showImage(img)
    }
}

const textSlides = document.querySelectorAll(".textSlide")
for(let slide of textSlides){
    slide.onclick = function(){
        showText(slide)
    }
}

function showImage(img){
    mainImg.src = img.src.replace("sd","hd")
    mainImg.style.display = "block"
    const textDisplay = document.getElementById("textDisplay")
    if(textDisplay) textDisplay.style.display = "none"
}

function showText(slide){
    mainImg.style.display = "none"
    
    let textDisplay = document.getElementById("textDisplay")
    if(!textDisplay){
        textDisplay = document.createElement("div")
        textDisplay.id = "textDisplay"
        mainImg.parentNode.appendChild(textDisplay)
    }
    
    textDisplay.innerText = slide.dataset.text
    textDisplay.style.display = "block"
}