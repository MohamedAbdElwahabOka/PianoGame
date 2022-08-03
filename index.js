
for (var i = 0; i < document.querySelectorAll(".Piano").length; i++) {

    document.querySelectorAll(".Piano")[i].addEventListener("click", function () {
        var idelment = this.id;
        // console.log("ssssssssss");
        makeSound(idelment);
    });
}

document.addEventListener("keypress", function (event) {
    var keypressed = event.key;
    // console.log(keypressed);
    makeSound(keypressed);
});

function makeSound(key) {

    switch (key) {
        case "a":
            var audio = new Audio("Sounds/A.mp3");
            audio.play();

            break;
        case "s":
            var audio = new Audio("Sounds/S.mp3");
            audio.play();

            break;
        case "d":
            var audio = new Audio("Sounds/D.mp3");
            audio.play();

            break;
        case "f":
            var audio = new Audio("Sounds/F.mp3");
            audio.play();

            break;
        case "g":
            var audio = new Audio("Sounds/G.mp3");
            audio.play();

            break;
        case "h":
            var audio = new Audio("Sounds/H.mp3");
            audio.play();

            break;
        case "j":
            var audio = new Audio("Sounds/J.mp3");
            audio.play();

            break;
        case "k":
            var audio = new Audio("Sounds/K.mp3");
            audio.play();

            break;
        case "l":
            var audio = new Audio("Sounds/L.mp3");
            audio.play();

            break;

        default:
            break;
    }
}