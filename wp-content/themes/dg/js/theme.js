// Hide Header on on scroll down
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


// ========= //




//hero height is defined as calc(100vh - $navHeight), but mobile devices have variable viewport height
// because the address bar appears/dissapears on scroll up/down
// that makes the hero resize, which is a reflow (not performant) and janky looking
// function setHeroHeight(){
//   const hero = document.querySelector('.js_hero-wrap');
//   if (hero){
//     const clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//     const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     if (clientWidth < 800) { //chosen somewhat arbitrarily. Want to capture tablets
//       hero.style.height = clientHeight - 70 + 'px';
//     }
//   }
// }

function escapeNav(e) {
  var keyCode = e.keyCode;
  if(keyCode === 27) {
    toggleNav();
  }    
}

// //boilerplate debounce function, use when you don't want to fire an event to often
// //like if you're attaching an event to scroll
// //wait is time in ms, pass 15 normally
// //immediate is bool, pass true normally
// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   }
// }

// //sticky the nav on scroll up, un-sticky it on scroll down
// //const navHeight = document.querySelector('.js_site-header').offsetHeight;
// var lastScrollTop = window.pageYOffset;
// var header = document.querySelector('.js_site-header'); 
// //var headerHeight = document.querySelector('.js_site-header');
// function fixHeader(){
//   var st = window.pageYOffset || document.documentElement.scrollTop; 

//   var isDown = header.classList.contains('down');
//   console.log(isDown);

//   if (st > lastScrollTop && isDown){
//      // downscroll code
//      console.log('going down');
//      header.classList.remove('down');
//      header.classList.remove('fixed');
//   } else if(st < lastScrollTop && !isDown) {
//     // upscroll code
//     console.log('going up');
//     header.classList.add('fixed');
//     header.classList.add('down');
//   }
//   lastScrollTop = st;
// }
// window.addEventListener('scroll', debounce(fixHeader, 15, true));


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

// function toggleNav(){
//   //toggle active state on hamburger button
//   document.querySelector('.js_toggle-nav').classList.toggle('nav-active');

//   if (document.body.classList.contains('nav-active')) {
//     //nav already active, animate the nav ul items back up
//     document.querySelector('.site-header__site-nav').classList.remove('nav-active'); 
//     document.body.classList.remove('nav-active');
//     //finally, remove that event listener;
//     document.removeEventListener("keydown", escapeNav);

//   } else {
//     //nav not active, lets open it
//     document.body.classList.add('nav-active');
//     document.querySelector('.site-header__site-nav').classList.add('nav-active');
//     //attach escapeNav func to to the document
//     document.addEventListener("keydown", escapeNav, false);
//   }
// }


(function(){
  ////
  document.querySelector('.js_toggle-nav').addEventListener('click', function(){
    toggleNav();
  });
  
  // setHeroHeight();

  //made by Jacob April/17
  //only using jquery for this, might be better to re-write it if page load speed becomes an issue
  // jQuery(document).ready(function(){
  //   jQuery(".js_typewrite").typed({
  //     //if these strings change, line 280 in typed.js needs to be updated as well
  //     strings: [ "We are a creative consultancy ^4000","We are a creative incubator ^4000","We are a creative partner for  CEOs and their organizations ^5000","We build design driven solutions  that launch new  business, products, channels &amp; services ^6000"],
  //     contentType: 'html', //need this b/c of the ampersand in the 4th string
  //     typeSpeed: 30,
  //     loop :true,
  //     showCursor: false,
  //     //cursorChar: "|",
  //   });
  // });
  
//Hero typewriter fx July/17 ###//
  jQuery(document).ready(function() {
    jQuery('.js_typewrite2').typed({
        strings: [ 'We are a creative consultancy ^3000', 'We are a creative incubator ^3000', 'We are a creative partner for  CEOs and their organizations ^3500' , 'We build design driven solutions that launch new business, products, channels &amp; services ^2000'],
        contentType: 'html',
        smartBack: true,
        showCursor: false,
        loop:true
    });
});

  
//END OF FUNCTION()//
}())