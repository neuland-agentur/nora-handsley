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

let image = document.getElementById("image");
let link = document.getElementById("link");
let n = Math.floor(Math.random() * images.length);

function setImage(noRecursion) {
  n++;
  let i = n % images.length;
  image.src = root + images[i].source;
  image.classList = images[i].class;
  link.href = images[i].link;
  if (!noRecursion) {
    setTimeout(setImage, timer);
  }
}
document.body.addEventListener("click", function () {
  setImage(true);
});
setImage();
