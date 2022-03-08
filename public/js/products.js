
$(function(){
    
    var fid = location.search.replace(/\?/g,"");    
    $.ajax({
        url:"/products/products?family_id=" + fid,        
        methods:"get",
        dataType:"json",
        success:function(res){
            console.log(res);
            $('.banner').css('background-image', 'url(' + res[0].pic + ')');

            var html="";
            var others=res;
            for(var p of others){
                html+=`<div class="item">
                <div class="pic">
                    <a href="/detail?${p.gid}"><img src="${p.pic}" alt=""></a>
                </div>
                <div class="text">
                    <h3>${p.title}NT$${p.price}</h3>
                </div>
            </div>`
            }
            console.log(html);
            document.getElementById("others").innerHTML=html


            let perPage = 6;
            let numItems = $(".item").length;
            
            var from = perPage*(0);
            //起始+每個頁面要顯示幾個項目
            var to = from+perPage;
            $(".item").hide().slice(from, to).show();

            $("item").slice(perPage).hide();
            $("#pagination-container").pagination({
                items:numItems,
                itemsOnPage: perPage,
                prevText: "&laquo;",
                nextText: "&raquo;",
                onPageClick:function(pageNumber){
                    //每個頁面要顯示幾個項目*(第幾頁-1)
                    var from = perPage*(pageNumber-1);
                    //起始+每個頁面要顯示幾個項目
                    var to = from+perPage;
                    $(".item").hide().slice(from, to).show();
                }
            })

        }
    })
})