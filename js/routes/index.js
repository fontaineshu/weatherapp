App.IndexRoute = Ember.Route.extend({
  	model: function() {
  		Em.Logger.debug('[App.IndexRoute:model]');
  		return new Ember.RSVP.Promise(function(resolve, reject) {
  			if(Modernizr.geolocation) {
				navigator.geolocation.getCurrentPosition(
					function(position) {
						resolve(App.Location.find(position.coords.latitude, position.coords.longitude));
					}, 
					function(error) {
						reject(error);
					});
			}	
			else {
				// fallback is to enter a specific area
			}
  		});
  	},

  	actions: {
  		error: function(error, transition) {
  			console.log('error', arguments);
	  		/*
	  		if(context.code) {
	  			if(error.code == 1) {
					// PERMISSION_DENIED
				}
				else if(error.code == 2) {
					// POSITION_UNAVAILABLE
				}
				else if(error.code == 3) {
					// TIMEOUT
				}
	  		}
	  		*/
  		}
  	},

  	redirect: function(context) {
  		Em.Logger.debug('[App.IndexRoute:redirect]', context, arguments);
	    this.transitionTo('location', context);
	},

  	setupController: function(controller, model) {
  		Em.Logger.debug('[App.IndexRoute:setupController]', controller, model);
  		this.controllerFor('location').set('model', model);
  	}
});