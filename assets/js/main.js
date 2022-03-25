/*-- Scroll Top --*/

const monBouton = document.getElementById("scrollTop");

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
        monBouton.style.display = "block"
    } else {
        monBouton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}