
var Friends = {

  friendList: [],

  toggleStatus: function(username) {
    // if (this.friendList.contains(message.username)) {
    // check if message hasClass of friend
    if ($(this).hasClass('friend')) {
      Friends.friendList.splice(Friends.friendList.indexOf($(this).text()), 1);
    } else {
      Friends.friendList.push($(this).text());
    }

    // App.fetch();
    // using the splice method return the message of the friend
    // otherwise push the message into friendList
    // invoke App.fetch

  }

};

//need to allow a user to be able to click on a username and add that username to their friendsList

//need to allow user to keep track of any message sent by any particular friend or friends

//need an eventListener that listens for clicks on a username

//need a function that handles that event/ what happens when username is clicked?

//


//add css class to any message that was sent from a username
  //toggle this class for all that friend' messages across all rooms 

