blog.Views.Post = Backbone.View.extend({
  el: 'body',

  events: {
    'click .btn-blue-tw': '_onClickTwitter',
    'click .btn-blue-fb': '_onClickFacebook',
    'click': '_closeDialogs'
  },

  initialize: function() {
    this.$content = this.$('.post-inner');

    this._initViews();
  },

  _onClickTwitter: function(e) {
    var href = $(e.target).closest('a').attr('href');

    window.open(href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    ga('send', 'event', 'button', 'click', 'twitter');

    return false;
  },

  _onClickFacebook: function(e) {
    var href = $(e.target).closest('a').attr('href');

    javascript:window.open(href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    ga('send', 'event', 'button', 'click', 'facebook');

    return false;
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
  blog.index = new blog.Views.Post();
});
