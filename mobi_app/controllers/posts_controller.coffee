App.PostsController = Ember.ArrayController.extend
  content: null

App.PostsIndexController = Ember.Controller.extend
  needs: 'posts'
  posts: Ember.computed.alias('controllers.posts')

