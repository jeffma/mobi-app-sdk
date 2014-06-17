(function() {
  App.Router.map(function() {
    this.route('/');
    this.route("about", {
      path: "/about"
    });
    return this.resource('posts', {
      path: '/posts'
    }, function() {
      return this.route('new');
    });
  });

}).call(this);
