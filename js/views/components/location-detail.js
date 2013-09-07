App.LocationDetailComponent = Ember.Component.extend({
	// Make human readable
	sunrise: function() {
		var timestamp = this.get('model.sys.sunrise');
		if(timestamp) {
			var m = moment.unix(timestamp);
			return m.format('h:mm:ss A');
		}
		return;
	}.property('model.sys.sunrise'),

	// Make human readable
	sunset: function() {
		var timestamp = this.get('model.sys.sunset');
		if(timestamp) {
			var m = moment.unix(timestamp);
			return m.format('h:mm:ss A');
		}
		return;
	}.property('model.sys.sunset')
});