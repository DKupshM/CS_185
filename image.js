var enlargedImage = document.getElementById("enlarged-image");

var enlargedImageContent = document.getElementById("img01");

function showImage(imgName) {
    enlargedImageContent.src = document.getElementById(imgName).src;
    enlargedImage.style.display = "block";
}

function closeImage() {
    enlargedImage.style.display = "none";
}