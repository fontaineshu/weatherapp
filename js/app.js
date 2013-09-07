App = Ember.Application.create({

	//LOG_TRANSITIONS: true,

	rootElement: '#weatherapp',

	ready: function() {
		// setup
		
	}
});

App.Router.reopen({
	location: 'hashbang' // uses #! instead of history api or #
});


App.Router.map(function() {
  	this.resource('location', { path: '/location/:lat_long' });

  	this.resource('search', { path: '/search' }, function() {
  		this.route('query', { path: '/:query' });
  	});
});











