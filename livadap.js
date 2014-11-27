

// // $(window).scroll(function(i){
// //     var scrollVar = $(window).scrollTop();
// //     $('section .header').children{'image .logo').css({'opacity':( 100-$(window).scrollTop() )/100});
// //     $('section .header').children('h1').css({'top': .7*scrollVar });
// //     $('section .header').children('h2').css({'opacity':( 100-scrollVar )/100});
// // })

// $(window).scroll(function() {
//     var el = $('.temp');    
//     var offset = el.offset();  
//     var opacity = ( (offset.top - el.height()) / 120 ) * -1.5;
//     $('.temp').css('opacity', opacity );
    
// });


// // var fadeStart=100 // 100px scroll or less will equiv to 1 opacity
// //     ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
// //     ,fading = $('#fading')
// // ;

// // $(window).bind('scroll', function(){
// //     var offset = $(document).scrollTop()
// //         ,opacity=0
// //     ;
// //     if( offset<=fadeStart ){
// //         opacity=1;
// //     }else if( offset<=fadeUntil ){
// //         opacity=1-offset/fadeUntil;
// //     }
// //     fading.css('opacity',opacity).html(opacity);
// // });


$(document).ready(function() {
  
  $(window).scroll(function() {
    
    if ($(window).scrollTop() > 5) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    };
  });
});