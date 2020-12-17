$(function () {
    "use strict";

    // Scroll Smooth Code Start
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
    // Scroll Smooth Code End

    //   Sticky Menu Code Start
//   $('#mainMenu .nav-item').on('click', function () {
//     $('#mainMenu .nav-item').removeClass('active')
//     $(this).addClass('active')
//   })

  var headerOffset = $('#header').offset().top

  $(window).on('scroll',function(){
    var scrollSize = $(window).scrollTop()
    if(headerOffset < scrollSize){
      $('#header').addClass('header_fixed')
      $('body').css('margin-top','76px');
    }else{
      $('#header').removeClass('header_fixed')
      $('body').css('margin-top','0');
    }
    
  })
    //   Sticky Menu Code End

    // Back To Top Button Code Start
    $(window).on('scroll',function(){

      var scrollSize = $(window).scrollTop()

      if(1000 < scrollSize){
        $('.back_to_top i').show(500)
      }else{
        $('.back_to_top i').hide(500)
      }
    })

    $('.back_to_top i').on('click',function(){
      $('html,body').animate({
        scrollTop:0
    },'1000');
    })
    // Back To Top Button Code End
})