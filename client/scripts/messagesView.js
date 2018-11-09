var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {    
    MessagesView.$chats.on('click', '.username', Friends.toggleStatus);
  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
      // set the event handler to off and then on Click invoke the toggleStatus method
    }
  },

  // handleUsernameClick: function(event) {
  //   //store the 'clicked' element's innerText
  //   var username = event.target.innerText;
  //   console.log('I have been clicked!!!', username);
  //   if (!Friends.friendList[username]) {
  //     Friends.friendList[username] = true;
  //     $(this).addClass('friend').css({ 'text-decoration': 'none', 'color': 'green' });
  //     //grab the parentElement and add the class friends-message to that message
  //   } else {
  //     username.toggleClass('friend').text.css('color', 'black');
  //   } 
  // }
};