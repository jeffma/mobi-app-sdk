(function() {
  App.IndexController = Ember.Controller.extend({
    title: "this is new title"
  });

}).call(this);

(function() {
  App.PostsController = Ember.ArrayController.extend({
    content: null
  });

  App.PostsIndexController = Ember.Controller.extend({
    needs: 'posts',
    posts: Ember.computed.alias('controllers.posts')
  });

}).call(this);
