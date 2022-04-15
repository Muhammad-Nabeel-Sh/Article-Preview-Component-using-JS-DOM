const breakAttr = document.getElementById("attr-break");
const mediaQuery = window.matchMedia("(min-width: 768px)");
const avatarBio = document.getElementById("avatar-bio");
const shareSection = document.getElementById("share");
const activeButton = document.getElementById("share-button");
const activeButtonIcon = document.getElementById("share-icon");

function shareButton() {
    activeButton.style.backgroundColor = "hsl(214, 17%, 51%)";
    activeButtonIcon.style.filter = "invert(1) brightness(500%)";

    if (avatarBio.style.display = "flex") {
        if (mediaQuery.matches) {
            avatarBio.style.display = "flex";
            shareSection.style.display = "flex";
        }
        else {
        avatarBio.style.display = "none";
        shareSection.style.display = "flex";
        activeButton.style.display = "flex";
        activeButtonIcon.style.display = "flex";
        activeButton.style.bottom = "23px";
        activeButton.style.width = "30px";
        activeButton.style.height = "30px";
        }
    }
    else {
        avatarBio.style.display = "flex";
        shareSection.style.display = "none";
    }


    // document.getElementById("author-container").style.display = "none";
    // document.getElementById("share").style.display = "flex";
}


if (mediaQuery.matches) {
    breakAttr.remove()
}

function mouseAway() {
    avatarBio.style.display = "flex";
    shareSection.style.display = "none";
    activeButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    activeButtonIcon.style.filter = "none";
    
    if (!mediaQuery.matches) {
        activeButton.style.bottom = "";
        activeButton.style.width = "45px";
        activeButton.style.height = "45px";
    }
}
