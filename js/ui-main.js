//All UI JS here...



//Page Inti
document.addEventListener('DOMContentLoaded', (event) => {
  
  var introVid = $('video#intro_video');
  introVid.html('<source src="mp4/intro-video_sm.mp4" type="video/mp4">')

   setTimeout(function(){ 
      document.body.scrollTop = 0;
   },900)

});


//Global Function
$(document).ready(function(){

  $('*').find(':button.close').on('click',function(){
    $(this).parent().hide();

      //Pause Video When CLick Close Button 
      var vid = document.getElementById("intro_video");
      vid.pause();
      })
  });




//Go to Top Button
$(document).ready(function(){
  $('.goTop_btn').on('click',function(){
     $('body').stop().animate({scrollTop:0}, 1000);
  })
})


//Owl Slider Js
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
});




//simpleparallax.js
var image = document.getElementsByClassName('parallax-box');
new simpleParallax(image,{
   maxTransition: 50
});





//Custom Interaction Hover Board
$('#hoverBTN_01').on('mouseover',function(){
    $('#hoverData_01').show();
    $('#hoverData_02,#hoverData_03,#hoverData_04,#hoverData_05,#hoverData_06,#hoverData_07').hide();
})

$('#hoverBTN_02').on('mouseover',function(){
    $('#hoverData_02').show();
    $('#hoverData_01,#hoverData_03,#hoverData_04,#hoverData_05,#hoverData_06,#hoverData_07').hide();

})

$('#hoverBTN_03').on('mouseover',function(){
    $('#hoverData_03').show();
    $('#hoverData_02,#hoverData_01,#hoverData_04,#hoverData_05,#hoverData_06,#hoverData_07').hide();

})

$('#hoverBTN_04').on('mouseover',function(){
    $('#hoverData_04').show();
    $('#hoverData_02,#hoverData_03,#hoverData_01,#hoverData_05,#hoverData_06,#hoverData_07').hide();

})
$('#hoverBTN_05').on('mouseover',function(){
    $('#hoverData_05').show();
    $('#hoverData_02,#hoverData_03,#hoverData_04,#hoverData_01,#hoverData_06,#hoverData_07').hide();

})

$('#hoverBTN_06').on('mouseover',function(){
    $('#hoverData_06').show();
    $('#hoverData_02,#hoverData_03,#hoverData_04,#hoverData_05,#hoverData_01,#hoverData_07').hide();

})
$('#hoverBTN_07').on('mouseover',function(){
    $('#hoverData_07').show();
    $('#hoverData_02,#hoverData_03,#hoverData_04,#hoverData_05,#hoverData_06,#hoverData_01').hide();

})



//Custom Lightbox
$(document).ready(function(){

  $(this).find('.lightbox-item').on('click',function(){
    
    var lightbox_el = $('<div class="vl-lightbox">\
              <button type="button" class="close" aria-label="Close">\
              <span aria-hidden="true">&times;</span></button></div>');

    

    var content = $(this).find('.lightbox-contents').clone();
    
      $('body').prepend(lightbox_el);
      $(lightbox_el).append(content);
      $(content).show('fadein');
    
    $(':button.close').on('click',function(){
        $(lightbox_el).remove();
        // $(this).parent().hide();
        // $(content).hide();
    })

    $(document).on('click',function(e){
      if( !$(e.target).hasClass('vl-lightbox') ) {
        return;
      }
      console.log('Lightbox');
      $(lightbox_el).remove();
    })

  })

});


//Scroll Down Navbar fixed Top
$( document ).ready(function() {


    var navbar = $(".navbar");
    var sticky = navbar.offset().top;

    window.onscroll = function() { 
        scrollNavFixedTop();
    };

    function scrollNavFixedTop() {

      if (window.pageYOffset > sticky) {
        navbar.addClass("fixed-top");
        $(".main-slider").css('margin-top','70px');
         $("a.navbar-brand img").css('height','40px');
      } 

      else if (window.pageYOffset <= sticky) {
        navbar.removeClass("fixed-top");
        $(".main-slider").css('margin-top','0px');
         $("a.navbar-brand img").css('height','45px');

      }
    }

});

//AOS js, scroll animations
$( document ).ready(function() {

    AOS.init();
    // $(window).on('scroll', function () {
    //       AOS.refresh();
    // });


});

//Vivus, SVG animations Plugin
$( document ).ready(function() {
  new Vivus('spotlight_svg', { 
        start: 'autostart',
        delay: 80,
        duration: 130, 
        file: 'images/icon/voice.svg' ,
        pathTimingFunction: Vivus.EASE_OUT
    });
});


// var title_1 = $(' h3[name="重點課程"] ').offset().top;

// window.onscroll = function() { 

//     if (window.pageYOffset > title_1 - 200) {

//        new Vivus('svg-animations', { 
//             start: 'autostart',
//             delay: 80,
//             duration: 130, 
//             file: 'images/svg/circle.svg' ,
//             pathTimingFunction: Vivus.EASE_OUT
//         });
//   } 

// };


$(document).ready(function() {

      setTimeout(function(){ 
 
          var vid = document.getElementById("intro_video");
          vid.play();


          vid.onended = function(){

            $('.intro-video-layer').css({
                background: 'url("images/smile-girl.jpg")',
                top: 'auto',
                position: 'relative',
                height: '600px'
              });

              //Scroll To Target Area
              var targetOffset = $('.main-slider').offset().top;
                  $('body').animate({ scrollTop: targetOffset }, 1000);
            }

            $('.intro-video-layer').find(':button.close').on('click',function(){
                $('.intro-video-layer').hide();
                //Pause Video When CLick Close Button 
                var vid = document.getElementById("intro_video");
                vid.pause();
            })

            var videoDiv = $('.intro-video-layer');
            $(document).on('click',function(e){

              if( !$(e.target).hasClass('intro-video-layer') ) {
                return;
              }
              videoDiv.hide();
              vid.pause();
            })


      }, 1000); //Run time interval

      //Close Video Button
      // $('.intro-video-layer #closeintro_button').on('click',function(){
      //     $('.intro-video-layer').hide();
      // });

});


//Course Price-Card

$('.course-info-backdrop').find('.close').on('click',function(){
  $(this).parent().hide();
})




//Shinging Course

//Love To Write
$('#loveToWrite').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/love-to-write.php');
  })

//Grammar
$('#grammar').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/grammar.php');
  })

//critical_reading
$('#critical_reading').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/critical-reading.php');
  })

//Love Read
$('#critical_reading').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/love-to-read.php');
  })

//Speaking
$('#speaking').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/speaking.php');
  })

//Phonics
$('#phonics').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/phonics.php');
  })

//General Chinese
$('#語文基礎班').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/general-chinese.php');
  })

//愛上語文
$('#愛上語文').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/love-chinese.php');
  })

//寫作班
$('#寫作班').on('click',function(){
    $('#course_lightbox').show();
    $('#course_lightbox #course-loader').load('course-html/shining/chinese-writing.php');
  })


