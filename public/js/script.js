const root = "./img/landingPagePics/";
const timer = 2500;

let images = [
  {
    source: "1.jpeg",
    class: "border landscape",
    link: "projects/daskomischegefuehl",
  },
  {
    source: "2.jpeg",
    class: "border landscape",
    link: "hg ",
  },
  {
    source: "3.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "4.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "5.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "6.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "7.jpeg",
    class: "border landscape",
    link: "projects/heiligeili",
  },
  {
    source: "8.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "9.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "10.jpeg",
    class: "border portrait",
    link: "projects/heiligeili",
  },
  {
    source: "11.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "12.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "13.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "14.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "15.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "16.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "17.jpeg",
    class: "border portrait",
    link: "projects/heiligeili",
  },
  {
    source: "18.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "19.jpeg",
    class: "border landscape",
    link: "projects/daskomischegefuehl",
  },
  {
    source: "20.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "21.jpeg",
    class: "border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "22.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "23.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "24.jpeg",
    class: "border landscape",
    link: "projects/heiligeili",
  },
  {
    source: "25.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "26.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "27.jpeg",
    class: "border landscape",
    link: "projects/daskomischegefuehl",
  },
  {
    source: "28.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
  {
    source: "29.png",
    class: "no-border landscape",
    link: "projects/diary",
  },
  {
    source: "30.png",
    class: "no-border landscape",
    link: "projects/goodluckaroundeveryturn",
  },
];

let image1 = document.getElementById("image");
let link = document.getElementById("link");
let image2 = document.createElement("img");
link.appendChild(image2);
let n = Math.floor(Math.random() * images.length);
let flag = false;
let imageIndex;

function preload1() {
  image1.classList = images[imageIndex].class;
  link.href = images[imageIndex].link;
  image2.style.display = "none";
  image1.style.display = "initial";
  console.log("1");
}
function preload2() {
  image2.classList = images[imageIndex].class;
  link.href = images[imageIndex].link;
  image1.style.display = "none";
  image2.style.display = "initial";
  console.log("2");
}

function setImage(noRecursion) {
  n++;
  imageIndex = n % images.length;
  if (flag) {
    image1.src = root + images[imageIndex].source;
    flag = false;
  } else {
    image2.src = root + images[imageIndex].source;
    flag = true;
  }
  if (!noRecursion) {
    setTimeout(setImage, timer);
  }
}
document.body.addEventListener("click", function () {
  setImage(true);
});
image1.addEventListener("load", preload1);
image2.addEventListener("load", preload2);
setImage();
