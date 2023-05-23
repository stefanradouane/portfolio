
console.log('hallo')

// Variabelen //
var hamburger = document.querySelector(".hamburger");
var terugTitel = document.querySelector("section.mobile section")
var link = document.querySelector("nav.linkjes");
var knop = document.querySelector(".meer");
var iconHart = document.querySelector("svg.hart");
var winkelwagen = document.querySelector("p.winkelwagen");
var toevoeg = document.querySelectorAll(".flesknop");

var hartenWaarde = document.querySelector(".hartenwaarde"); 
var hartKnop = document.querySelectorAll("svg.switch");
var score = 0;
var hartScore = 0;

// muziekje //
var pauzeKnop = document.querySelector("img.pauze");
var afspeelKnop = document.querySelector("img.start")
var muziek = new Audio("./img/muziekje.mp3")

var menuHoog = document.querySelector("img.pijltje")
var compleetMenu = document.querySelector("section.pop-over")


function menuHigh(){
    compleetMenu.classList.toggle("low");
    compleetMenu.classList.toggle("up");
    menuHoog.classList.toggle("omhoog");
    menuHoog.classList.toggle("draai");
};
    
function speelMuziek(){
    muziek.play();
    afspeelKnop.classList.toggle("invisible");
    pauzeKnop.classList.toggle("invisible");
};

function pauzeMuziek(){
    muziek.pause();
    afspeelKnop.classList.toggle("invisible");
    pauzeKnop.classList.toggle("invisible");
};

menuHoog.addEventListener('click', menuHigh);
pauzeKnop.addEventListener('click', pauzeMuziek);
afspeelKnop.addEventListener('click', speelMuziek);

//---//

var noHref = document.querySelectorAll('[href="#"]');

noHref.forEach(anchor => {
  anchor.addEventListener('click', (anchor) =>{
    anchor.preventDefault();
  })
})


function navSchuif(e){
    e.preventDefault();
    var navigatie = document.querySelector("section.mobile")
    navigatie.classList.toggle("zichtbaar");
    navigatie.classList.toggle("hidden");
}

function menuKlap(){
    link.classList.toggle("klein");
    if(link.classList.contains("klein")){
    knop.textContent= "Meer";
    } else{
        knop.textContent= "Minder";
    }
};

function winkelPlus(){
    var flesPlus = 1;
    score = score + flesPlus;
    winkelwagen.textContent = score;
    winkelwagen.classList.add("positive")

};

function test(){
    console.log("de functie werk!")
}

hamburger.addEventListener("click", navSchuif);

terugTitel.addEventListener("click", navSchuif);


for (i = 0; i < toevoeg.length; i++) {
    toevoeg[i].addEventListener("click", winkelPlus);
}

var hearts = document.querySelectorAll("svg.switch");

for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", addToFavorites);
}

function addToFavorites(event) {
    var clickedHeart = event.target;
    
    if (clickedHeart.classList.contains("pulse")) {
        clickedHeart.classList.toggle("pulse")
        clickedHeart.classList.toggle("hartvul")

    
      updateWishlist("plus");
    }

    else {
   
      clickedHeart.classList.toggle("pulse")
      clickedHeart.classList.toggle("hartvul")

      
      updateWishlist("min");
    }
  }

function updateWishlist(action) {
    /* het getal (de span) in de Wishlist-link in de nav opzoeken */
    /* die span in de variabele 'loveListAmount' opslaan */
    let wishlistAmount = hartenWaarde;
    
    /* het huidige aantal gele hartjes bepalen */
    let currentAmount = wishlistAmount.innerHTML;
    /* dat is een string - dus even omzetten naar een getal */
    currentAmount = parseInt(currentAmount);
    
    /* het nieuwe aantal gele hartjes bepalen */
    /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
    let newAmount;
    
    /* als er liefde bij moet */
    if (action == "plus") {
      /* het nieuwe aantal gele hartjes berekenen */
      newAmount = currentAmount + 1;
      
      if (newAmount == 1) {
        wishlistAmount.classList.add("positive");
      }
    }
    
    /* als er liefde af moet */
    else {
      /* het nieuwe aantal gele hartjes berekenen */
      newAmount = currentAmount - 1;
    
      if (newAmount == 0) {
        wishlistAmount.classList.remove("positive");
      }
    }
    
    /* tenslotte het nieuwe aantal in de HTML zetten */
    wishlistAmount.innerHTML = newAmount;
}






// Dark mode //

var colorModeCheck = document.querySelector("input.mode");

colorModeCheck.addEventListener('change', darkModeActive);

function darkModeActive() {
  /* als aangezet */
  if( colorModeCheck.checked ) {
    /* class lightMode aan body toevoegen */
    document.documentElement.classList.add("darkMode"); 
    /* local storage updaten */
  }
  /* als uitgezet */
  else {
    /* class lightMode van body verwijderen */
    document.documentElement.classList.remove("darkMode");
    /* local storage updaten */
  }
}





// Korting //
var accepteerTekst = document.querySelector("p.accept");
function kortingAccept(){
    
    var kortingCheck = document.querySelector("section.overlay");
    kortingCheck.classList.add("invisible");
};
accepteerTekst.addEventListener("click", kortingAccept);
knop.addEventListener('click',menuKlap);
//-----//