let navBar = document.querySelector("#navbar");
function togglebtn() {
  navBar.classList.toggle("hidemenu");
}

// single product
let mainImage = document.getElementById("main-image");
let smallImage = document.getElementsByClassName("image");

smallImage[0].onclick = () => {
  mainImage.src = smallImage[0].src;
};

smallImage[1].onclick = () => {
  mainImage.src = smallImage[1].src;
};

smallImage[2].onclick = () => {
  mainImage.src = smallImage[2].src;
};


