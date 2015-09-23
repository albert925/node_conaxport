$(window).load(function() {
  $(".slider").nivoSlider({
    effect:'fade',
    slices:15,
    boxCols:8,
    boxRows:4,
    animSpeed:500,
    pauseTime:10000,
    pauseOnHover:true,
    controlNav:true,
    controlNavThumbs:false,
    manualAvance:false,
    prevText:'Prev',
    nextText:'Next',
    randomStart:false
  });
});