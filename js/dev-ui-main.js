//All UI JS here...

//Page Inti
document.addEventListener('DOMContentLoaded', (event) => {
  
   setTimeout(function(){ 
      document.body.scrollTop = 0;
      //Load Video
      var introVid = $('video#intro_video');
      introVid.html('<source src="mp4/intro-video_sm.mp4" type="video/mp4">')

   },900)


});




var videoAttr = $('body').find("  [data-type='video'] " );
var closeBtn =  videoAttr.find(':button.close');

  $(':button.close').on('click',function(){


      if( $(this).closest(videoAttr) ){
              
          var video = $(this).find('video');
          console.log(video);
          //$(this).closest(videoAttr).hide();
          
        
      }
  });


//Global Function
$(document).ready(function(){
  
  $('*').find(':button.close').on('click',function(){
      //$(this).parent().hide();


      //console.log( $(this).closest().find("[data-type='video']") ) ;

      if( videoLayer )
      {
        //console.log( $(this).closest().find("[data-type='video']") ) ;
        //videoLayer.hide();
        //video.pause();
      }

      //Pause Video When CLick Close Button 
      //var vid = document.getElementById("intro_video");
        //vid.pause();
      })

    //Go to Top Button
    $('.goTop_btn').on('click',function(){ $('body').stop().animate({scrollTop:0}, 1000); })


    //Owl Slider
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      center: true,
      navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    //AOS JS
    AOS.init();


    //Scroll Down Navbar fixed Top
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

  })

});



//Video Inti
$(document).ready(function() {

  var videoLayer = $('.intro-video-layer');
  var vidClose_btn =  $('.intro-video-layer').find('.close');
  var video = document.getElementById("intro_video");

      setTimeout(function(){ 
 
            vidClose_btn.on('click',function(){
                //videoLayer.hide();
                //video.pause();
            })

            $(document).on('click',function(e){

              if( !$(e.target).hasClass('intro-video') ) {
                  return;
              }
              videoLayer.hide();
              video.pause();
            })

      }, 0); //Run time interval

      video.onended = function(){
         videoLayer.hide();
      }
});


//Course Iframe

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


