const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//Inserisco in pagina tutte le immagini del carosello in modo dinamico (tramite js)

const containerCarousel = document.querySelector(".my-carousel-images");
// console.log(containerCarousel);


images.forEach((curImage) => {
  // console.log(curImage);

  containerCarousel.innerHTML += `
  <div class="my-carousel-item"carousel-item="1"> 
  <img class="img-fluid" src="${curImage.image}" alt="Ratchet & Clank: Rift Apart"/>
    <div class="item-description px-3">
      <h2>${curImage.title} </h2>
      <p>${curImage.text}</p>
    </div>
  </div>
  `;
});


//Aggiugno la prima slide che deve essere visualizzata

const slide = document.querySelectorAll(".my-carousel-item");
// console.log(slide);

let activeIndex = 0;

slide[activeIndex].classList.add("active");

//Prelevo gli elementi next e previus per far scorrere il carosello

const next = document.querySelector(".my-next");
console.log(next);

const previous = document.querySelector(".my-previous");
console.log(previous);

//Aggiungo gli eventi al click di next e previous

next.addEventListener("click", nextImage);
previous.addEventListener ("click", previousImage);

function nextImage() {
  slide[activeIndex].classList.remove("active");
    if (activeIndex < images.length - 1) {
      activeIndex++
    } else {
      activeIndex = 0;
    }
    slide[activeIndex].classList.add("active");
}

function previousImage (){
  slide [activeIndex].classList.remove ("active");
  if (activeIndex > 0 ) {
    activeIndex --
  } else {
    activeIndex = images.length -1;
  }
  slide[activeIndex].classList.add("active");
}


