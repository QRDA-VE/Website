// transiciones lentas
jQuery(document).ready(function($) {
    
    $('a[href^=#]').on("click",function(e){
        var t= $(this.hash);
        var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
        if(t.length){
            var tOffset=t.offset().top;
            $('html,body').animate({scrollTop:tOffset-20},'slow');
            e.preventDefault();
        }
    })

});

// jQuery para colapsar el navbar mientras se desplaza
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
