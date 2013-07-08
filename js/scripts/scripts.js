$(document).ready(function() {
	$('.changeloc').hide();
	$('#button').click(function(){
		var zip = $('input').val();
		$('.enterzip').hide();
		$('#weather').show();
		
		$.simpleWeather({
			zipcode: zip,
			unit: 'f',
			success: function(weather) {
				html = '<h1>'+weather.city+', '+weather.region+'</h1>';
				html += '<img src="'+weather.image+'" />';
				html += '<h2>'+"Current Temperature"+'</h2>';
				html += '<ul><li>'+weather.temp+'&deg;'+weather.units.temp+'</li>';
				html += '<li>'+weather.tempAlt+'&deg;C</li>';
				html += '<h3>'+"Today's Forcast"+'</h3>';
				html += '<li class="high">'+"High "+weather.high+'&deg;F'+'</li>'+'<li class="low">'+"Low "+weather.low+'&deg;F'+'</li></ul>';
				//html += '<h3 class="currently">'+weather.currently+'</h3>';
				
				$("#weather").html(html);
			},
			
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
				}
		});
		$('.changeloc').show();
	});
	
	$('.changeloc').click(function(){
		$('#weather').hide();
		$('.enterzip').show();
		$('.changeloc').hide();
	});
	
});