var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('a').on('click', MessagesView.handleUsernameClick);
    $('a.username').on('mouseover', function() {
  
    });
  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
      Friends.friendList.push(message.username);
    }
  },

  handleUsernameClick: function(event) {
    //store the 'clicked' element's innerText
    var username = event.target.innerText;

    if (!Friends.friendList.includes(username)) {
      Friends.friendList.push(username);
      $(this).parent('div').addClass('.friend');
      //grab the parentElement and add the class friends-message to that message
    }
    Friends.toggleStatus(username);  
  }

};