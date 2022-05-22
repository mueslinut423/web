$(document).ready(function(){


  $(".menu > li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown(300);
  });

  $(".menu > li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp(150);
  });
  //menu

  
  var slideCount = $(".slide > ul > li").length;
  //alert(slideCount);
  var currentIndex = 0;

  setInterval(function(){
    if(currentIndex < slideCount - 1){
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    var slidePosition = currentIndex * (-800)+ "px";
    $(".slideList").animate({left:slidePosition},400);

  },3000);
  //slide

  var tabBtn = $(".tab-btn > ul > li");
  var tabCont = $(".tab-cont > div");

  tabCont.hide().eq(0).show();

  tabBtn.click(function(e){
    e.preventDefault();

    var target = $(this);
    var index = $(target).index();

    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
  });

//tabmenu


$(".notice").click(function(){
  $(".layerPopup").show();
});

$(".close").click(function(){
  $(".layerPopup").hide();
});
  
});
//ready