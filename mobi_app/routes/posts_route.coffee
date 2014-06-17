App.PostsRoute = Ember.Route.extend
  model: ->
    [
      {
        title: "Tomster"
        url: "http://emberjs.com/images/about/ember-productivity-sm.png"
      }
      {
        title: "Eiffel Tower"
        url: "http://emberjs.com/images/about/ember-structure-sm.png"
      }
    ]
  setupController: (controller, model)->
    controller.set 'model', model
