
var header = document.querySelector("#myHeader");
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*Scroll to respective section on click on navigation item*/
$('.navbar-nav .nav-item  a').on('click', function() {

  var scrollAnchor = $(this).attr('data-page'),
      scrollPoint = $(`section#${scrollAnchor}`).offset().top - 0;

  $('body,html').animate({
      scrollTop: scrollPoint
  }, 500);

  return false;

});

/*Select corresponding tab on click of circles*/
$(".circle-block a").click(function(){
    //Get index of the circle clicked
   let index = $(this).closest(".circle-element").find(".circle-block a").index(this);

   //scroll to Our Solutions section
  scrollPoint = $(`section#anchor3`).offset().top - 0;
  $('body,html').animate({
      scrollTop: scrollPoint
  }, 500);
   $("#myTab li a").eq(index).trigger("click");
});



/*Highlight corresponding navigation item while scrolling*/
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 0) {
      // $('.navbar-nav .nav-item  a').addClass('fixed');
      $('section').each(function(i) {
        if (($(this).offset().top - $(".header_top").height()) <= windscroll) {
          $('.navbar-nav a.active').removeClass('active');
          $('.navbar-nav a').eq(i).addClass('active');
      }
      }); 

  } else {

      $('nav').removeClass('fixed');
      $('nav a.active').removeClass('active');
      $('nav a:first').addClass('active');
  }

}).scroll();


/*scroll to top on click of Brand logo*/
$('.brand-logo').on('click', function() {

  $('body,html').animate({
     scrollTop: 0
 }, 500);

 return false;

})

$(".tab-listing").click(function(){
   $(this).siblings().removeClass('show_tab');
  $(this).addClass('show_tab');
});


$(document).ready(function () {
  $('#slider-items').slick({
     infinite: true,
     dots: false,
     slidesToShow: 8,
     slidesToScroll: 1,
     arrows: false,
     horizontalSwiping: true,
     aitForAnimate: true,
     autoplay: true,     
     responsive: [
{
  breakpoint: 1400,
  settings: {
    slidesToShow: 6,
    centerMode: true,
  }
},
{  
  breakpoint: 767,
  settings: {
    slidesToShow: 1,
    dots: false,
  }
}
]
  });
});

// $(function() {
//   $('.popup-youtube').magnificPopup({
//       disableOn: 700,
//       type: 'iframe',
//       mainClass: 'mfp-fade',
//       removalDelay: 160,
//       preloader: false,
//       responsiveHeight: 410,
//       fixedContentPos: false
//   });
// });


 

  // Animation
  if($(window).width() > 767){
    triggerAnimation();
  }
  function triggerAnimation(){
  var tl = gsap.timeline({
    scrollTrigger: {
       trigger: ".about-element",
       start: "center bottom"
    }
   });
    gsap.registerPlugin(ScrollTrigger);
     tl.from('.about-content',{x:-200,opacity:0, duration:1.5});
     tl.from('.service-figure',{y:200,opacity:0,duration:1,stagger:0.25},"=-1");
 
 var max_value = 400;
     var min_value = -300;
     var tl_solution = gsap.timeline({
    scrollTrigger: {
       trigger: ".hero_element ",
       start: "top center"
    }
   });
   tl_solution.from('.images_list:nth-child(6) ',{y:-300 ,opacity:0, duration:1,stagger:0.25});
     tl_solution.from('.images_list:nth-child(1) ',{x:-300 ,opacity:0, duration:1,stagger:0.25});
     tl_solution.from('.images_list:nth-child(2) ',{x:-300 ,opacity:0, duration:1,stagger:0.25});
     tl_solution.from('.images_list:nth-child(3) ',{y:300 ,opacity:0, duration:1,stagger:0.25});
     tl_solution.from('.images_list:nth-child(4) ',{x:300 ,opacity:0, duration:1,stagger:0.25});
     tl_solution.from('.images_list:nth-child(5) ',{x:300 ,opacity:0, duration:1,stagger:0.25});
     
    

     var max_value = 400;
     var min_value = 200;
     var tl_solution = gsap.timeline({
    scrollTrigger: {
       trigger: ".our_tea",
       start: "top center"
    }
   });
     tl_solution.from('.tea_feature_list ',{y:min_value ,opacity:0, duration:1,stagger:0.25});
   
 
     var tl_solution = gsap.timeline({
    scrollTrigger: {
       trigger: ".our_partner",
       start: "top center"
    }
   });
     tl_solution.from('.partner-wrap',{y:100,opacity:0, duration:1,stagger:0.25});
     
     var tl_contact = gsap.timeline({
      scrollTrigger: {
         trigger: ".form-element",
         scrub: 1,
         start: "top center"
      }
     });
       tl_contact.from('.form_figure img',{y:200,opacity:0, duration:3});
      
    }

      //  color switch
       var $div = $('.yearly_circle span'),
  index = 0,
  length = $div.length;
setInterval(function() {
  $div.css('background', 'white').eq(index).css('background', '#edb221');
  index = ++index % length;
}, 3000)



// map code
// This example uses SVG path notation to add a vector-based symbol
// as the icon for a marker. The resulting icon is a star-shaped symbol
// with a pale yellow fill and a thick yellow border.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -25.363882, lng: 131.044922 },
  });
  const goldStar = {
    path:
      "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
    fillColor: "yellow",
    fillOpacity: 0.8,
    scale: 1,
    strokeColor: "gold",
    strokeWeight: 14,
  };
  new google.maps.Marker({
    position: map.getCenter(),
    icon: goldStar,
    map: map,
  });
}
// sidebar

$(document).ready(function(){
  $("#toggle-btn").click(function(){

    $(".side_bar").addClass("active");
  });
  $("#cross,.navbar-nav li a").click(function(){
    $(".side_bar").removeClass("active");
  });
  
});