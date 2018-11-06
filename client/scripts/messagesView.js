var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {

  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
    }
  }
};