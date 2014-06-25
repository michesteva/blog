blog.Views.Post = Backbone.View.extend({
  el: document.body,

  events: {
    'click .btn-blue-tw': '_onClickTwitter',
    'click .btn-blue-fb': '_onClickFacebook'
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
  }
});

$(function() {
  window.home = new blog.Views.Post();
});
