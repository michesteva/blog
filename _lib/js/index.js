blog.Views.Index = Backbone.View.extend({
  el: 'body',

  events: {
    'click': '_closeDialogs'
  },

  initialize: function() {
    this.$content = this.$('.post-inner');

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
