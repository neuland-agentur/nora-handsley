let root = "./img/"

            let images = [
                {
                    source: "1.jpg",
                    class: "border landscape",
                    link: "projects/heiligeili"
                },
                {
                    source: "2.png",
                    class: "no-border landscape",
                    link: "projects/heiligeili"
                },
                {
                    source: "3.jpg",
                    class: "border landscape",
                    link: "projects/heiligeili"
                },
                {
                    source: "4.jpg",
                    class: "border portrait",
                    link: "projects/heiligeili"
                }
            ]

            let image = document.getElementById("image")
            let link = document.getElementById("link")
            let n = 3
            
            function setImage(){
                n++
                let i = n % images.length
                image.src = root + images[i].source
                image.classList = images[i].class
                link.href = images[i].link
                setTimeout(setImage, 1000)
            }

            setImage()