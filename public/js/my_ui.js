

jQuery.fn.accordion=function(){
    let $parent=this;
    $parent.addClass("accordion")
    .children(":even").addClass("title")
    .next().addClass("content fade")
    .first().addClass("in");
    $parent.on("click",".title",function(){
        $(this).next().toggleClass("in")
        .siblings().removeClass("in")
    })
}
