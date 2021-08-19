$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
});
jQuery(function($){
    var lastHeight = 0, curHeight = 0, $frame = $('iframe:eq(0)');
    setInterval(function(){
      curHeight = $frame.contents().find('body').height();
      if ( curHeight != lastHeight ) {
        $frame.css('height', (lastHeight = curHeight) + 50 + 'px' );
      }
    },500);
  });
$(document).ready(function(){
    $(".dept1").show();
    $(".dept2").hide();
    $(".dept3").hide();
    $(".dept4").hide();
    $("select.depto").change(function(){ // department is the class name of the select tag
        if($(this).children("option:selected").val() == "one")
        {
            $(".dept1").show();
            $(".dept2").hide();
            $(".dept3").hide();
            $(".dept4").hide();
        } 
        else if($(this).children("option:selected").val() == "two")
        {
            $(".dept1").hide();
            $(".dept2").show();
            $(".dept3").hide();
            $(".dept4").hide();
        }
        else if($(this).children("option:selected").val() == "three")
        {
            $(".dept1").hide();
            $(".dept2").hide();
            $(".dept3").show();
            $(".dept4").hide();
        }
        else if($(this).children("option:selected").val() == "four")
        {
            $(".dept1").hide();
            $(".dept2").hide();
            $(".dept3").hide();
            $(".dept4").show();
        }
    });
});