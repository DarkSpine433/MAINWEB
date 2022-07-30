//PRELOAD
window.onload = function(){
    
    document.querySelector(".preload").style.display = "none";
};

//ON SCROLL SHOW SERVICES
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("service-block-1").className = "slideUp-1";
    document.getElementById("service-block-2").className = "slideUp-2";
    document.getElementById("service-block-3").className = "slideUp-3";
  }
}

