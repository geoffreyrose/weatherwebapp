function loadWeather(zip,location, woeid) {
	//$('.select-location').hide();
	$('.weather, .weather-controls').show();
	$.simpleWeather({
			zipcode: zip,
			unit: 'f',
			location: location,
			woeid: woeid,
			success: function(weather) {
				var city = '<h1>'+weather.city+', '+weather.region+'</h1>';
				var weatherIcon = '<p class="weather-icon"><span class="weather-'+weather.code+'"></span></p>';
				var locationDeatails = city + weatherIcon;
				var currentWeather = '<h2 class="current-weather">'+weather.currently+'<span class="fahrenheit"> '+weather.temp+'&deg;F</span></h2>';
				var forcast = '<section class="forcast fahrenheit"><h3>Today</h3><ul class="weatherforcast"><li>High '+ weather.forecast[0].high +'&deg;F</li><li>Low '+ weather.forecast[0].low +'&deg;F</li></ul><h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+ weather.forecast[1].high + '&deg;F</li><li>Low '+ weather.forecast[1].low +'&deg;F</li></ul></section>';

				//sunrise
				var sunInfo = '<section class="sunrise"><ul><li><h3>Sunrise</h3></li><li class="time">'+weather.sunrise+'</li></ul><ul><li><h3>Sunset</h3></li><li class="time">'+weather.sunset+'</li></ul></section>';
				var fiveday = '<ul>';

				for(var i = 0;i <= 4;i++){fiveday += '<li><span class="weekday">'+weather.forecast[i].day+'</span><span class="weather-icon weather-'+weather.forecast[i].code+'"></span><span><span class="fahrenheit">'+weather.forecast[i].high+'&deg;F</span></span><span><span class="fahrenheit">'+weather.forecast[i].low+'&deg;F</span>';}
				fiveday += '</ul>';

				$('.weather .location').html(locationDeatails);
				$('.weather .current-weather').html(currentWeather);
				$('.weather .forcast').html(forcast);
				$('.weather .sunInfo').html(sunInfo);
				$('.weather .fiveday').html(fiveday);
			},
			
			error: function(error) {
				$('.weather').html('<p>'+error+'</p>');
			}
		});
}

$(function() {
	var zip = '';
	var location = '';

	if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
	   	$('p.ios').show();
	}

	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			loadWeather('',position.coords.latitude+','+position.coords.longitude);
		});
	}

	$(".weather-locations").owlCarousel({
 
	    // Most important owl features
	    items : 1,
	    itemsCustom : false,
	    itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	    singleItem : false,
	    itemsScaleUp : false,
	 
	    //Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,

	    afterAction : afterAction,
	 
	});

	$(".weather-details").owlCarousel({
 
	    // Most important owl features
	    items : 1,
	    itemsCustom : false,
	    itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	    singleItem : true,
	    itemsScaleUp : false,
	 
	    //Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	 
	});

	var owl = $(".owl-carousel").data('owlCarousel');

	var $slides = $('article > .owl-controls .owl-pagination .owl-page');
	var $current = $('article > .owl-controls .owl-pagination').find('.owl-page.active');
	var index = $slides.index($current);

	if(index == 0) {
		$('nav .remove').hide();
	}

	function afterAction() {
		var $slides = $('article > .owl-controls .owl-pagination .owl-page');
		var numSlides = $slides.length;
		console.log(numSlides-1);
		console.log(this.owl.currentItem);

		if( this.owl.currentItem == numSlides - 1) {
			$('nav .remove').hide();
		} else if( this.owl.currentItem != 0 ){
			$('nav .remove').show();
		} else {
			$('nav .remove').hide();
		}
	}

	var x = $('article > .owl-controls .owl-pagination .owl-page').length;

	if( x <= 2 ) {
		$('nav .remove').hide();
	}

	$('nav .add').on('click', function(){
		var i = $('article > .owl-controls .owl-pagination .owl-page').length;
		owl.jumpTo(i-1);
	});

	$('nav .remove').on('click', function(){
		var $slides = $('article > .owl-controls .owl-pagination .owl-page');
		var $current = $('article > .owl-controls .owl-pagination').find('.owl-page.active');
		var index = $slides.index($current);
		owl.removeItem(index);
		owl.jumpTo(index-1);

		var i = $('article > .owl-controls .owl-pagination .owl-page').length;

		if( i <= 2 ) {
			$('nav .remove').hide();
		}
	});

	$('.new-location .button').on('click', function(){
		var i = $('article > .owl-controls .owl-pagination .owl-page').length;
		var content = "<div class=\"item dodgerBlue\"><h1>"+i+"</h1></div>";
    	owl.addItem(content, i-1);
    	owl.jumpTo(i-1);

    	var i = $('article > .owl-controls .owl-pagination .owl-page').length;
    	if( i > 2 ) {
			$('nav .remove').show();
		}
	});
});