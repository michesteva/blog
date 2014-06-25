blog.Views.Home = Backbone.View.extend({
  el: document.body,

  events: {

  },

  initialize: function() {
    this._initViews();
  },

  _initViews: function() {

  }
});

$(function() {
  window.home = new blog.Views.Home();
});
