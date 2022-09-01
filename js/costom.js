// const myCarouselElement = document.querySelector('#myCarousel')
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 4000,
//   wrap: false,
//   loop: true
// });


// USING OWL CAROUSEL .JQUERY

$(document).ready(function(){

//  owl slider here
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    navText: ['PREV', 'NEXT'],
    smartSpeed: 1000,
    autoplay: true,
    duration: 3000,
    responsive: {
      0: {

        nav: false,  // for the  button to be hidden on the mobile view
        dots: true
        },
      768: {
        nav: true,
        dots: false
      }
    }
  }); 


  
  $('#project-slider').owlCarousel({
    loop: true,
    margin: 24,  // for item margin per view
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },

      768: {
     items: 2,
      },
      1140: {
        nav: true,
        items: 2, // for amount of items to be seen relative to view port
        center: true,
      },
    }
  });


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,  // for item margin per view
  nav: false,
  dots: true,
  items: 1,
  smartSpeed: 800,
  })
});




// Counter Aanimation
let nCount = function(selector){
  $(selector).each(function(){
    $(this).animate({
      Counter: $(this).text() }, {
      duration: 4000,
      easing: 'swing',
      step: function(value){
      $(this).text(Math.cell(value));

      }
     });
  });
};

let a = 0;
$(window).scroll(function(){
let oTop = $('#countDown').offset().top - window.innerHeight;
 if(a == 0 && $(window).scrollTop() >= oTop) {
   a++;
   console.log("counter animation");
   nCount("#countDown > .display-4");
 }

});

 