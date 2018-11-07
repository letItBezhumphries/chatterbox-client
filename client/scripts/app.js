var App = {

  $spinner: $('.spinner img'),
  
  username: 'anonymous',
  // messages: [], //
  friends: {}, //
  // maybe rooms object here {};
  rooms: { main: 'main' },

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //can use setInterval and polling to re-render updates 
    //setInterval(this.fetch.bind(this), 5000);
  },

  fetch: function(callback = ()=>{}) {
    // examine the response from the server request:
    // console.log(data);
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
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message);
      }
      callback();
    };
    Parse.readAll(findMessages);
  },

  //escaping method

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },  

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
