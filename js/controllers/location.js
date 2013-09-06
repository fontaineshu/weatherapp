App.LocationController = Ember.ObjectController.extend({

	// Make human readable
	sunrise: function() {
		var timestamp = this.get('model.sys.sunrise');
		var m = moment.unix(timestamp);
		return m.format('h:mm:ss A');
	}.property('model.sys.sunrise'),

	// Make human readable
	sunset: function() {
		var timestamp = this.get('model.sys.sunset');
		var m = moment.unix(timestamp);
		return m.format('h:mm:ss A');
	}.property('model.sys.sunset')
});