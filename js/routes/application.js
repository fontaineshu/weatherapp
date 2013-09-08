App.ApplicationRoute = Ember.Route.extend({

    activate: function() {
        $(document).attr('title', 'Weather');
    },

    renderTemplate: function() {
        // Render default outlet   
        this.render();
        // render extra outlets
        this.render('sidebar', {		// template to render
            into: 'application', 		// the template to render to; important when using at root level
            outlet: 'sidebarnav',		// the name of the outlet in that template
            controller: 'favorites'		// the controller to use for the template
        });
    },

    actions: {
        saveLocation: function(params) {
            if(params.save) {
                this.controllerFor('favorites').addFavorite(params.loc);
            }
            else {
                this.controllerFor('favorites').removeFavorite(params.loc);
            }
        }
    },

    setupController: function() {
        Em.Logger.debug('[App.ApplicationRoute:setupController]');

        // Setup sidebar items
        this.controllerFor('favorites').set('model', App.Location.findFavorites());
    }
});