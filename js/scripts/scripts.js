$(document).ready(function() {


if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
   	$('p.ios').show();
}
	$('.changeloc').hide();
	$('#button').click(function(){
		var zip = $('input.zip').val();
		var cLoc = $('input.cloc').val();
		$('.enterzip').hide();
		$('#weather').show();
		
		$.simpleWeather({
			zipcode: zip,
			unit: 'f',
			location: cLoc,
			woeid: cLoc,
			success: function(weather) {
				html = '<h1>'+weather.city+', '+weather.region+'</h1>';
				html += '<p>'+'<span class="weather-'+weather.code+'" >'+'</span>'+'</p>';
				html += '<ul>'+'<li class="f-temp">'+weather.temp+'&deg;'+weather.units.temp+'</li>'+'<li class="c-temp cC">'+weather.tempAlt+'&deg;'+weather.units.tempAlt+'</li>';
				html += '<li>'+weather.currently+'</li></ul>';
				html += '<hr />';
				html += '<ul class="f-temp weatherforcast"><li>'+"Today"+'</li>'+'<li class="f-temp">'+"High "+weather.high+'&deg;F'+'</li>'+'<li class="f-temp">'+"Low "+weather.low+'&deg;F'+'</li></ul>';
				html += '<ul class="f-temp weatherforcast"><li>'+"Tomorrow"+'</li>'+'<li class="f-temp">'+"High "+weather.tomorrow.high+'&deg;F'+'</li>'+'<li class="f-temp">'+"Low "+weather.tomorrow.low+'&deg;F'+'</li></ul>';

				html += '<ul class="weatherforcast c-temp"><li>'+"Today"+'</li>'+'<li class="c-temp">'+"High "+weather.highAlt+'&deg;C'+'</li>'+'<li class="c-temp">'+"Low "+weather.lowAlt+'&deg;C'+'</li></ul>';
				html += '<ul class="weatherforcast c-temp"><li>'+"Tomorrow"+'</li>'+'<li class="c-temp">'+"High "+weather.tomorrow.highAlt+'&deg;C'+'</li>'+'<li class="c-temp">'+"Low "+weather.tomorrow.lowAlt+'&deg;C'+'</li></ul>';

				html += '<hr />';
				html += '<ul class="sun"><li>'+"Sunrise"+'</li>'+'<li>'+weather.sunrise+'</li>';
				html += '<li>'+"Sunset"+'</li>'+'<li>'+weather.sunset+'</li></ul>';
				html += '<hr />';
				
				$("#weather").html(html);
				$("#weather2").html(html);
			},
			
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
				}
		});
		$('.changeloc').show();
		$('.c-f').show();
		$('.c-deg').removeClass('current-deg');
		$('.f-deg').addClass('current-deg');
	});
	
	$('.changeloc').click(function(){
		$('#weather').hide();
		$('.enterzip').show();
		$('.changeloc').hide();
		$('.c-f').hide();
	});

	$('.c-deg').click(function(){
		$('.f-temp').hide();
		$('.f-deg').removeClass('current-deg');
		$(this).addClass('current-deg');
		$('.c-temp').show();
	});

	$('.f-deg').click(function(){
		$('.c-temp').hide();
		$('.c-deg').removeClass('current-deg');
		$(this).addClass('current-deg');
		$('.f-temp').show();
	});
	
});