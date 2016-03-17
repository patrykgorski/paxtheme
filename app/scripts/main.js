$('.button-mobile').on('click', function(){
	Menu.menuMobile();
})

$(window).on('scroll', function(){
	Menu.scrollMenu($(window).scrollTop());
})

$('.button-prev').on('click', function(){
	Slider.prev();
});

$('.button-next').on('click', function(){
	Slider.next();
});