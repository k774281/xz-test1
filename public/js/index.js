
$(function(){
  let lid=location.search.split("=")[1];
  console.log(lid);
  /* $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json",
    success:function(result){
      var [p1,p2,p3]=result;
      var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="d-inline-block mb-2">${p1.title}</h5>
          <h6 class="mb-5">
            <a class="text-dark" href="javascript:;">${p1.details}</a>
          </h6>
          <span class="text-primary">¥${p1.price.toFixed(2)}</span>
          <a class="btn btn-primary" href="${p1.href}">查看详情</a>
        </div>
        <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
      </div>`;
      document.getElementById("p1").innerHTML=html;

      var others=result.slice(3);
      for(var p of others){
        html+=`<div class="col-md-4 p-0 pl-2">
          <div class="card border-0 text-center">
            <img class="card-img-top" src="${p.pic}" alt="Card image cap">
            <div class="card-body p-0 pr-1 pl-1">
              <span class="d-inline-block">${p.title}</span>
              <span class="text-primary small">¥${p.price.toFixed(2)}</span>
              <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
            </div>
          </div>
        </div>`;
      }
      document.getElementById("others").innerHTML=html;
    }
  }) */
  
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

});