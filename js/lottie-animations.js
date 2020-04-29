$( document ).ready(function() {

    lottie.loadAnimation({
      wrapper: road_to_success_lot,
      animType: 'svg',
      loop: true,
      autoplay: false,
      path: 'js/lotties/roadtosuccess/road-to-success.json'
    });

    lottie.loadAnimation({
      wrapper: holdstars_lot,
      animType: 'svg',
      loop: true,
       autoplay: false,
      path: 'js/lotties/holdstars/data.json'
    });

    lottie.loadAnimation({
      wrapper: events_lot,
      animType: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_pGr4RC.json'
    });


    var el = lottie.loadAnimation({
      wrapper: exercise_lot,
      animType: 'svg',
      loop: true,
      autoplay: false,
      path: 'js/lotties/exercises/data.json'
    });

      $(this).find('.lotties').hover(function()
        { 
          lottie.play();
        },
        function(){
          lottie.stop();
        }
      );


  //Lotties Code here...
// $('#spotLight_Lotties').css({
//     width: 'auto',
//     height: '500px'
//   });

//   lottie.loadAnimation({
//     wrapper: spotLight_Lotties,
//     animType: 'svg',
//     loop: true,
//     path: 'https://assets6.lottiefiles.com/packages/lf20_Phx5aA.json'
//     path: 'https://assets6.lottiefiles.com/packages/lf20_Phx5aA.json'
//   });


});


