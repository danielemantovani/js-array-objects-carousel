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


// Seleziono i contenitori principali del carosello e delle miniature
const containerCarousel = document.querySelector(".my-carousel-images"); // Contenitore per le slide principali
const smallSlide = document.querySelector(".thumbnails-container"); // Contenitore per le miniature


// Genero dinamicamente le slide principali e le miniature
images.forEach((curImage) => {
  // Aggiungo le slide principali al carosello
  containerCarousel.innerHTML += `
    <div class="my-carousel-item">
      <img src="${curImage.image}" alt="${curImage.title}">
      <div class="item-description">
        <h2>${curImage.title}</h2>
        <p>${curImage.text}</p>
      </div>
    </div>
  `;

  // Aggiungo le miniature al contenitore delle miniature
  smallSlide.innerHTML += `
    <img class="img-fluid my-thumbnail" src="${curImage.image}" alt="${curImage.title}">
  `;
});

// Seleziono tutte le slide principali e le miniature
const slide = document.querySelectorAll(".my-carousel-item"); // Slide principali
const thumbnails = document.querySelectorAll(".my-thumbnail"); // Miniature

// Imposto la prima slide e la prima miniatura come attive
let activeIndex = 0; // Indice della slide attiva
slide[activeIndex].classList.add("active"); // Aggiungo classe "active" alla prima slide
thumbnails[activeIndex].classList.add("active"); // Aggiungo classe "active" alla prima miniatura

// Funzione per passare alla slide successiva
function nextImage() {
  // Rimuovo la classe "active" dalla slide attuale e dalla miniatura attuale
  slide[activeIndex].classList.remove("active");
  thumbnails[activeIndex].classList.remove("active");

  // Incremento l'indice attivo in modo circolare
  activeIndex = (activeIndex + 1) % slide.length;

  // Aggiungo la classe "active" alla nuova slide e alla nuova miniatura
  slide[activeIndex].classList.add("active");
  thumbnails[activeIndex].classList.add("active");
}

// Funzione per passare alla slide precedente
function previousImage() {
  // Rimuovo la classe "active" dalla slide attuale e dalla miniatura attuale
  slide[activeIndex].classList.remove("active");
  thumbnails[activeIndex].classList.remove("active");

  // Decremento l'indice attivo in modo circolare
  activeIndex = (activeIndex - 1 + slide.length) % slide.length;

  // Aggiungo la classe "active" alla nuova slide e alla nuova miniatura
  slide[activeIndex].classList.add("active");
  thumbnails[activeIndex].classList.add("active");
}

// Aggiungo gli event listener ai pulsanti "next" e "previous"
const next = document.querySelector(".my-next"); // Bottone per andare alla slide successiva
const previous = document.querySelector(".my-previous"); // Bottone per andare alla slide precedente

next.addEventListener("click", () => {
  nextImage(); // Passo alla slide successiva
});

previous.addEventListener("click", () => {
  previousImage(); // Torno alla slide precedente
});

// Aggiungo gli event listener per le miniature
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    // Rimuovo la classe "active" dalla slide attuale e dalla miniatura attuale
    slide[activeIndex].classList.remove("active");
    thumbnails[activeIndex].classList.remove("active");

    // Imposto l'indice attivo in base alla miniatura cliccata
    activeIndex = index;

    // Aggiungo la classe "active" alla slide e alla miniatura cliccata
    slide[activeIndex].classList.add("active");
    thumbnails[activeIndex].classList.add("active");
  });
});


// Definisco una variabile per gestire l'intervallo automatico
let autoPlayInterval; // Intervallo per il carosello automatico
let isAutoPlayRunning = true; // Stato iniziale del carosello automatico

// Funzione per avviare lo scorrimento automatico
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextImage(); // Passa automaticamente alla slide successiva
  }, 5000); // Cambia immagine ogni 5 secondi
}

// Funzione per fermare lo scorrimento automatico
function stopAutoPlay() {
  clearInterval(autoPlayInterval); // Ferma lo scorrimento
}

// Gestione del pulsante per fermare/riprendere lo scorrimento
const stopButton = document.querySelector("#my-stop-button");

stopButton.addEventListener("click", () => {
  if (isAutoPlayRunning) {
    stopAutoPlay(); // Ferma il carosello
    stopButton.textContent = "Fai ripartire lo scorrimento"; // Cambia il testo del pulsante
  } else {
    startAutoPlay(); // Avvia il carosello
    stopButton.textContent = "Interrompi lo scorrimento"; // Cambia il testo del pulsante
  }
  isAutoPlayRunning = !isAutoPlayRunning; // Aggiorna lo stato
});

// Avvio automatico del carosello al caricamento della pagina
startAutoPlay();
