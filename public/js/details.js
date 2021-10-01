/* $(function(){
  //獲得當前地址欄中的lid值
  let lid=location.search.split("=")[1];
  console.log(lid);
  if(lid!==undefined){
    //向服務端接口發送請求, 並攜帶參數
    $.ajax({
      url:"http://localhost:3000/details",
      type:"get",
      data:{lid}, //{lid:lid}可簡化
      dataType:"json",
      success:function(result){
        //console.log(result);
        let {product,specs}=result;
        let {title,subtitle,price,promise}=product;
        $("#ptitle").html(title);
        $("#p_sub_title").html(title);
        $("#pprice").html("$"+price.toFixed(2));
        $("#promise").html(promise);
        let html=""
        //循環每個specs中每個物件
        for(let sp of specs){
          //誰被點到誰變紅, 剛好規格的lid=網址上的lid          
          html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?'active':''}" href="product_details.html?lid=${sp.lid}">${sp.spec}</a>`
        }
        $("#specs").html(html);
      }
    })
  }
})

 */













$(function(){
  let lid=location.search.split("=")[1];
  console.log(lid);
  if(lid!==undefined){
    $.ajax({
      url:"http://localhost:3000/details",
      type:"get",
      data:{lid},
      datatype:"json",
      success:function(result){
        let {product,specs}=result;
        let {title,subtitle,price,promise}=product;
        $("#ptitle").html(title);
        $("#p_sub_title").html(subtitle);
        $("#pprice").html(price);
        $("#ppromise").html(promise);
        let html="";
        for(var sp of specs){
          html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?'active':''}" href="product_details.html?lid=${sp.lid}">${sp.spec}</a>`
        }
        $("#specs").html(html);
      }
    })
  }
})