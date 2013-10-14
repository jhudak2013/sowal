/* 
 * =============================================================
 * v.awesome
 * =============================================================
 */

$(function(){

/* 
 * =============================================================
 * IE FIXES
 * =============================================================
 */

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
	function getInternetExplorerVersion() {
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re	= new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) {
				rv = parseFloat( RegExp.$1 );
			}
		}
		return rv;
	}
	//Sample Check Version Function
	function checkVersion() {
		var msg = "You're not using Internet Explorer.";
		var ver = getInternetExplorerVersion();
		if ( ver > -1 ) {
			if ( ver >= 8.0 ) {
				msg = "You're using a recent copy of Internet Explorer."
			}
			else {
				msg = "You should upgrade your copy of Internet Explorer.";
			}
		}
		console.log( msg );
	}

	//checkVersion();

	$('.row-fluid').each(function(){
		$(this).find("[class*=\"span\"]:last-child").addClass('l');
	});
	

/* 
 * =============================================================
 * Some Vars
 * =============================================================
 */

	//Window Width
	$winWidth = $(window).width();
	//iPad Check
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	var ieVer = getInternetExplorerVersion();


/* 
 * =============================================================
 * BTN PULL DOWN
 * =============================================================
 */
	$('.btn-set-dropdown .drop').click(function(e){
		var $this = $(this);
		$this.closest('.btn-set-dropdown').find('ul').toggle();
		e.preventDefault();
	});
	
/* 
 * =============================================================
 * iDevices touch wipe
 * =============================================================
 */
	
	var ieVer = getInternetExplorerVersion();
	if(ieVer == -1) {
		// iDevice
		$("body").touchwipe({
			wipeLeft: function(e) {
				console.log("wipe left");
				e.preventDefault();
			},
			wipeRight: function(e) {
				console.log("wipe right");
				e.preventDefault();
			},
			wipeUp: function() {
				
			},
			wipeDown: function() {
	
			}
	
		});
	}




/* 
 * =============================================================
 * Home page tab slide
 * =============================================================
*/
	
	var tabWidth = $(".tab").width();
	var tabHalf = (tabWidth/2) - 15;
	$('.tab img').stop().animate({left: tabHalf}, 300);
	
	$(window).resize(function() { 
		var tabWidth = $(".tab").width();
		var tabHalf = (tabWidth/2) - 15;
		$('.tab img').stop().animate({left: tabHalf}, 300);
	});
	
	$('.home-bike-one').on('hover', function() {
		var tabWidth = $(".tab").width();
		var boxWidth = (tabWidth/3);
		var leftSlide = boxWidth/2 - 15;
		$('.tab img').stop().animate({left: leftSlide}, 300);
	});
	
	$('.home-bike-two').on('hover', function() {
		var tabWidth = $(".tab").width();
		var boxWidth = (tabWidth/3);
		var leftSlide = boxWidth/2;
		var totalLeftSlide = boxWidth + leftSlide - 15;
		$('.tab img').stop().animate({left: totalLeftSlide}, 300);
	});
	
	$('.home-bike-three').on('hover', function() {
		var tabWidth = $(".tab").width();
		var boxWidth = (tabWidth/3);
		var leftSlide = boxWidth/2;
		var totalLeftSlide = boxWidth + boxWidth + leftSlide - 15;
		$('.tab img').stop().animate({left: totalLeftSlide}, 300);
	});
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Homepage Pre-nav Section Cookie
 * =============================================================
*/
	
	if( $.cookie('showOnlyOne') ){
		//it is still within the session
		//hide the div
		$('#shownOnlyOnceADay').hide();
	} else {
		//either cookie already expired, or user never visit the site
		//create the cookie
		//$.cookie('showOnlyOne', 'showOnlyOne', { expires: 1});
		$.cookie('showOnlyOne', 'showOnlyOne');
		//and display the div
		$('#shownOnlyOnceADay').show();
	}
	
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Sticky Menu
 * =============================================================
*/
	
	$('.my-sticky-element').waypoint('sticky');
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Smooth Scroll to Bike Section
 * =============================================================
*/
	
	$('.bike-link').on('click', function(e) {
		$('body').scrollTo($('#bikes'), 500);
		e.preventDefault();
	});
	
	
	
	
/* 
 * =============================================================
 * Homepage Slider
 * =============================================================
*/
	
	$('#slider').nivoSlider({
		effect: 'fade',
		animSpeed: 400,
		pauseTime: 4000,
		directionNav: true,
		controlNav: true,
	});
	
	$('.nivo-nextNav').on('mouseover', function(e) {
		$(this).addClass('btn-hover');
		e.preventDefault();
	});
	
	$('.nivo-nextNav').on('mouseout', function(e) {
		$(this).removeClass('btn-hover');
		e.preventDefault();
	});
	
	$('.nivo-prevNav').on('mouseover', function(e) {
		$(this).addClass('btn-hover');
		e.preventDefault();
	});
	
	$('.nivo-prevNav').on('mouseout', function(e) {
		$(this).removeClass('btn-hover');
		e.preventDefault();
	});
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Slider arrows 'top' css
 * =============================================================
*/
	
	if ($(window).width() < 1600) {
		var sliderHeight = $("#slider").height();
		var sliderHalf = (sliderHeight/2);
		$('.nivo-nextNav').css('top', sliderHalf);
		$('.nivo-prevNav').css('top', sliderHalf);
	}
	
	$(window).resize(function() { 
		if ($(window).width() < 1600) {
			var sliderHeight = $("#slider").height();
			var sliderHalf = (sliderHeight/2);
			$('.nivo-nextNav').css('top', sliderHalf);
			$('.nivo-prevNav').css('top', sliderHalf);
		}
	});
	
	if ($(window).width() > 1600) {
		$('.nivo-nextNav').css('top', 450);
		$('.nivo-prevNav').css('top', 450);
	}
	
	$(window).resize(function() { 
		if ($(window).width() > 1600) {
			$('.nivo-nextNav').css('top', 450);
			$('.nivo-prevNav').css('top', 450);
		}
	});
	
	
	
	
	
	
/* 
 * =============================================================
 * Smooth Scroll to Bike Section
 * =============================================================
*/
	
	$('input.pretty-check').prettyCheckable();
	
	
	
	
	
	
/* 
 * =============================================================
 * Bike Form More Info Links
 * =============================================================
*/
	/* Features - Option 1 */
	var featuresOption1Link = $('.features-option1 .more-info-link');
	var featuresOption1Box = $('.features-option1 .more-info-box');
	var featuresOption1Price = $('.features-option1 .form-price');
	$(featuresOption1Box).hide();
	$(featuresOption1Link).on('click', function() {
		$(featuresOption1Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Features - Option 2 */
	var featuresOption2Link = $('.features-option2 .more-info-link');
	var featuresOption2Box = $('.features-option2 .more-info-box');
	var featuresOption2Price = $('.features-option2 .form-price');
	$(featuresOption2Box).hide();
	$(featuresOption2Link).on('click', function() {
		$(featuresOption2Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Frame - Option 1 */
	var frameOption1Link = $('.frame-option1 .more-info-link');
	var frameOption1Box = $('.frame-option1 .more-info-box');
	var frameOption1Price = $('.frame-option1 .form-price');
	$(frameOption1Box).hide();
	$(frameOption1Link).on('click', function() {
		$(frameOption1Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Frame - Option 2 */
	var frameOption2Link = $('.frame-option2 .more-info-link');
	var frameOption2Box = $('.frame-option2 .more-info-box');
	var frameOption2Price = $('.frame-option2 .form-price');
	$(frameOption2Box).hide();
	$(frameOption2Link).on('click', function() {
		$(frameOption2Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Saddle - Brooks B17 */
	var saddleBrooksB17Link = $('.saddle-brooksb17 .more-info-link');
	var saddleBrooksB17Box = $('.saddle-brooksb17 .more-info-box');
	var saddleBrooksB17Price = $('.saddle-brooksb17 .form-price');
	$(saddleBrooksB17Box).hide();
	$(saddleBrooksB17Link).on('click', function() {
		$(saddleBrooksB17Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Saddle - Fizik */
	var saddleFizikLink = $('.saddle-fizik .more-info-link');
	var saddleFizikBox = $('.saddle-fizik .more-info-box');
	var saddleFizikPrice = $('.saddle-fizik .form-price');
	$(saddleFizikBox).hide();
	$(saddleFizikLink).on('click', function() {
		$(saddleFizikBox).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Saddle - Brooks Swallow Titanium Black Leather */
	var saddleBrooksSLink = $('.saddle-brooksswallow .more-info-link');
	var saddleBrooksSBox = $('.saddle-brooksswallow .more-info-box');
	var saddleBrooksSPrice = $('.saddle-brooksswallow .form-price');
	$(saddleBrooksSBox).hide();
	$(saddleBrooksSLink).on('click', function() {
		$(saddleBrooksSBox).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Grips - Option 1 */
	var gripsOption1Link = $('.grips-option1 .more-info-link');
	var gripsOption1Box = $('.grips-option1 .more-info-box');
	var gripsOption1Price = $('.grips-option1 .form-price');
	$(gripsOption1Box).hide();
	$(gripsOption1Link).on('click', function() {
		$(gripsOption1Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Grips - Option 2 */
	var gripsOption2Link = $('.grips-option2 .more-info-link');
	var gripsOption2Box = $('.grips-option2 .more-info-box');
	var gripsOption2Price = $('.grips-option2 .form-price');
	$(gripsOption2Box).hide();
	$(gripsOption2Link).on('click', function() {
		$(gripsOption2Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Bearings - Option 1 */
	var bearingsOption1Link = $('.bearings-option1 .more-info-link');
	var bearingsOption1Box = $('.bearings-option1 .more-info-box');
	var bearingsOption1Price = $('.bearings-option1 .form-price');
	$(bearingsOption1Box).hide();
	$(bearingsOption1Link).on('click', function() {
		$(bearingsOption1Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Bearings - Option 2 */
	var bearingsOption2Link = $('.bearings-option2 .more-info-link');
	var bearingsOption2Box = $('.bearings-option2 .more-info-box');
	var bearingsOption2Price = $('.bearings-option2 .form-price');
	$(bearingsOption2Box).hide();
	$(bearingsOption2Link).on('click', function() {
		$(bearingsOption2Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Handlebars - Option 1 */
	var handleOption1Link = $('.handle-option1 .more-info-link');
	var handleOption1Box = $('.handle-option1 .more-info-box');
	var handleOption1Price = $('.handle-option1 .form-price');
	$(handleOption1Box).hide();
	$(handleOption1Link).on('click', function() {
		$(handleOption1Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	/* Handlebars - Option 2 */
	var handleOption2Link = $('.handle-option2 .more-info-link');
	var handleOption2Box = $('.handle-option2 .more-info-box');
	var handleOption2Price = $('.handle-option2 .form-price');
	$(handleOption2Box).hide();
	$(handleOption2Link).on('click', function() {
		$(handleOption2Box).slideToggle();
		$(this).removeClass('more-info-link-hover');
		$(this).toggleClass('more-info-link-open');
	});
	
	
	
	
	
	
	
	/* More Info Rollovers */
	var moreLink = $('.more-info-link');
	$(moreLink).mouseover(function() {
		if ($(this).hasClass('more-info-link-open')) {
		}
		else {
			$(this).addClass('more-info-link-hover');
		}
	});
	$(moreLink).mouseout(function() {
		if ($(this).hasClass('more-info-link-open')) {
		}
		else {
			$(this).removeClass('more-info-link-hover');
		}
	});
	
	
	
	
	
	
	
	/* Men Features Red Radio Labels and Prices */
	$(".input-group-men-features input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-features .form-entry').removeClass('form-click-color');
			$('.input-group-men-features .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	/* Men Frames Red Radio Labels and Prices */
	$(".input-group-men-frame input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-frame .form-entry').removeClass('form-click-color');
			$('.input-group-men-frame .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	/* Men Saddle Red Radio Labels and Prices */
	$(".input-group-men-saddle input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-saddle .form-entry').removeClass('form-click-color');
			$('.input-group-men-saddle .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	/* Men Grips Red Radio Labels and Prices */
	$(".input-group-men-grips input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-grips .form-entry').removeClass('form-click-color');
			$('.input-group-men-grips .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	/* Men Bearings Red Radio Labels and Prices */
	$(".input-group-men-bearings input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-bearings .form-entry').removeClass('form-click-color');
			$('.input-group-men-bearings .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	/* Men Handlebars Red Radio Labels and Prices */
	$(".input-group-men-handle input[type='radio']").change(function(){
		if(this.checked) {
			$('.input-group-men-handle .form-entry').removeClass('form-click-color');
			$('.input-group-men-handle .form-price').removeClass('form-click-color');
			$(this).closest('.input').find('.form-entry').addClass('form-click-color');
			$(this).closest('.input').find('.form-price').addClass('form-click-color');
		}
	});
	
	
	
	
	
	
	/* Men Toggle Input Groups */
	
	var mensInput = ('#mens-custom-form .input-group');
	$(mensInput).find('.input').hide();
	
	$(mensInput).find('label').on('click', function() {
		if ($(this).find('.title').hasClass('blue-title')) {
		}
		else {
			$(mensInput).find('.closed-circle').removeClass('open-circle');
			$(mensInput).find('.input').slideUp();
			$(mensInput).find('.more-info-box').slideUp();
			$(mensInput).find('label .title').removeClass('blue-title');
			$(mensInput).find('.more-info-link').removeClass('more-info-link-open');
			$(this).closest('.input-group').find('.input').slideToggle();
			$(this).closest('.input-group').find('.closed-circle').addClass('open-circle');
			$(this).find('.title').addClass('blue-title');
		}
	});
	
	$(mensInput).find('.closed-circle').on('click', function() {
		if ($(this).closest('.input-group').find('.title').hasClass('blue-title')) {
		}
		else {
			$(mensInput).find('.closed-circle').removeClass('open-circle');
			$(mensInput).find('.input').slideUp();
			$(mensInput).find('.more-info-box').slideUp();
			$(mensInput).find('label .title').removeClass('blue-title');
			$(mensInput).find('.more-info-link').removeClass('more-info-link-open');
			$(this).closest('.input-group').find('.input').slideToggle();
			$(this).closest('.input-group').find('.closed-circle').addClass('open-circle');
			$(this).closest('.input-group').find('.title').addClass('blue-title');
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	/* Men's Form Calculations */
	
	function recalculate() {
		var sum = 0;
		$("#mens-custom-form input[type=radio]:checked").each(function () {
			sum += parseFloat($(this).val());
		});
		$("#sum").html(sum.toFixed());
	}
	$("#mens-custom-form input[type=radio]").change(function () {
		recalculate();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
/* 
 * =============================================================
 * Styled Radio Buttons
 * =============================================================
*/
	$('input.pretty-check').prettyCheckable();
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
}); //end ready function
