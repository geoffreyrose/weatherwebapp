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

$(document).ready(function() {
	var zip = urlParams.zip;
	var weatherLocation = urlParams.city;


	if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
	   	$('p.ios').show();
	}

	if( zip || weatherLocation ) {
		$('.select-location').hide();
		$('.weather, .weather-controls').show();


		$.simpleWeather({
			zipcode: zip,
			unit: 'f',
			location: weatherLocation,
			woeid: weatherLocation,
			success: function(weather) {
				html = '<h1>'+weather.city+', '+weather.region+'</h1>';
				html += '<p class="weather-icon"><span class="weather-'+weather.code+'"></span></p>';
				html += '<h2 class="current-weather">'+weather.currently+'<span class="fahrenheit"> '+weather.temp+'&deg;F</span><span class="celsius"> '+weather.tempAlt+'&deg;C</span></h2>';

				//Fahrenheit  
				html += '<section class="forcast fahrenheit"><h3>Today</h3><ul class="weatherforcast"><li>High '+weather.high+'&deg;F</li><li>Low '+weather.low+'&deg;F</li></ul>';
				html += '<h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+weather.tomorrow.high+'&deg;F</li><li>Low '+weather.tomorrow.low+'&deg;F</li></ul></section>';

				//Celsius    
				html += '<section class="forcast celsius"><h3>Today</h3><ul class="weatherforcast"><li>High '+weather.highAlt+'&deg;C</li><li>Low '+weather.lowAlt+'&deg;C</li></ul>';
				html += '<h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+weather.tomorrow.highAlt+'&deg;C</li><li>Low '+weather.tomorrow.lowAlt+'&deg;C</li></ul></section>';

				//sunrise
				html += '<section class="sunrise"><ul><li><h3>Sunrise</h3></li><li class="time">'+weather.sunrise+'</li></ul><ul><li><h3>Sunset</h3></li><li class="time">'+weather.sunset+'</li></ul></section>';
				
				$('.weather').html(html);
			},
			
			error: function(error) {
				$('.weather').html('<p>'+error+'</p>');
			}
		});
	}

	$('.weather-controls .change').on('click', function(){
		$('.select-location').show();
		$('.weather, .weather-controls').hide();
	});

	$('.f-deg').on('click', function(){
		$('.celsius').hide();
		$('.fahrenheit').show();
	});
	$('.c-deg').on('click', function(){
		$('.fahrenheit').hide();
		$('.celsius').show();
	});

	
});