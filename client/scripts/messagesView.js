var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    // var $username = $(.username)
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
      // set the event handler to off and then on Click invoke the toggleStatus method
      var $username = $('.username');
      $username.off();
      $username.on('click', Friends.toggleStatus);
    }
  }

};