App.SearchController = Ember.ArrayController.extend({
	searchTermBinding: Ember.Binding.oneWay('App.ApplicationController.search')
});