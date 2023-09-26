var nav = document.getElementsByClassName('navbar')[0];
var scrol =document.getElementById('scrol')[0];
var sec2 = document.getElementById('sec2')[0];
$(window).on("scroll", function() {
  if($(window).scrollTop() >= 200) {
      nav.style.backgroundColor="#A4C0D6";
      
  } else {
      
      nav.style.backgroundColor="#ffff";
  }
});
$('scrol').click(function() {
  $.scrollTo('sec2');
});

var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
    slidesPerView: 5,
    spaceBetween: 5,
    slideToClickedSlide:true,
    centeredSlides:true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },

    loop:true,
    //   autoplay: {
    //     delay: 100000,
    //   },


      keyboard: {
      enabled: true,
      onlyInViewport: true,
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


     breakpoints: {
          
          640: {
            freemode:true,
            slidesPerView: 3,
            spaceBetween: 5,
          },
          320: {
            freemode:true,
            slidesPerView: 3,
            spaceBetween: 5,
          }
    }

  });