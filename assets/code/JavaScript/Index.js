window.onload = function(){
    // hide the preloader
    document.querySelector(".preload").style.display = "none";
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}
if(window.innerWidth <= 991){
    // load mobile script
    loadScriptFile('https://files.finsweet.com/webflowhacks/hack27-mobile.js');
  }
  else{ // viewportWidth width > 991
    // load desktop script
    loadScriptFile('https://files.finsweet.com/webflowhacks/hack27-desktop.js');
  }