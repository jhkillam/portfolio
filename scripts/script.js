document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelector('.sidenav')
  const instances = M.Sidenav.init(elems)
})

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.collapsible');
  const instances = M.Collapsible.init(elems);
})

const image = new Image();
const element = document.getElementsByClassName("hero-img")[0];

image.onload = () => {
  element.style.backgroundImage = "url('../img/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg')";
  element.style.animationPlayState = "running";
}
image.src = "../img/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg";
if (image.complete) image.onload();