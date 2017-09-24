$(document).ready(function(){

$(".logo").click(function(){
  if ($('#nav').classname !== "hidden") {
    $("#nav").toggleClass("hidden");
    $("#mainWindow").toggleClass("col-md-12");
    $("#mainWindow").toggleClass("col-md-9");


  }
});


});
