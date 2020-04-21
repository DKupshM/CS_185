var enlargedImage = document.getElementById("enlarged-image");

var enlargedImageContent = document.getElementById("img01");

function showImage(imgID) {
    enlargedImage.style.display = "Block";
    enlargedImageContent.src = document.getElementById(imgID).src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    enlargedImage.style.display = "none";
}