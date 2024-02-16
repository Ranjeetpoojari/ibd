$(document).ready(function () {
  $("#outer-slider").owlCarousel({
    dots:false,
      loop: true,
      nav: true,
      autoWidth: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          } // No comma here
      },  navText: ['<i class="bi bi-arrow-left-short  rounded-circle bg-gray fs_30 fw_500 bg-white"></i>', '<i class="bi bi-arrow-right-short fs_30 fw_500 rounded-circle bg-white"></i>']
  });

  $(".inner_slider").owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      autoWidth: true,
  });
});

  $('.service').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
