var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  // messages: [], //
  //friends: {}, //

  rooms: { main: 'main' },
  // room property to show our current room (main room with all the messages displayed)
  room: 'main',

  room: 'main',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(()=>{
      App.fetch();}, 12000);
    //can use setInterval and polling to re-render updates
    //setInterval(this.fetch.bind(this), 5000);
  },

  fetch: function(callback = ()=>{}) {
    // examine the response from the server request:
    // refresh for new chat messages
    var findMessages = function(data) {
      $('#chats').empty();
      console.log(data);
      var messageArr = data.results;
      // loop through the data
      for (var i = 0; i < messageArr.length; i++) {
        // assign message to data.results[i]?
        var message = messageArr[i];
        // call MessagesView on the data.
        message.text = App.escape(message.text);
        message.username = App.escape(message.username);

        //need to change class for message that has username if that username is in friendsList

        if (Friends.friendList.includes(message.username)) {
          message.friendStatus = 'friend';
        } else {
          message.friendStatus = 'notfriend'
        }

        // if (message.friendStatus === 'notfriend') {
        //   $('a.username').on('click', function() {
        //     message.friendStatus = 'friend'
        //   });
        // }

        if (message.friendStatus === 'friend') {
          $('a.username').on('mouseenter',function(){
            $(this).css('color', 'green')
          });
          $('a.username').on('mouseleave', function(){
            $(this).css({"color": 'black'})
          });
        }
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.roomname);
        Friends.toggleStatus(message.username);

      }
      callback();
    };
    if (App.room === 'main') {
      Parse.readAll(findMessages);
    } else {
      Parse.getRoom(App.room, findMessages)
    }
  },

  //escaping method
  escape: function(string) {
    var output = string;
    if (output) {
      output = output.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/"/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
    }
    return output;
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
