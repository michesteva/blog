blog.Views.Index = Backbone.View.extend({
  el: document.body,

  events: {
    'click': '_closeDialogs'
  },

  initialize: function() {
    this._initViews();
  },

  _closeDialogs: function() {
    this.tooltip.close();
  },

  _initViews: function() {
    this.tooltip = new blog.ui.Views.Tooltip();
    this.navbar = new blog.ui.Views.Navbar();
  }
});

$(function() {
  blog.index = new blog.Views.Index();
});
