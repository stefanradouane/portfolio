console.log('hallo ik ben gekoppeld');
const menuKnop = document.querySelector('.hb-menu');
const navMob = document.querySelector('.nav-mobile')
let menuOpen = false;

menuKnop.addEventListener('click',(e) => {
  e.preventDefault();
    if(!menuOpen){
        navMob.classList.add('open');
        menuOpen = true;
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

const options = {
  rootMargin: "-100px 0px 0px 0px",
  threshold:1
};

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
  },options);

titelArea.forEach(titelArea => {
  titelObserver.observe(titelArea);
})

const kwaliPro = document.querySelectorAll(".kwaliProcent");
const lijnFlow = document.querySelectorAll(".lijn");
const lijnFlowTop = document.querySelectorAll(".lijn:before");





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