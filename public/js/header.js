
$(function(){
    $.ajax({
      url:"MyHeader.html",
      type:"get",
      success:function(result){
        $(result).replaceAll("#my-header");
        $(`<link rel="stylesheet" href="css/MyHeader.css">`).appendTo("head");
      }
    })
  })
  