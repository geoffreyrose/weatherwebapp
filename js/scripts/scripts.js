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
			  html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			  html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			  html += '<li class="currently">'+weather.currently+'</li>';
			  //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
		  
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