
// loading page 
$(document).ready(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});
// init Isotope
var $grid = $('.grid').isotope({
  // options
  
  layoutMode:'fitRows'
  
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$(".iso").click(function(){ 
  $(this).addClass("active");
  $(this).siblings().removeClass('active');
})


// navbar 
$(".nav-link").click(function () {
  let href = $(this).attr("href");
  let aboutScroll = $(href).offset().top;
  $("body,html").animate(
    { scrollTop: aboutScroll },
    { queue: false, duration: 3000 }
  );
});