var GoogleMaps = {

	callback: null,

	init: function(callback) {

		// return if no element with id starting 'google-map-'
		if(!$('[id^="google-map-"]')) return;

		// we store the callback for later
		this.callback = callback;

		// create a script tag for google maps and append it to the body
		var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=GoogleMaps.initComplete'; // <--- this bit refers to the next function "initComplete"
        document.body.appendChild(script);

	},

	initComplete: function() {

		// once the script has loaded, it calls this function
		// we then call our callback we previously passed in and stored
		if (typeof this.callback === 'function') {
			this.callback();
		}

	},

	createMap: function(mapConfig, markerConfig) {

		var self = this,
			element,
			settings,
			options,
			map,
			markerImage,
			marker;

		var defaults = {
		    zoom: 15,
		    center: { lat: 52.291431, lng: -1.529921},
		    id: 'google-map',
		    // mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// extend defaults to config
		settings = $.extend(defaults, mapConfig);

		// fallback for unset property
		for (property in settings) {
		    if(settings[property] === null) {
		    	console.log('Please fill in ' + property);
		    }
		}

		// store the element for later
		element = document.getElementById(settings.id);

		// if the map element doesn't exist, return
		if(!element) return;

		// create the map object
	    map = new google.maps.Map(element, {
	        zoom: settings.zoom,
	        center: settings.center,
	        mapTypeId: settings.mapTypeId
	    });

	    // if we have passed in a marker config, then we'll create a marker too
	    if (typeof markerConfig !== 'undefined') {

		    markerImage = new google.maps.MarkerImage(markerConfig.image, markerConfig.size, markerConfig.origin, markerConfig.anchor);

		    marker = new google.maps.Marker({
		        position: settings.center,
		        map: map,
		        icon: markerImage
		    });

		}

		// finally, we return the map
		return map;

    }

};




$(function(){

	// we first initialise the maps script
	GoogleMaps.init(function() {

		// once it's done, it continues here
		// now we can create some maps, knowing that 'google' is defined

		// ** map 1 *******************************************************
		var config1 = {
			zoom: 15,
			center: { lat: 52.291431, lng: -1.529921},
			id: 'google-map-1',
			mapTypeId: google.maps.MapTypeId.ROADMAP
			// styles: styles
		};

		var marker1 = {
			image: 'marker.png',
		    size: new google.maps.Size(40, 57),
		    origin: new google.maps.Point(0, 0),
		    anchor: new google.maps.Point(20, 56)
		};

		var map1 = new GoogleMaps.createMap(config1, marker1);
		// ** end of map 1 ************************************************


		// ** map 2 *******************************************************
		var config2 = {
			zoom: 15,
			center: { lat: 51.5056100, lng: -0.0849140},
			id: 'google-map-2',
			mapTypeId: google.maps.MapTypeId.ROADMAP
			// styles: styles
		};

		var marker2 = {
			image: 'marker.png',
		    size: new google.maps.Size(40, 57),
		    origin: new google.maps.Point(0, 0),
		    anchor: new google.maps.Point(20, 56)
		};

		var map2 = new GoogleMaps.createMap(config2, marker2);
		// ** end of map 2 ************************************************

	});

});
