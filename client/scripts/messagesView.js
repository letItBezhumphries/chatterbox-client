var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
    }
  
    // messages.forEach(message => {
    //   this.$chats.append(MessageView.render(message));
    // });
    // for (var i = 0; i < App.messages.length; i++ ) {
    //   this.$chats.append(`<div class="chat">
    //   <div class="username"> ${App.messages[i].username} </div>
    //   <div> ${App.messages[i].text} </div>
    // </div>`);
    // }

  }

};