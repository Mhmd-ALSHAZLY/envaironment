$(document).ready(function() {
    $("#Dcard1").mouseenter(function(){
        $("#Ch21").slideUp(function(){$("#Info1").slideToggle()});
        
    })
    $("#Dcard1").mouseleave(function(){
        $("#Info1").slideToggle(function(){$("#Ch21").slideDown()});
        
    })
    
    $("#Dcard2").mouseenter(function(){
        $("#Ch22").slideUp(function(){$("#Info2").slideToggle()});
        
    })
    $("#Dcard2").mouseleave(function(){
        $("#Info2").slideToggle(function(){$("#Ch22").slideDown()});
        
    })
    
    $("#Dcard3").mouseenter(function(){
        $("#Ch23").slideUp(function(){$("#Info3").slideToggle()});
        
    })
    $("#Dcard3").mouseleave(function(){
        $("#Info3").slideToggle(function(){$("#Ch23").slideDown()});
        
    })
    
    $("#Dcard4").mouseenter(function(){
        $("#Ch24").slideUp(function(){$("#Info4").slideToggle()});
        
    })
    $("#Dcard4").mouseleave(function(){
        $("#Info4").slideToggle(function(){$("#Ch24").slideDown()});
        
    })
    
    $("#member1").mouseenter(function(){
        $("#bPara1").slideUp(function(){$(".memIcon1").slideDown()});
    })
    $("#member1").mouseleave(function(){
        $(".memIcon1").slideUp(function(){$("#bPara1").slideDown()});
    })
    
    $("#member2").mouseenter(function(){
        $("#bPara2").slideUp(function(){$(".memIcon2").slideDown()});
    })
    $("#member2").mouseleave(function(){
        $(".memIcon2").slideUp(function(){$("#bPara2").slideDown()});
    })
    
    $("#member3").mouseenter(function(){
        $("#bPara3").slideUp(function(){$(".memIcon3").slideDown()});
    })
    $("#member3").mouseleave(function(){
        $(".memIcon3").slideUp(function(){$("#bPara3").slideDown()});
    })
    
    $("#member4").mouseenter(function(){
        $("#bPara4").slideUp(function(){$(".memIcon4").slideDown()});
    })
    $("#member4").mouseleave(function(){
        $(".memIcon4").slideUp(function(){$("#bPara4").slideDown()});
    })
    
    $("#member5").mouseenter(function(){
        $("#bPara5").slideUp(function(){$(".memIcon5").slideDown()});
    })
    $("#member5").mouseleave(function(){
        $(".memIcon5").slideUp(function(){$("#bPara5").slideDown()});
    })
    
    $("#member6").mouseenter(function(){
        $("#bPara6").slideUp(function(){$(".memIcon6").slideDown()});
    })
    $("#member6").mouseleave(function(){
        $(".memIcon6").slideUp(function(){$("#bPara6").slideDown()});
    })
    
    $("#member7").mouseenter(function(){
        $("#bPara7").slideUp(function(){$(".memIcon7").slideDown()});
    })
    $("#member7").mouseleave(function(){
        $(".memIcon7").slideUp(function(){$("#bPara7").slideDown()});
    })
    
    $("#member8").mouseenter(function(){
        $("#bPara8").slideUp(function(){$(".memIcon8").slideDown()});
    })
    $("#member8").mouseleave(function(){
        $(".memIcon8").slideUp(function(){$("#bPara8").slideDown()});
    })
    
    $("#projects").click(function(){
	$("html, body").animate({
		scrollTop: $("#part1").offset().top
	}, 1000);
    });
    
    $("#donate").click(function(){
	$("html, body").animate({
		scrollTop: $("#part2").offset().top
	}, 1000);
    });
    
    $("#testimonial").click(function(){
	$("html, body").animate({
		scrollTop: $("#part3").offset().top
	}, 1000);
    });
    
    $("#events").click(function(){
	$("html, body").animate({
		scrollTop: $("#part4").offset().top
	}, 1000);
    });
    
    $("#about").click(function(){
	$("html, body").animate({
		scrollTop: $("#part5").offset().top
	}, 1000);
    });
});