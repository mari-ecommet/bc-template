jQuery( document ).ready(function($){
  $(".contentButton").click(function(e){
    console.log($(this))
    if($(this).hasClass("active")){
      hideContent();
      return;
    }
    e.stopPropagation();
    showContent(this);
  });
  $(".contentContainer").click(function(e){
    e.stopPropagation();

    if($(this).parent().hasClass("search-icon")){
      return;
    }
    hideContent();
  });
})

jQuery(document).click(function(){
  hideContent();
})
$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.header-top').removeClass("closed");
    } else {
        $('.header-top').addClass("closed");
    }
});

  var showContent = function(item){
    hideContent();
    $(item).addClass("active");
    $(item).children(".contentContainer").addClass("active");
  }
  var hideContent = function(){
    $(".contentButton").removeClass("active");
    $(".contentContainer").removeClass("active");
  }
