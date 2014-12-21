<!doctype html>
<html lang="en-us">
	<head>
	
		<meta charset="utf-8">
		
		<!-- Only use if site is Responive -->
		<meta name="viewport" content="initial-scale=1.0, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<title>Weather App</title>
		
		<!-- CSS -->
		<link rel="stylesheet" type="text/css" href="/assets/css/styles.css" />

		<link rel="stylesheet" href="/assets/owl-carousel/owl.carousel.css">
		<link rel="stylesheet" href="/assets/owl-carousel/owl.theme.css">
		 
		
		<!-- Fav Icon -->
		<link rel="apple-touch-icon" type="image/png" href="/assets/img/apple-touch-icon-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" type="image/png" href="/assets/img/apple-touch-icon-precomposed.png" />

		<link rel="icon" type="image/png" href="/assets/img/apple-touch-icon-precomposed.png" />
		
		<!-- Web Fonts -->
		<link href='/assets/css/webfonts.css' rel='stylesheet' type='text/css' />
		<link href='/assets/fonts/icomoon/style.css' rel='stylesheet' type='text/css' /><!--http://fonts.artill.de/collection/artill-weather-icons-->
		
		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="/assets/css/iestyles.css" />
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		
	</head>
	
	<body>
		<div class="container">
			<article class="weather-locations">
				<div>
					<section class="weather">
							<div class="location">
							</div>
							<div class="current-weather">
							</div>
						<div class="weather-details">	
							<div class="section1">	
								<div class="forcast">
								</div>
							</div>
							<div class="fiveday">
							</div>
						</div>
						<div class="sunInfo">
						</div>
					</section>
				</div>
				<div>
					<section class="weather">
							<div class="location">
							</div>
							<div class="current-weather">
							</div>
						<div class="weather-details">	
							<div class="section1">	
								<div class="forcast">
								</div>
							</div>
							<div class="fiveday">
							</div>
						</div>
						<div class="sunInfo">
						</div>
					</section>
				</div>
				<div>
					<section class="select-location">
						
						<p class="homeicon"><span class="weather-32"></span></p>
					
						<form class="new-location" method="get">
							<input pattern="\d*" name="zip" value="" class="zip" type="text" placeholder="Enter Zip Code">
							<section class="middle-break">
								<hr class="half1" /> <span>OR</span> <hr class="half2" />
							</section>
							<input name="city" class="cloc" value="" type="text" placeholder="Enter City, State">
							
							<!-- <button>Find My Temperature</button> -->
							<span class="button">Find My Temperature</span>
						</form>
					</section>
				</div>
			</article>

			<nav>
				<section>
					<span class="remove">Remove</span>
					<span class="add">Add</span>
				</section>
			</nav>
		</div>

		<!-- Your JS Files Below -->
		<script type="text/javascript" src="/assets/js/jquery.min.js"></script>
		<script type="text/javascript" src="/assets/owl-carousel/owl.carousel.min.js"></script>
		<script type="text/javascript" src="/assets/js/jquery.simpleWeather-min.js"></script>
		<script type="text/javascript" src="/assets/js/scripts-min.js"></script>
	</body>
	
</html>
