// nav-image changer for responsiveness
const image = document.getElementById("myImage");

function updateImageSrc() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    image.src = "./images/1Asset-26-2048x320.webp";
  } else {
    image.src = "./images/1Asset-25-2048x320.webp";
  }
}
window.onresize = updateImageSrc;
updateImageSrc();




// scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.remove("d-none");
  } else {
    scrollToTopBtn.classList.add("d-none");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const myElement = document.getElementById("myElement");
function Mouseeeee() {
  myElement.addEventListener("mouseenter", () => {
    myElement.classList.add("fa-beat");
  });

  myElement.addEventListener("mouseleave", () => {
    myElement.classList.remove("fa-beat");
  });  
}
Mouseeeee()






