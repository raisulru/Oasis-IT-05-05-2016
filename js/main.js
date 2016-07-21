(function(){
// js for all team slider
	$(function () {
		$('#all-team').carouseller({
		scrollSpeed: 1000,
		autoScrollDelay: false,
		easing: 'linear'
		});
	});
	// js for network-team slider
	$(function () {
		$('#network-team').carouseller({
		scrollSpeed: 200,
		autoScrollDelay: 3000,
		easing: 'linear'
		});
	});
	// js for web-team slider
	$(function () {
		$('#web-team').carouseller({
		scrollSpeed: 1000,
		autoScrollDelay: 3000,
		easing: 'linear'
		});
	});
	// js for linux team slider
	$(function () {
		$('#linux-team').carouseller({
		scrollSpeed: 200,
		autoScrollDelay: 3000,
		easing: 'linear'
		});
	});
	//js for team images
	$("#team .span4.carousel-block").hover(function () {
			$(this).find(".team-img img").css({"transform": "scale(1.2)", "transition": ".6s"});
			
	},function () {
		$(this).find(".team-img img").css({"transform": "scale(1)", "transition": ".6s"});
	}
	);
	 
	//js for smooth scroling
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    // js for search box
    $("#search-icon").css("cursor", "pointer").click(function() {
    	$("#myNavbar ul.nav").hide();
        $("#search").show("slow",function(){
        	$("#search input").animate({width: "100%"}, "slow");
        });
    });
    $("#search p").click(function() {
    	$("#search input").animate({width: "2%"}, "slow",function(){
    		$("#search").hide("slow");
    		$("#myNavbar ul.nav").show("slow");
    	});
    });
    
    // the js counter system
    var totalItems = $("#slider-2016").find('.item').length;
	var currentIndex = $('#slider-2016 .item.active').index() + 1;
	var restItem = totalItems-currentIndex;

	$('#slider-2016').on('slid.bs.carousel', function() {
	    currentIndex = $('#slider-2016 .item.active').index() + 1;
	    restItem = totalItems-currentIndex;
	   $('#slider-2016 .counter').html(''+currentIndex+'');
	   $('.total').html(''+restItem+'');
	   $('#photos ul.nav li a span').html(''+totalItems+'');
	});
	//js for galary text
	$("#galary ul.nav li a").hover(function(){
    $(this).find("p").toggleClass("galary_a_color");
    
  });
})();