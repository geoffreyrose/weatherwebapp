$(document).ready(function(){$(".changeloc").hide();$("#button").click(function(){var e=$("input").val();$(".enterzip").hide();$("#weather").show();$.simpleWeather({zipcode:e,unit:"f",success:function(e){html="<h1>"+e.city+", "+e.region+"</h1>";html+='<img src="'+e.image+'" />';html+="<h2>Current Temperature</h2>";html+="<ul><li>"+e.temp+"&deg;"+e.units.temp+"</li>";html+="<li>"+e.tempAlt+"&deg;C</li>";html+="<h3>Today's Forcast</h3>";html+='<li class="high">High '+e.high+"&deg;F"+"</li>"+'<li class="low">'+"Low "+e.low+"&deg;F"+"</li></ul>";$("#weather").html(html)},error:function(e){$("#weather").html("<p>"+e+"</p>")}});$(".changeloc").show()});$(".changeloc").click(function(){$("#weather").hide();$(".enterzip").show();$(".changeloc").hide()})});