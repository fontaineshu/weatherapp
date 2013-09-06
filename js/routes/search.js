// search/ with no arguments
App.SearchRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('/');
	}
});

// search/[some query]
App.SearchQueryRoute = Ember.Route.extend({
	
	activate: function() {
        $(document).attr('title', 'Weather - Search');
    },

	model: function(params) {
	    Em.Logger.debug('[App.SearchQueryRoute:model]', params);
	    return Em.A();
	},

	setupController: function(controller, model) {
		Em.Logger.debug('[App.SearchQueryRoute:setupController]', arguments);
	    this.controllerFor('search').set('model', model);
	}
});