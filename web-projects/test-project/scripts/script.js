// https://theodinproject.com/sign_up?ref=homenav

function openOdinSignupPage(){
    
}

function changeToRamoun() {
    // I Like to Play
    const heading = document.querySelector('h1');

    if (heading.textContent == "The Odin Project") {
        heading.textContent = "R}AM#UN>";    
    } else {
        heading.textContent = "The Odin Project"
    }
}

function changeImage() {
    let rose_image = "https://www.ikea.com/eg/en/images/products/smycka-artificial-flower-rose-red__0636963_PE698124_S5.JPG?f=s"
    let odin_image = "images/og-logo-003bdac3098010b4f1143000a941b80c67eebd74fbc6f36b2e7ef92dd03e8020.png"

    // let image = document.querySelector("img").src
    // alert(image)
    document.querySelector("img").src = rose_image
    document.querySelector("img").click

    if (image.src == odin_image) {
        image.src = rose_image
    } else {
        image.src = odin_image
    }

}