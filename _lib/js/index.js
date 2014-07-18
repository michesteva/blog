blog.Views.Index = Backbone.View.extend({
  el: document.body,

  initialize: function() {
    this.$offcanvas = this.$('.offcanvas-inner');

    this._initViews();
  },

  _initViews: function() {
    this.navbar = new blog.ui.Views.Navbar({
      $offcanvas: this.$offcanvas
    });
  }
});

$(function() {
  blog.index = new blog.Views.Index();
});
