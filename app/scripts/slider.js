var Slide = function(){
	this.$slideBox = $('.slide');
	this.$navCircle = $('.slide-nav');
	this.countSlide = this.$slideBox.find('li').length;
	this.activeClass = 0;
	this.classDeleted = 'active animated fadeOutLeft fadeInRight fadeOutRight';
	this.isActive = false;
	this.navCreate();
}

Slide.prototype.nextSlide = function(){
	var issetNext = this.$slideBox.find('li').eq(this.activeClass).next();
	this.$slideBox.find('li').removeClass(this.classDeleted);
	this.$slideBox.find('li').eq(this.activeClass).addClass('active');
	if(issetNext.length !== 0){
		this.$slideBox.find('li').eq(this.activeClass).addClass('animated fadeOutLeft');
		this.$slideBox.find('li').eq(this.activeClass).next().addClass('active animated fadeInRight');
		this.activeClass++;
	}else{
		this.$slideBox.find('li').eq(this.activeClass).addClass('animated fadeOutLeft');
		this.activeClass = 0;
		this.$slideBox.find('li').eq(this.activeClass).addClass('active animated fadeInRight');
	}
	this.setStatusSlide();
}

Slide.prototype.prevSlide = function(){
	var issetNext = this.$slideBox.find('li').eq(this.activeClass).prev();
	this.$slideBox.find('li').removeClass(this.classDeleted);
	this.$slideBox.find('li').eq(this.activeClass).addClass('active');
	if(issetNext.length !== 0){
		this.$slideBox.find('li').eq(this.activeClass).addClass('animated fadeOutRight');
		this.$slideBox.find('li').eq(this.activeClass).prev().addClass('active animated fadeInLeft');
		this.activeClass--;
	}else{
		this.$slideBox.find('li').eq(this.activeClass).addClass('animated fadeOutRight');
		this.activeClass = this.$slideBox.find('li').length - 1;
		this.$slideBox.find('li').eq(this.activeClass).addClass('active animated fadeInLeft');
	}
	this.setStatusSlide();
}

Slide.prototype.next = function(){
	if (!this.isActive) {
		this.nextSlide();
		this.navSetActive();
	};
}

Slide.prototype.prev = function(){
	if (!this.isActive) {
		this.prevSlide();
		this.navSetActive();
	};
}

Slide.prototype.setStatusSlide = function(){
	this.isActive = true;
	var self = this;
	setTimeout(function(){
		self.isActive = false;
	}, 1000)
}

Slide.prototype.navSetActive = function(){
	this.$navCircle.find('li').removeClass('active');
	this.$navCircle.find('li').eq(this.activeClass).addClass('active');
}

Slide.prototype.navCreate = function(){
	var self = this;
	this.$slideBox.find('li').each(function(){
		self.$navCircle.append('<li><span></span></li>');
	});
	this.$navCircle.find('li').eq(0).addClass('active');
}

var Slider = new Slide();