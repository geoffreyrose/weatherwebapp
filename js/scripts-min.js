var urlParams;(window.onpopstate=function(){var e,l=/\+/g,o=/([^&=]+)=?([^&]*)/g,t=function(e){return decodeURIComponent(e.replace(l," "))},i=window.location.search.substring(1);for(urlParams={};e=o.exec(i);)urlParams[t(e[1])]=t(e[2])})(),$(document).ready(function(){var e=urlParams.zip,l=urlParams.city;"standalone"in navigator&&!navigator.standalone&&/iphone|ipod|ipad/gi.test(navigator.platform)&&/Safari/i.test(navigator.appVersion)&&$("p.ios").show(),(e||l)&&($(".select-location").hide(),$(".weather, .weather-controls").show(),$.simpleWeather({zipcode:e,unit:"f",location:l,woeid:l,success:function(e){html="<h1>"+e.city+", "+e.region+"</h1>",html+='<p class="weather-icon"><span class="weather-'+e.code+'"></span></p>',html+='<h2 class="current-weather">'+e.currently+'<span class="fahrenheit"> '+e.temp+'&deg;F</span><span class="celsius"> '+e.tempAlt+"&deg;C</span></h2>",html+='<section class="forcast fahrenheit"><h3>Today</h3><ul class="weatherforcast"><li>High '+e.high+"&deg;F</li><li>Low "+e.low+"&deg;F</li></ul>",html+='<h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+e.tomorrow.high+"&deg;F</li><li>Low "+e.tomorrow.low+"&deg;F</li></ul></section>",html+='<section class="forcast celsius"><h3>Today</h3><ul class="weatherforcast"><li>High '+e.highAlt+"&deg;C</li><li>Low "+e.lowAlt+"&deg;C</li></ul>",html+='<h3>Tomorrow</h3><ul class="weatherforcast"><li>High '+e.tomorrow.highAlt+"&deg;C</li><li>Low "+e.tomorrow.lowAlt+"&deg;C</li></ul></section>",html+='<section class="sunrise"><ul><li><h3>Sunrise</h3></li><li class="time">'+e.sunrise+'</li></ul><ul><li><h3>Sunset</h3></li><li class="time">'+e.sunset+"</li></ul></section>",$(".weather").html(html)},error:function(e){$(".weather").html("<p>"+e+"</p>")}})),$(".weather-controls .change").on("click",function(){$(".select-location").show(),$(".weather, .weather-controls").hide()}),$(".f-deg").on("click",function(){$(".celsius").hide(),$(".fahrenheit").show()}),$(".c-deg").on("click",function(){$(".fahrenheit").hide(),$(".celsius").show()})});