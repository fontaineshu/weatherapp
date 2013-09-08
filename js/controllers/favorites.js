App.FavoritesController = Ember.ArrayController.extend({

	addFavorite: function(loc) {
		this.get('model').pushObject({name: 'Test' + loc.get('id'), id: loc.get('id')});
	},

	removeFavorite: function(loc) {
		var fav = this.get('model').findBy('id', loc.get('id'));
		this.get('model').removeObject(fav);
	}
});