const menuKnop = document.querySelector('.hb-menu');
const navMob = document.querySelector('.nav-mobile');
const navGeklikt = document.querySelectorAll('.navKlik');
let menuOpen = false;

menuKnop.addEventListener('click',(e) => {
  e.preventDefault();
    if(!menuOpen){
        navMob.classList.add('open');
        menuOpen = true;
        navGeklikt.forEach(anchor => {
          anchor.addEventListener('click',() => {
            navMob.classList.remove('open');
            menuOpen = false;
          })
        })
    } else{
        navMob.classList.remove('open');
        menuOpen = false;
    }
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const titelArea = document.querySelectorAll(".titel-area");


var options = {
      rootMargin: "-100px 0px -50px 0px",
      threshold:1
};

var options2 = {
      threshold:1
};

// Lijnen van kwaliteiten
const kwaliPro = document.querySelectorAll(".kwaliProcent");
const lijnFlow = document.querySelectorAll(".lijn");
const lijnFlowTop = document.querySelectorAll(".lijn:before");


// elementen voor animatie
const animationFlow = document.querySelectorAll(".anime");

// a href = tel / email -> contactformulier
const hover = document.querySelectorAll('.hover');

// Hoveren van elementen -> contactformulier
hover.forEach(entry => {
  entry.addEventListener('mouseover', () => {
    var svgtje = entry.parentElement.previousElementSibling;
    var nodeList = svgtje.children;
    var svg = nodeList[0];
    svg.style.fill = "var(--prim-color)";
  });
  entry.addEventListener('mouseleave', () => {
    var svgtje = entry.parentElement.previousElementSibling;
    var nodeList = svgtje.children;
    var svg = nodeList[0];
    svg.style.fill = "black";
  });
})


// a href = loading animaties -> portfolio (SR) 
const aHoverAll = document.querySelectorAll('.linkHover');

// Hoveren van elementen :: a hover -> img/svg vergroten
if(aHoverAll){
aHoverAll.forEach(a => {
  a.addEventListener('mouseover', (a) => {
    aHoverToSvg = a.target.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0];
    aHoverToSvg.classList.add('hover');
  });
  a.addEventListener('mouseleave', () => {
    aHoverToSvg.classList.remove('hover');
  });
})
};

// .nextSibling


function playdirect(){
  document.body.style.overflow="hidden";
};
playdirect()



var loader = document.querySelector('.preloadScreen');

window.addEventListener('load', pageloading);

function pageloading(){
    loader.classList.add('paginaGeladen')

    setTimeout(function(){
      var locationHash = location.hash;
      if(location.hash === '#berichtverzonden'){
        var popupBericht = document.querySelector(".messageSend");
        popupBericht.addEventListener('click', function(){
          popupBericht.classList.add('hidden')
          document.body.style.overflow="initial";
        })
      }
      else{
        document.body.style.overflow="initial";}
    },250);

    
    setTimeout(function(){
      const titelObserver = new IntersectionObserver(function
        (entries, titelObserver) {
          entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("appear")
            titelObserver.unobserve(entry.target);
          }
          })
      },options2);

      titelArea.forEach(titelArea => {
        titelObserver.observe(titelArea);
      })

      const lijnObserver = new IntersectionObserver(function
        (entries, lijnObserver) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return;
            } else {
              entry.target.classList.add("appear");
              lijnObserver.unobserve(entry.target);
            }
          })
      }, options);

      lijnFlow.forEach(lijnFlow => {
        lijnObserver.observe(lijnFlow);
      })

      const animationObserver = new IntersectionObserver(function
        (entries, animationObserver){
          entries.forEach(entry => {
              entry.target.classList.toggle("likeHover", entry.isIntersecting);
          })
      }, options2);
      animationFlow.forEach(animationFlow => {
          animationObserver.observe(animationFlow);
      })

      
    },750);  
};


var noHref = document.querySelectorAll('[href="#"]');

noHref.forEach(anchor => {
  anchor.addEventListener('click', (anchor) =>{
    // console.log('deze a heeft geen link alleen een "#" ')
    anchor.preventDefault();
  })
})

var logolayers = document.querySelector('.index .logoLayers')
if(logolayers){
window.addEventListener('scroll',()=>{
  // console.log(logolayers);
  if(20 <= this.scrollY){
    logolayers.classList.add('firstScroll');
  } else if(20 >= this.scrollY){
    logolayers.classList.remove('firstScroll');
  }
})
};



// Video controls //

var video = document.querySelector(".video");
if(video){

  var btn = document.querySelector(".buttons");
  var btnXL = document.querySelector(".buttonsVideoXL");
  var pauze = document.querySelector(".pauze");
  var play = document.querySelector(".play");
  var loadingCrkl = document.querySelector(".download");
  var pauzeXL = document.querySelector(".pauzeXL");
  var playXL = document.querySelector(".playXL");
  var loadingCrklXL = document.querySelector(".downloadXL");
  var videobox = document.querySelector(".video-box");
  var meta = document.querySelector(".meta");
  var vidCrtl = document.querySelector(".controls");

  var volumeSlide = document.querySelector("input.volume");
  var mute = document.querySelector(".mute");
  var getal = document.querySelector(".getal");
  var groot = document.querySelector(".big");
  var svgMute = document.querySelector(".mute");

  var tijdMomi = document.querySelector(".tijdmoment");

  if (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)) {
        video.setAttribute("controls","");
        meta.classList.add("hide");
        btnXL.classList.add("hide");
        vidCrtl.classList.add("hide");
        vidCrtl.style.display = "none";
  }else if((navigator.maxTouchPoints == 0) || 
      (navigator.msMaxTouchPoints == 0)){
        video.removeAttribute("controls");
        meta.classList.remove("hide");
        btnXL.classList.remove("hide");
        vidCrtl.classList.remove("hide");

        // Video geladen -> tijd van de video updaten
        video.onloadedmetadata = function() {
          tijdMomi.textContent = myTime(video.currentTime) + "/" + myTime(video.duration);
        };

        ////////////////////////////////
        // Volume van de video aanpassen
        volumeSlide.addEventListener('input', volumeChange)

        function volumeChange(){
            var volumeGetal = volumeSlide.value;
            var volumeDec = volumeGetal / 100;
            video.volume = volumeDec;
            const toggleTypeBig = (volumeDec >= 0.01  && volumeDec <= 0.5) ? 'add' : 'remove';
            groot.classList[toggleTypeBig]('hide');
            const toggleMute = (volumeDec == 0) ? 'add' : 'remove';
            svgMute.classList[toggleMute]('stil');
        }

        ////////////////
        // Volume dempen
        mute.addEventListener('click', volumeMute);

        function volumeMute(){
            var geluid = volumeSlide.value;
            var volumeBack = geluid / 100;
            if (video.volume >= 0.01){
                getal.textContent = volumeBack;
                var volumeGetal = 0;
                video.volume = volumeGetal;
                volumeSlide.value = volumeGetal;
                svgMute.classList.add('stil');
                
            } else if(volumeSlide.value == 0){
                var volumeOld = getal.innerHTML
                video.volume = volumeOld;
                var value = volumeOld * 100;
                volumeSlide.value = value;
                svgMute.classList.remove('stil');
            }
        }

        // Tijd updaten op de balk
        var tijd = document.querySelector("input.time");

        video.addEventListener('timeupdate', function(){
            var juicePos = video.currentTime / video.duration;
            var schaal = juicePos * 100;
            tijd.value = schaal;
        })
        


        // Tijd veranderen op de balk
        tijd.addEventListener('input', scrub);

        function scrub(){
            video.pause();
            var minuut = tijd.value;
            var delingMin = minuut / 100;
            var deling = video.duration * delingMin;
            video.currentTime = deling;
            play.classList.remove("hide")
            pauze.classList.add("hide")
            timer = setInterval(update, 100);
        }

        // Tijd veranderd via de balk
        tijd.addEventListener('mouseup', noklik);

        function noklik(){
            speelAf();
        } 



        // Tijd update
        function update(){
            tijdMomi.textContent = myTime(video.currentTime) + "/" + myTime(video.duration);
        }

        // Functie van seconde naar minuut
        function myTime(time){
            var uur = ~~(time/3600);
            var min = ~~((time/3600)/60);
            var sec = time%60;
            var secMin = "";
            if (uur > 0){
                secMin += "" + uur + ":" + (min < 10 ? "0" : "");
            }
            secMin += "" + min + ":" + (sec < 9.5 ? "0" : "");
            secMin += "" + Math.round(sec);
            return secMin;
        }

        // Check of de video afspleelt
        video.addEventListener('timeupdate', videomotion);

        function videomotion(){
            if(video.ended){
              pauze.classList.add('hide');
              play.classList.remove('hide');
              btnXL.classList.remove('hide');
              playXL.classList.remove('hide');
              pauzeXL.classList.add('hide');
              videobox.removeEventListener('mouseover', hoveren);
              videobox.removeEventListener('mouseleave', hoverenout);
            clearInterval(timer)
            videobox.classList.remove('playing');
            } else if (video.paused){
                videobox.classList.remove('playing');
                videobox.classList.remove('hover')
                videobox.removeEventListener('mouseover', hoveren);
                videobox.removeEventListener('mouseleave', hoverenout);
            } else if (video.play){
                videobox.classList.add('playing');
                videobox.addEventListener('mouseover', hoveren);
                videobox.addEventListener('mouseleave', hoverenout);
                
            } 
        };

        video.addEventListener('click', speelAf);
        btnXL.addEventListener('click',speelAf);
        btn.addEventListener('click',speelAf);

        

        function hoverenout(){ 
          videobox.classList.remove('hover');
          if(video.play){
            btnXL.classList.add("hide");
          }
        }
        
        // videobox.ontouchend = hoveren2;

        function hoveren(){ 
            videobox.classList.add('hover');
            btnXL.classList.remove("hide");
        }
            
        function speelAf(){
            // Check of video afspeelt.
            const manier = video.paused ? 'play' : 'pause';
            // Speel af of pauzeer video.
            video[manier]();
            if (manier == 'play'){
                play.classList.add("hide")
                pauze.classList.remove("hide")
                playXL.classList.add("hide")
                pauzeXL.classList.remove("hide")
                btnXL.classList.add("hide")
                timer = setInterval(update, 100);
                videobox.addEventListener('mouseleave', hoverenout)
            } else{
                play.classList.remove("hide")
                pauze.classList.add("hide")
                playXL.classList.remove("hide")
                pauzeXL.classList.add("hide")
                btnXL.classList.remove("hide")
                
                clearInterval(timer);
            }
        }

        document.addEventListener("keydown",keycheck);

        function keycheck(e){
          // console.log(e)
          if(e.keyCode === 32){
            speelAf();
            e.preventDefault();
          }
          };
        
        // video.onwaiting = function(){}

      }
}

var buttonForm = document.querySelector('.sendButton');
var Form = document.querySelector('.formContact');
var errorMessage = document.querySelectorAll('.formContact div');
var naam = document.querySelector(".naamInput");
var email = document.querySelector(".emailInput");
var tel = document.querySelector(".telInput");



buttonForm.addEventListener('click', myFunction)


function myFunction() {
  errorMessage.forEach(error =>{
    error.style.display = 'none';
  })
  document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      var divError = e.target.nextElementSibling;
      divError.style.display = 'block';
    };
  })(), true);
}
// document.body.addEventListener('touchmove', function(event) {
//   console.log(event)
//   // event.preventDefault();
// }, false);

    
// if(innerWidth <= 500){
//     console.log(true)
    
//   }




// if (('ontouchstart' in venster) ||
//      (navigator.maxTouchPoints > 0) ||
//      (navigator.msMaxTouchPoints > 0)) {
//       /* browser met ofwel Touch Events of Pointer Events
//          draait op een aanraakapparaat */
// }


// { document.body.style.overflow="hidden";  }
// {   }

// console.log(buttons)
// buttons.forEach(el => {
//   el.addEventListener("click", (el) => {
//     function getTop(el) {
//       return el.offsetTop + (el.offsetParent && getTop(el.offsetParent));
//     }
//   })
// })


// const aiLijn = (window.window.getComputedStyle(
// 	document.querySelector('#ai'), ':before'
// ));

// var f = function (entry){
//   const aiLijnTopper = (window.window.getComputedStyle(
//     document.querySelector('#ai'), ':before'
//   ));
//   const aiLijn = (window.window.getComputedStyle(
//     document.querySelector('.lijn')
//   ));
//   var breedteLijnBoxPx = aiLijn.width;
//   var breedteLijnBox = Number(breedteLijnBoxPx.replace(/px/, ''));
//   var breedteTopperPx = aiLijnTopper.width;
//   var breedteTopper = Number(breedteTopperPx.replace(/px/, ''));
//   var breedteProcent = breedteTopper/breedteLijnBox * 100;
//   var breedteProcentRond = Math.round(breedteProcent);
//   console.log(breedteProcentRond + "%");
//   lijnFlowTop.addEventListener("resize",f)
// }
 

// NAVIGATIE SCROLLLLLL

// document.querySelectorAll("nav li a").forEach(function(listitem){
//   listitem.addEventListener('click', function(){
//     var topPosition = document.getElementById(listitem.dataset.page).offsetTop - 100;
//     console.log(topPosition);
//     window.scrollTo({
//       top: topPosition,
//       left:0,
//       behavior:"smooth"
//     })
//   })
// })

// var iframe = document.querySelector('.iframe')

// iframe.onload = this.src="buttonklik.html"

// window.addEventListener('scroll', function(e){
//   var scrollCheck = (this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
  // if(scrollCheck){
  //   console.log(scrollCheck);console.log('Boven');
  //   options = {
  //     rootMargin: "0px 100px 0px 0px",
  //     threshold:1
  //   }
  // } else{
  //     console.log(scrollCheck);
  //     console.log('Beneden');
  //     options = {
  //     rootMargin: "0px 0px 0px 0px",
  //     threshold:1
  //   }
//   }
// });

// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
//   console.log(this.oldScroll > this.scrollY);
  
// }



// Window loadtime
// //  // setTimeout(function(){
// //  //   window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
// //  //   var timing = performance.timing || {};
// //  //   var parseTime = timing.loadEventEnd - timing.responseEnd;
// //  //   console.log(parseTime);