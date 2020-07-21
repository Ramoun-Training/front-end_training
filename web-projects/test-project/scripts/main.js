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
    img = document.querySelector('img');
    let mysrc = img.src;
    let imgsize = "800/420"

    if (mysrc === "http://127.0.0.1:5500/web-projects/test-project/images/odin_logo.png") {
        img.src = "https://placekitten.com/" + imgsize
    } else {
        img.src = "http://127.0.0.1:5500/web-projects/test-project/images/odin_logo.png"
    }
}