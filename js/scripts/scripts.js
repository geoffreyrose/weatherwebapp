function weatherUnit() {
	if($('[name="weather-unit"]').is(':checked')) {
		$('.celsius').hide();
	 	$('.fahrenheit').show();
	} else {
		$('.fahrenheit').hide();
		$('.celsius').show();
		$('.current-weather .celsius').css({'display': 'inline-block'});
	}
}

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

function loadWeather(zip,location, woeid) {
	$('.select-location').hide();
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
				var currentWeather = '<h2 class="current-weather">'+weather.currently+'<span class="fahrenheit"> '+weather.temp+'&deg;F</span><span class="celsius"> '+weather.alt.temp+'&deg;C</span></h2>';
				var forcast = '<section class="forcast fahrenheit"><h3>Today</h3><ul class="weatherforcast"><li>High '+weather.forecast[0].high+'&deg;F</li><li>Low '+weather.forecast[0].low+'&deg;F</li></ul><h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+weather.forecast[1].high+'&deg;F</li><li>Low '+weather.forecast[1].low+'&deg;F</li></ul></section><section class="forcast celsius"><h3>Today</h3><ul class="weatherforcast"><li>High '+weather.forecast[0].alt.high+'&deg;C</li><li>Low '+weather.forecast[0].alt.low+'&deg;C</li></ul><h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+weather.forecast[1].alt.high+'&deg;C</li><li>Low '+weather.forecast[1].alt.low+'&deg;C</li></ul></section>';

				//sunrise
				var sunrise = weather.sunrise;
				var start_pos = sunrise.indexOf(':') + 1;
				var end_pos = sunrise.indexOf(' ',start_pos);
				var text_to_get = sunrise.substring(start_pos,end_pos);
				var sunriseLength = text_to_get;

				if(sunriseLength.length <= 1) {
					sunrise = sunrise.slice(0,2) + '0' + sunrise.slice(2);
				}

				var sunset = weather.sunset;
				start_pos = sunset.indexOf(':') + 1;
				end_pos = sunset.indexOf(' ',start_pos);
				text_to_get = sunset.substring(start_pos,end_pos);
				var sunsetLength = text_to_get;

				if(sunsetLength.length <= 1) {
					sunset = sunset.slice(0,2) + '0' + sunset.slice(2);
				}

				var sunInfo = '<section class="sunrise"><ul><li><h3>Sunrise</h3></li><li class="time">'+sunrise+'</li></ul><ul><li><h3>Sunset</h3></li><li class="time">'+sunset+'</li></ul></section>';
				var fiveday = '<ul>';

				for(var i = 0;i <= 4;i++){fiveday += '<li><span class="weekday">'+weather.forecast[i].day+'</span><span class="weather-icon weather-'+weather.forecast[i].code+'"></span><span><span class="fahrenheit">'+weather.forecast[i].high+'&deg;F</span>'+'<span class="celsius">'+weather.forecast[i].alt.high+'&deg;C</span>'+'</span><span><span class="fahrenheit">'+weather.forecast[i].low+'&deg;F</span>'+'<span class="celsius">'+weather.forecast[i].alt.low+'&deg;C</span>'+'</span></li>';}
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

function getGeo(){
	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather('',position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
	});
}

$(document).ready(function() {
	var zip = urlParams.zip;
	var location = urlParams.city;

	if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
	   	$('p.ios').show();
	}
	if ("geolocation" in navigator) {
		$('.current-location').show();

	} else {
		$('.current-location').hide();
	}


	$('.current-location').on('click', function() {
		getGeo();
	});

	if( zip || location ) {
		$('.select-location').hide();
		$('.weather, .weather-controls').show();
		loadWeather(zip,location,'');
	} else  {
		getGeo();
	}

	$('.weather-controls .change').on('click', function(){
		$('.select-location').show();
		$('.weather, .weather-controls').hide();
	});


	weatherUnit();
	$('[name="weather-unit"]').on('change', function(){
		weatherUnit();
	});


	$("#owl-example").owlCarousel({
 
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
	 
	});

});