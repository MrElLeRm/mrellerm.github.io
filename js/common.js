var slick_counter = 0;

$(document).ready(function(){

	$(".big_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
			"<div class='slider_nav_arrow'><i class='fa fa-angle-left'></i></div>", 
			"<div class='slider_nav_arrow'><i class='fa fa-angle-right'></i></div>"
		],
		autoHeight:true
	});
	$(".works_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
			"<div class='slider_nav_arrow'><i class='fa fa-angle-left'></i></div>", 
			"<div class='slider_nav_arrow'><i class='fa fa-angle-right'></i></div>"
		],
	});
	$(".feed_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
			"<div class='slider_nav_arrow'><i class='fa fa-chevron-left'></i></div>", 
			"<div class='slider_nav_arrow'><i class='fa fa-chevron-right'></i></div>"
		],
	});
	$(".leave_review_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
			"<div class='slider_nav_arrow'><i class='fa fa-chevron-left'></i></div>", 
			"<div class='slider_nav_arrow'><i class='fa fa-chevron-right'></i></div>"
		],
	});
	
	$('.adv_height').matchHeight();
	$('.feed_slider').matchHeight();

	$(".tab .accordion_head").click(function(){
		$(".accordion_head").not(this).each(function(){
			$(this).find("i").addClass("fa-plus");
			$(this).find("i").removeClass("fa-minus");
			$(this).next().slideUp(300);
		});
		$(this).find("i").toggleClass("fa-plus");
		$(this).find("i").toggleClass("fa-minus");
		$(this).next().stop().slideToggle(300);
	});

	$(".orders .accordion_head").click(function(){
		$(".accordion_head").not(this).each(function(){
			$(this).find(".accordion_controll").addClass("fa-chevron-down");
			$(this).find(".accordion_controll").removeClass("fa-chevron-up");
			$(this).parent().parent().removeClass("active");
			$(this).next().slideUp(300);
		});
		$(this).find(".accordion_controll").toggleClass("fa-chevron-up");
		$(this).find(".accordion_controll").toggleClass("fa-chevron-down");
		$(this).parent().parent().toggleClass("active");
		$(this).next().stop().slideToggle(300);
	});


	$(".cat_list_item").click(function(){
		$(".cat_list_item").not(this).removeClass("active");
		var sub_ul = $(this).toggleClass("active").find(".sub_cat_list");
		$(".sub_cat_list").not(sub_ul).stop().slideUp(300);
		$(sub_ul).stop().slideToggle(300);
	});


	// $("#send_request_button").magnificPopup({
	//   	items: {
	// 	    src: '#send_request',
	// 	    type: 'inline'
	// 	},
	// 	mainClass: 'mfp-move-from-top',
	// });

	$(".login_link").click(function(){
		$(".login_form").stop().slideToggle(200);
	});

	$(".login_form_close").click(function(){
		$(this).parent().slideUp(200);

	});

	$(".top_cart_wrapp").click(function(sender){
		if(sender.target == $(this).get(0) || sender.target == $(this).find(".fa").get(0) || sender.target == $(this).find(".badge").get(0))
			$(this).find(".cart_block").stop().slideToggle();
	});

	$(".profile").click(function(){
		$(".profile_sub_menu").stop().slideToggle();
	});
});


$(window).scroll(function(){
	slickNav();
});

$(window).resize(function(){
});

function slickNav(){

	$slickNav = $(".top_line");
	if($(document).scrollTop() > 100);
	{
		slick_counter++;
		if(slick_counter > 1) return;
		$("header").css("padding-top", $slickNav.height() + "px");
		$slickNav.css("top", "-" + $slickNav.height() + "px");
		$slickNav.addClass("fixed").animate({
			top: 0
		}, 100, "linear", function(){
			$slickNav.css("top", "0");
		});

	}
	if($(document).scrollTop() == 0)
	{
		$("header").css("padding-top", "0");
		$slickNav.css("top", "-" + $slickNav.height() + "px");
		$(".top_line").removeClass("fixed");
		slick_counter = 0;
	}
}

