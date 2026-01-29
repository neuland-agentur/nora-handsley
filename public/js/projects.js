const mainImg = document.getElementById("mainImg")

const links = document.getElementById("main").getElementsByTagName("a")
for(let a of links){
    const images = a.getElementsByTagName("img")
    for(let img of images){
        img.src = a.href + img.src.slice(img.src.indexOf("projects/")).replace("projects/","")
    }
}