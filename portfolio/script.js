console.log('hallo!')

// Video controls //

var video = document.querySelector(".video");
var btn = document.querySelector(".buttons");
var pauze = document.querySelector(".pauze");
var play = document.querySelector(".play");
var videobox = document.querySelector(".video-box");



    
function speelAf(){
    const manier = video.paused ? 'play' : 'pause';
    video[manier]();
    if (manier == 'play'){
        play.classList.toggle("hide")
        pauze.classList.toggle("hide")
        timer = setInterval(update, 100);
    } else{
        play.classList.toggle("hide")
        pauze.classList.toggle("hide")
        clearInterval(timer);
    }
}

btn.addEventListener('click',speelAf)
video.addEventListener('click', speelAf);


var volumeSlide = document.querySelector("input.volume");
var mute = document.querySelector(".mute");
var getal = document.querySelector(".getal");
var groot = document.querySelector(".big");
var svgMute = document.querySelector(".mute");

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
video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    var schaal = juicePos * 100;
    tijd.value = schaal;
})

// Uitvoeren
var tijd = document.querySelector("input.time");


// Tijd veranderen op de balk
function scrub(){
    video.pause();
    var minuut = tijd.value;
    var delingMin = minuut / 100;
    var deling = video.duration * delingMin;
    video.currentTime = deling;
}

// Uitvoeren
tijd.addEventListener('input', scrub);

tijd.addEventListener('mousedown', klik);

tijd.addEventListener('mouseup', noklik);

function noklik(){
    video.play();
    play.classList.add("hide")
    pauze.classList.remove("hide")
} 

function klik(){
    video.pause();
    play.classList.remove("hide")
    pauze.classList.add("hide")
    timer = setInterval(update, 100);
}


// 
var tijdMomi = document.querySelector(".tijdmoment");

function update(){
    tijdMomi.textContent = myTime(video.currentTime) + "/" + myTime(video.duration);
}


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

function videomotion(){
    if(video.ended){
    pauze.classList.add('hide');
    play.classList.remove('hide');
    clearInterval(timer)
    videobox.classList.remove('playing');
    } else if (video.play){
        videobox.classList.add('playing');
    }
}

video.addEventListener('timeupdate', videomotion)

video.onloadedmetadata = function() {
    tijdMomi.textContent = myTime(video.currentTime) + "/" + myTime(video.duration);
};
