$(document).ready(function(){"standalone"in navigator&&!navigator.standalone&&/iphone|ipod|ipad/gi.test(navigator.platform)&&/Safari/i.test(navigator.appVersion)&&$("p.ios").show();$(".changeloc").hide();$("#button").click(function(){var e=$("input").val();$(".enterzip").hide();$("#weather").show();$.simpleWeather({zipcode:e,unit:"f",success:function(e){html="<h1>"+e.city+", "+e.region+"</h1>";html+='<p><span class="weather-'+e.code+'" >'+"</span>"+"</p>";html+="<ul><li>"+e.temp+"&deg;"+e.units.temp+"</li>";html+="<li>"+e.currently+"</li>";html+='<li class="high">High '+e.high+"&deg;F"+"</li>"+'<li class="low">'+"Low "+e.low+"&deg;F"+"</li></ul>";$("#weather").html(html)},error:function(e){$("#weather").html("<p>"+e+"</p>")}});$(".changeloc").show()});$(".changeloc").click(function(){$("#weather").hide();$(".enterzip").show();$(".changeloc").hide()})});