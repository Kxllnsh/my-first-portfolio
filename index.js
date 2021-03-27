/////////////////////typing animation///////////////////
var typed = new Typed(".new", {
    strings: ["YouTuber.", "Programmer.", "Freelancer."],
    typeSpeed: 160,
    backSpeed: 50,
    loop: true,
  });

/////////////////scroll animation/////////////////////
  var previousnavpos = window.pageYOffset;
  window.onscroll = function(){
      var currentnavpos = window.pageYOffset;
      if(previousnavpos > currentnavpos){
          document.getElementById('navBar').style.top = "0";
      }else{
          document.getElementById('navBar').style.top = "-1000px"
          }
          previousnavpos = currentnavpos;
  };
  
///////////////////burger menu//////////////////////////
    var menu = document.getElementById('open')
    menu.style.right = "-5000px"

function Bar(){
    if(menu.style.right == "-5000px"){
        menu.style.right = "0"
    }else{
        menu.style.right= "-5000px"
    }
};