const mainImg = document.getElementById("mainImg")

const images = document.getElementById("images").getElementsByTagName("img")
for(let img of images){
    img.onclick = function(){
        showImage(img)
    }
}

function showImage(img){
    mainImg.src =  img.src.replace("sd","hd")
}