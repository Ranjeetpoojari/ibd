$(document).ready(function () {
    $("#outer-slider").owlCarousel({
      items: 1,
      loop: true,
      nav:false,
      autoWidth:true,
      // Add other options for the outer carousel as needed
    });

    $("#inner-slider").owlCarousel({
      items: 1,
      loop: true,
      nav:false,
      autoWidth:true,
      // Add other options for the inner carousel as needed
    });
  });