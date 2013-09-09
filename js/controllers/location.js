App.LocationController = Ember.ObjectController.extend({
	needs: ['favorites'], // controller dependency

	isSaved: function() {
		var fav = this.get('controllers.favorites').get('model').findBy('id', this.get('model.id'));
		return fav ? true : false;
	}.property()
});