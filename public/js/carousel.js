
$(function(){
    $.ajax({
      url:"carousel.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("#carousel");
        $(`<link rel="stylesheet" href="css/carousel.css">`).appendTo("head");
      }
    })
  })
