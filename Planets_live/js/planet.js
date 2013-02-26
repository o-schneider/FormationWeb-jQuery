$("li").hover(function(){
	$(this).children("img").animate({
		"opacity": "0.5"
	},500);
	$(this).children("p").fadeIn(500);
}, function(){
	$(this).children("img").animate({
		"opacity": "1"
	},500);
	$(this).children("p").fadeOut(500);
});