$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});   
});

// refresh to top
// $(document).ready(function(){
//     $('html, body').scrollTop(0);

//     $(window).on('load', function() {
//     setTimeout(function(){
//         $('html, body').scrollTop(0);
//     }, 0);
//  });
// });

$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });

       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });

});