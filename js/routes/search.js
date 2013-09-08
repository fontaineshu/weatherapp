
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
	    this.controllerFor('search').set('searchTerm', params.query);
	    return App.Location.findLocations(params.query);
	},

	renderTemplate: function() {
		this.render('search');
	},

	setupController: function(controller, locations) {
		Em.Logger.debug('[App.SearchQueryRoute:setupController]', arguments);
		console.log(this.get('path'));
	    this.controllerFor('search').set('model', locations);
	}
});