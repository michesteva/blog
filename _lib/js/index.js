blog.Views.Index = Backbone.View.extend({
  el: document.body,

  events: {
    'click': '_closeDialogs'
  },

  initialize: function() {
    this.$content = this.$('.post-inner');

    this._initViews();
    this._initBindings();
  },

  _closeDialogs: function() {
    this.tooltip.close();
  },

  _buildImgWrappers: function() {
    this.$content.find("img").each(function(i, el) {
      return $(el).after('<div class="wrap" style="height: '+$(this).height()+'px; width: '+$(this).width()+'px"></div>');
    });
  },

  _initBindings: function() {
    var that = this;

    $(window)
      .on('load', function() {
        that._buildImgWrappers();
      });
  },

  _initViews: function() {
    this.tooltip = new blog.ui.Views.Tooltip();
    this.navbar = new blog.ui.Views.Navbar();
  }
});

$(function() {
  blog.index = new blog.Views.Index();
});
