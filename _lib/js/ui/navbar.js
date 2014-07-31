blog.ui.Models.Navbar = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

blog.ui.Views.Navbar = Backbone.View.extend({
  el: '.offcanvas-inner',

  events: {
    'click .navbar-button': '_toggle'
  },

  initialize: function() {
    this.model = new blog.ui.Models.Navbar();

    this.model.on("change:hidden", this._toggleNav, this);
  },

  _toggle: function(e) {
    e.preventDefault();

    this.model.set('hidden', !this.model.get('hidden'));
  },

  _toggleNav: function() {
    if (this.model.get('hidden')) {
      this.$el.removeClass('active');
    } else {
      this.$el.addClass('active');
    }
  }
});
