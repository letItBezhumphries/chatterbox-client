var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
    }
<<<<<<< HEAD

    // messages.forEach(message => {
    //   this.$chats.append(MessageView.render(message));
    // });
    // for (var i = 0; i < App.messages.length; i++ ) {
    //   this.$chats.append(`<div class="chat">
    //   <div class="username"> ${App.messages[i].username} </div>
    //   <div> ${App.messages[i].text} </div>
    // </div>`);
    // }0000
  },
=======
  }

>>>>>>> e6716170857310bc841450a1ae3b1808ac747018
};