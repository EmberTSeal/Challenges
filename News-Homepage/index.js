$(window).resize(function(e){
    if($(window).width() < 768) {
    console.log($(window).width());
       $("#mainArticleImg").each(function() {
       $(this).attr("src", "assets/images/image-web-3-mobile.jpg");
                 });
             } else if ($(window).width() >= 768) {
                 $("#mainArticleImg").each(function() {
                 $(this).attr("src","assets/images/image-web-3-desktop.jpg");
                 });                        
     }         
 });

$(document).ready(function () {
    $('.navbar-toggler-icon').click(function () {
        $('.navbar-toggler-icon').toggleClass('navbar-toggled-on');
    })    
});
