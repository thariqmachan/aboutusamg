jQuery(document).ready(function($) {

    $(".owl-carousel-home-slider").owlCarousel({
  
      
    loop: true,
   nav: false,
  
  stagePadding:10,
  infinite: true,
  margin: 23,
  dots:false,
  arrow: true,
  navText: ["<img class='arrow' src='./images/left-arrow-svg.svg'>","<img class='arrow' src='./images/right-arrow-svg.svg'>"],
  
  
  
   autoHeight: false,
  
  
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        // 500: {
        //   items: 2,
        // },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        }, 
        1100: {
          items: 4,
        }, 
        
        1225: {
          items: 5,
        }, 
        1300:{
          items: 5,
        },
       
  
       
      },
    });
      
   
  
   
  
  })(window.jQuery);
    
    
    
    
    
    
    
    
    
    