App.LocationDetailComponent = Ember.Component.extend({
	tagName: 'article',
	className: 'location-detail',

	isSaved: false,

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
	}.property('model.sys.sunset'),

	actions: {
		saveLocation: function() {
			if(this.get('isSaved')) {
				this.sendAction('saveLocation', {loc: this.get('location'), save: false});
				this.set('isSaved', false);
			}
			else {
				this.sendAction('saveLocation', {loc: this.get('location'), save: true});
				this.set('isSaved', true);
			}
		}
	}
});