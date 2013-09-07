App.Location = Ember.Object.extend({
	lat_long: 0 // functions as the url slug
});

App.Location.reopenClass({
	find: function() {
		var lat,long;
		if(typeof(arguments[0]) == 'string' && arguments[0].indexOf('_') > 0) {
			// passed in a lat_long
			var parts = arguments[0].split('_');
	    	lat = parts[0];
	    	long = parts[1];
		}
		else if(arguments[0] && arguments[1]) {
			// passed in lat, long
			lat = arguments[0];
			long = arguments[1];
		}
		else {
			// throw error
			Ember.assert('Must pass a valid lat, long value: Format "lat_long" or pass in lat and long separately.');
		}


		Em.Logger.debug('[App.Location:find]', lat, long);

		return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/weather', {
			lat: lat,
			lon: long,
			units: 'imperial'
		}).then(function(data) {
			data.lat_long = lat + '_' + long;
			return App.Location.create(data);
		});
	},

	findFavorites: function() {

        var locs = [
            {
                name: 'Test1'
            },
            {
                name: 'Test2'
            }
        ];

        return Em.A(locs);
	},

	findLocations: function(query) {
		Em.Logger.debug('[App.Location:findLocations]', query);

		return Ember.$.getJSON('http://api.openweathermap.org/data/2.5/find', {
			q: query,
			mode: 'json',
			units: 'imperial'
		}).then(function(data) {
			var locs = Em.A();
			var list = data.list;
			for(var i = 0; i < list.length; i++) {
				list[i].lat_long = list[i].coord.lat + '_' + list[i].coord.lon;
				locs.pushObject(App.Location.create(list[i]));
			}
			return locs;
		});
	}
});