const vignettes = document.querySelectorAll(".small");
const fullImg = document.getElementById("full");
const btn = document.querySelector(".btn-add");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".validez");
const panierContainer = document.querySelector(".panier-container");
const annulerCommande = document.querySelector(".annuler");
const texteModal = document.querySelector(".texte-facture");
const fermerPage = document.querySelector("span");

let panierIcon = document.querySelector(".panier");
let facture = document.querySelector(".facture");
let nbreProduits = document.querySelector(".nombre-produits");

let panier = 0;
let prixUnite = 2.5;

vignettes.forEach((item) => {
  item.addEventListener("click", () => {
    let imgSource = item.getAttribute("src");
    fullImg.setAttribute("src", imgSource);
  });
});

btn.addEventListener("click", () => {
  //   console.log("test");
  panier += 1;
  console.log(panier);
  if (panier < 2) {
    panierContainer.innerText = `Vous-avez ${panier} produit dans votre panier`;
    facture.textContent = "Votre facture : " + prixUnite + "€";
  } else {
    panierContainer.innerText = `Vous-avez ${panier} produits dans votre panier`;
    facture.textContent = "Votre facture est de : " + panier * prixUnite + "€";
  }
});

panierIcon.addEventListener("click", () => {
  modal.style.visibility = "visible";
  texteModal.textContent = `Vous avez commandé ${panier} boule(s) de noël`;
});

btnModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

annulerCommande.addEventListener("click", () => {
  panier = 0;
  panierContainer.textContent = "";
  texteModal.textContent = "Vous avez commandé 0 boule de noël";
  facture.textContent = "Votre facture : 0€";
});

fermerPage.addEventListener("click", () => {
  console.log("test");
  modal.style.visibility = "hidden";
});

// menu toggle

const menu = document.querySelector(".toggle-menu");
const btnToggle = document.querySelector(".btn-toggle-container");

btnToggle.addEventListener("click", () => {
  console.log("clique");
  menu.classList.toggle("active-menu");
});

// Script Promos

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";

    // un delay de 3 secondes :
  }, 3000);
};

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Compte à rebours promotion :

function getChronoPromo() {
  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let secondes = document.querySelector(".seconds");

  let now = new Date().getTime();
  let countDownDate = new Date("Dec 24, 2022").getTime();

  let distanceBase = countDownDate - now;

  days.textContent = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24)
  ); // nombre du reste

  minutes.textContent = Math.floor(
    (distanceBase % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondes.textContent = Math.floor((distanceBase % (1000 * 60)) / 1000);
}

getChronoPromo();

function jour() {
  let date = document.querySelector(".jours");
  let dateActuelle = new Date();
  let dateLocale = dateActuelle.toLocaleString(
    "fr-FR" /*  ou (navigator.language)*/,
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  date.textContent = `${dateLocale}`;
  date.style.fontSize = "1.3rem";
}

const countDownInterval = setInterval(() => {
  getChronoPromo();
  jour();
}, 1000);

// GreenSock en toute simplicité :

const animationGreensock = document.querySelector(".animation-greensock");
const animationPereNoel = document.querySelector(".imagePereNoel");

gsap.from(animationGreensock, {
  x: -1200,
  duration: 2,
  ease: "elastic.out(0.6,0.5)",
});

gsap.from(animationPereNoel, {
  y: -1200,
  duration: 1.5,
  ease: "elastic.out(0.6,0.5)",
});

// juste du code en mode rapide