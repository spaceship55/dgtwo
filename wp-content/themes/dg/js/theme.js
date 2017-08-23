// Hide Header on on scroll down
// Code from: https://jsfiddle.net/mariusc23/s6mLJ/31/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('header').outerHeight();

jQuery(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        jQuery('header').removeClass('down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('header').removeClass('nav-up').addClass('down');
        }
    }
    
    lastScrollTop = st;
}


function escapeNav(e) {
  var keyCode = e.keyCode;
  if(keyCode === 27) {
    toggleNav();
  }    
}


//* HAMBURGER BUTTON *//
function toggleNav(){
  //toggle active state on hamburger button
  document.querySelector('.js_toggle-nav').classList.toggle('nav-active');

  if (document.body.classList.contains('nav-active')) {
    //nav already active, animate the nav ul items back up
    document.querySelector('.site-header__site-nav').classList.remove('nav-active'); 

    //transition the opacity on the nav to 0 by adding a temporary class
    setTimeout(function(){
      document.body.classList.add('nav-fade-out');
    }, 200);

    //100ms later, close the nav. remove the nav-fade-out class as well
    setTimeout(function(){
      document.body.classList.remove('nav-active', 'nav-fade-out');
    }, 400);

    //finally, remove that event listener;
    document.removeEventListener("keydown", escapeNav);

  } else {
    //nav not active, lets open it
    document.body.classList.add('nav-active');

    //then, 100ms later, trigger the nav ul spread animation
    setTimeout(function(){
      document.querySelector('.site-header__site-nav').classList.add('nav-active');
    }, 100);

    //attach escapeNav func to to the document
    document.addEventListener("keydown", escapeNav, false);
  }
}


(function(){
  document.querySelector('.js_toggle-nav').addEventListener('click', function(){
    toggleNav();
  });
  
 
  
//Hero typewriter fx July/17 ###//
//   jQuery(document).ready(function() {
//     jQuery('.js_typewrite').typed({
//         strings: [ 'We are a creative consultancy ^3000', 'We are a creative incubator ^3000', 'We are a creative partner for  CEOs and their organizations ^3500' , 'We build design driven solutions that launch new business, products, channels &amp; services ^2000'],
//         contentType: 'html',
//         smartBack: true,
//         showCursor: false,
//         loop:true
//     });
// });

  
//END OF FUNCTION()//
}())