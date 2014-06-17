App.Router.map ->
  this.route '/'
  this.route "about", { path: "/about" }
  this.resource 'posts', { path: '/posts' }, ->
    this.route('new')
