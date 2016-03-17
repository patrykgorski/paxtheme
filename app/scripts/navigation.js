var Menu = (function(){
	var $mobileMenu = $('.nav-mobile-box'),
		$header = $('header'),
		$body = $('body'),
		$buttonMobile = $('.button-mobile'),
		isScroll = false,
		isMobileMenu = false;

	function _addActiveClass(){
		$mobileMenu.addClass('active');
		$header.addClass('header-mobile-active');
		$buttonMobile.addClass('button-active');
		_bodyOverflow(true);
		isMobileMenu = true;
	}

	function _removeActiveClass(){
		$mobileMenu.removeClass('active');
		$header.removeClass('header-mobile-active');
		$buttonMobile.removeClass('button-active');
		_bodyOverflow(false);
		isMobileMenu = false;
	}

	function _bodyOverflow(over){
		if(over){
			$body.css({"overflow":"hidden"});
		}else{
			$body.css({"overflow":"scroll"});
		}
	}

	function addScrollMenu(scroll){
		if(scroll > $header.innerHeight()+2 && !isScroll && window.innerWidth>665){
			$header.addClass('header-scroll');
			//isScroll = true;
		}else{
			$header.removeClass('header-scroll');
			//isScroll = false;
		}
	}

	function initMobileMenu(){
		if(!isMobileMenu && window.innerWidth<=665){
			_addActiveClass();
		}else{
			_removeActiveClass();
		}
	}

	return	{
		menuMobile: initMobileMenu,
		isMobileMenu: isMobileMenu,
		scrollMenu: addScrollMenu
	}

})();