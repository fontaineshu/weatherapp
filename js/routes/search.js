
// search/ with no arguments
App.SearchIndexRoute = Ember.Route.extend({ // have to specify the index route specifically, otherwise all /search urls redirect home
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

	    //this.controllerFor('search').set('query', params.query);
	    return App.Location.findLocations(params.query);
	},

	renderTemplate: function() {
		this.render('search');
	},

	setupController: function(controller, model) {
		Em.Logger.debug('[App.SearchQueryRoute:setupController]', arguments);
	    this.controllerFor('search').set('model', model);
	}
});