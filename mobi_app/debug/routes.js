(function() {


}).call(this);

(function() {
  App.PostsRoute = Ember.Route.extend({
    model: function() {
      return [
        {
          title: "Tomster",
          url: "http://emberjs.com/images/about/ember-productivity-sm.png"
        }, {
          title: "Eiffel Tower",
          url: "http://emberjs.com/images/about/ember-structure-sm.png"
        }
      ];
    },
    setupController: function(controller, model) {
      return controller.set('content', model);
    }
  });

}).call(this);
