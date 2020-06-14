// mobile hamburger menu
$('.hamburger').on('click', function () {
  $('#myNav').addClass('w-full');
});
$( '.overlay-content a, .closebtn' ).on("click", function(){
  $('#myNav').removeClass('w-full');
});

// wedding countdown date
var countDownDate = new Date("Aug 11, 2020 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The day is here!";
  }
}, 1000);

// lightbox gallery - jquery.simple-lightbox.js
// $('.gallery').simpleLightbox();
$('.imageGallery1 a').simpleLightbox();
// smooth scrolling to elements - smooth-scroll.polyfills.min.js
 var scroll = new SmoothScroll('a[href*="#"]');
