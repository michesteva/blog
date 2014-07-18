blog.ui.Models.Navbar = Backbone.Model.extend({
  defaults: {
    hidden: true
  }
});

blog.ui.Views.Navbar = Backbone.View.extend({
  el: '.navbar',

  events: {
    'click .navbar-button': '_toggle'
  },

  initialize: function(options) {
    this.options = options;

    this.model = new blog.ui.Models.Navbar();

    this.model.on("change:hidden", this._toggleNav, this);

    this.$offcanvas = this.options.$offcanvas;
  },

  _toggle: function(e) {
    e.preventDefault();

    this.model.set('hidden', !this.model.get('hidden'));
  },

  _toggleNav: function() {
    if (this.model.get('hidden')) {
      this.$offcanvas.removeClass('active');
    } else {
      this.$offcanvas.addClass('active');
    }
  }
});
