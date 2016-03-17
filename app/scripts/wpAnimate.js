
//OPEN TEXT

$('#wp-open-1').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element+'.open-text-box').addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element+'.open-text-box').css({"opacity":1});
  }, 400)
}, {
  offset: '100%'
});

$('#wp-open-2').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element+'.open-text-box').addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element+'.open-text-box').css({"opacity":1});
  }, 400)
}, {
  offset: '100%'
});

$('#wp-open-3').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element+'.open-text-box').addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element+'.open-text-box').css({"opacity":1});
  }, 400)
}, {
  offset: '100%'
});

//BACKGROUND MACBOOK

$('#wp-macbook').waypoint(function(direction) {
	$('#'+this.element.id+' .macbook-bg img').each(function(index){
		index ? ($(this).addClass('animated fadeInLeft')) : ($(this).addClass('animated fadeInRight'));
	});
}, {
  offset: '50%'
});

//INFO CONTENT

$('#wp-info-1').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
  
}, {
  offset: '100%'
});

$('#wp-info-2').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-info-3').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-info-4').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

//ABOUT US

$('#wp-info-5').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-info-6').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-info-7').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-info-8').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element).addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element).css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-schema-1').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element+' div').addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element+' div').css({"opacity":1});
  },400);
}, {
  offset: '100%'
});

$('#wp-schema-2').waypoint(function(direction) {
	var element = this.element.id;
  $('#'+element+' div').addClass('animated flipInX');
  setInterval(function(){
  	$('#'+element+' div').css({"opacity":1});
  },400);
}, {
  offset: '100%'
});
