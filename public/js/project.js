const mainImg = document.getElementById("mainImg")

const images = [].slice.call(document.getElementById("images").getElementsByTagName("img"))

let selected = 0

function _init(){
    _setInitImage()
    let id = 0
    for(let img of images){
        img.id = "image" + id
        img.onclick = function(){
            showImage(img)
        }
        id++
    }

    function _setInitImage(){
        let a = Number(("" + window.location).split("#")[1].replace("image",""))
        if(images[a]){
            showImage(images[a])
        }
    }
}

<<<<<<< HEAD
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
=======
function showImage(img){
    selected = images.indexOf(img)
    mainImg.src =  img.src.replace("sd","hd")
    _setUrl(img.id)
}

function slideLeft(){
    _slide(-1)
}

function slideRight(){
    _slide(1)
}

function _slide(d){

    selected += d
    selected = (images.length + selected) % images.length
    let img = images[selected]
    showImage(img)
    _setUrl(img.id)
}

function _setUrl(id){
    window.location = window.location.origin + window.location.pathname + "#" + id
}

window.addEventListener("DOMContentLoaded",_init)
>>>>>>> 79cb1635390c75ab49d6d61b5adf35384a5d430d
