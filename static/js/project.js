const mainImg = document.getElementById("mainImg")

// Alle Galerie-Elemente (Bilder UND Text) sammeln
const galleryItems = []
const imagesContainer = document.getElementById("images")
if(imagesContainer) {
    const listItems = imagesContainer.querySelectorAll("li")
    listItems.forEach(li => {
        const img = li.querySelector("img")
        const textSlide = li.querySelector(".textSlide")
        if(img) {
            galleryItems.push({type: 'image', element: img})
        } else if(textSlide) {
            galleryItems.push({type: 'text', element: textSlide})
        }
    })
}

let selected = 0

function _init(){
    _setInitImage()
    let id = 0
    
    for(let item of galleryItems){
        item.id = "item" + id
        item.element.onclick = function(){
            showItem(item)
        }
        id++
    }

    function _setInitImage(){
        let a = Number(("" + window.location).split("#")[1].replace("item",""))
        if(galleryItems[a]){
            showItem(galleryItems[a])
        }
    }
}

function showItem(item){
    selected = galleryItems.indexOf(item)
    
    if(item.type === 'image'){
        showImage(item.element)
    } else if(item.type === 'text'){
        showText(item.element)
    }
    
    _setUrl(item.id)
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

function slideLeft(){
    _slide(-1)
}

function slideRight(){
    _slide(1)
}

function _slide(d){
    selected += d
    selected = (galleryItems.length + selected) % galleryItems.length
    let item = galleryItems[selected]
    showItem(item)
}

function _setUrl(id){
    if(!id) return
    window.location = window.location.origin + window.location.pathname + "#" + id
}

window.addEventListener("DOMContentLoaded",_init)