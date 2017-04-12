$(document).ready(function(){

	$(".big_slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: [
			"<div class='slider_nav_arrow'><i class='fa fa-angle-left'></i></div>", 
			"<div class='slider_nav_arrow'><i class='fa fa-angle-right'></i></div>"
		],
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
	$('.slide').matchHeight();
	$('.adv_height').matchHeight();
	$('.feed_slider').matchHeight();

	$(".accordion_head").click(function(){
		$(".accordion_head").not(this).each(function(){
			$(this).find("i").addClass("fa-plus");
			$(this).find("i").removeClass("fa-minus");
			$(this).next().slideUp(300);
		});
		$(this).find("i").toggleClass("fa-plus");
		$(this).find("i").toggleClass("fa-minus");
		$(this).next().stop().slideToggle(300);
	});

	$(".cat_list_item").mouseenter(function(){
		$(".cat_list_item").not(this).removeClass("active");
		var sub_ul = $(this).addClass("active").find(".sub_cat_list");
		$(".sub_cat_list").not(sub_ul).stop().slideUp(300);
		$(sub_ul).stop().slideDown(300);
	});

});

$(window).resize(function(){
	$('.slide').matchHeight();
});