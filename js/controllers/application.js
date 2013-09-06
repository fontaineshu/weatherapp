App.ApplicationController = Ember.Controller.extend({
	search: '',

	actions: {
		query: function() {
			var query = this.get('search');
			Em.Logger.debug('[App.ApplicationController:query]', query);
			this.transitionToRoute('search.query', {query: query});
		}
	}
});