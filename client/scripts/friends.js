var Friends = {

  friendList: [],

  toggleStatus: function() {
    // if (this.friendList.contains(message.username)) {
    // check if message hasClass of friend
    if ($(this).hasClass('friend')) {
      Friends.friendList.splice(Friends.friendList.indexOf($(this).text()),1)
    } else {
      Friends.friendList.push($(this).text);
    }

    App.fetch();
    // using the splice method return the message of the friend
    // otherwise push the message into friendList
    // invoke App.fetch

  }

};

//distinguish messages sent by friends

// add css class to any message that was sent from a username that exists on the friends object

//toggle all the messages for a username/friend when a user clicks on a username/friend

//need an eventlistener that listens for click on username/friend

//need a handleUsernameClick method that sorts and redisplays the messages from that username/friend