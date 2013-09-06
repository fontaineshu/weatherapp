App.LocationRoute = Ember.Route.extend({

	activate: function() {
        $(document).attr('title', 'Weather - Details');
    },

	model: function(params) {
	    Em.Logger.debug('[App.LocationRoute:model]', arguments);
	    return App.Location.find(params.lat_long);
	},

	setupController: function(controller, model) {
		Em.Logger.debug('[App.LocationRoute:setupController]', arguments);
	    controller.set('model', model);
	}
});