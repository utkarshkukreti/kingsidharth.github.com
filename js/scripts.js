/*
 * INDEX
 * 1. Sets minimum content height to full browser height.
 */


// 1. Sets minimum content height to full browser height.
$(function() {
  $("#content_box").css("min-height", $(window).height() ); 
  //$("#logo").css("height", $("#logo").css('width') );
}); 

//2. 
var os = navigator.platform;
