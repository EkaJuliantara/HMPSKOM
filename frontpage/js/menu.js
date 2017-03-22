$(document).ready(function (){
    var menu = $(".menu").height();
    if($(document).width() <= 788)
    {
        $(".menu").hide();
        $(".closebtn").hide();
    }else{
        menu=0;
    }

    $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
       var target = this.hash,
       $target = $(target);
          var scrollAmount = $target.offset().top - menu;
    $("html, body").animate({ scrollTop: scrollAmount }, "slow");
   });
})
function openNav() {
    $(".menu").slideToggle("slow");
    $(".menu").show();
    $(".closebtn").show();
    $(".openbtn").hide();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
        if($(window).width()<=788){
        $(".menu").slideToggle("slow");
        $(".openbtn").show();
        $(".closebtn").hide();
    }
 }
function closetab(){
    $(".menu").hide();
}
