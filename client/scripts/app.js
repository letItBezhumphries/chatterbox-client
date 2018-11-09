var App = {

  $spinner: $('.spinner img'),
  
  username: 'anonymous',
  
  rooms: { main: 'main' },

  room: 'main',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    //use setInterval and polling to re-render updates 
    // setInterval(()=>{
    //   App.fetch(); 
    // }, 12000);


    // $($chats).on('click', App.handleUsernameClick);
    // if (message.friendStatus === 'friend') {
    //   $('a.username').on('mouseenter',function(){
    //     $(this).css('color', 'green')
    //   });
    //   $('a.username').on('mouseleave', function(){
    //     $(this).css({"color": 'black'})
    //   });
    // }
  },

  fetch: function(callback = ()=>{}) {
    // examine the response from the server request:
    
    var findMessages = function(data) {
      // refresh for new chat messages
      $('#chats').empty();
      var messageArr = data.results;
      // loop through the data
      for (var i = 0; i < messageArr.length; i++) {
        // assign message to data.results[i]
        var message = messageArr[i];
        // call MessagesView on the data.
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.roomname);

        Friends.toggleStatus(message.username);
      }
      callback();
    };
    //check if we are in the main/default room, if so fetch down messages from server
    if (App.room === 'main') {
      Parse.readAll(findMessages);
    } else {
      //if we are not in the default room get all the messages that are associated to the current roomname
      Parse.getRoom(App.room, findMessages);
    }
  },

  // handleUsernameClick: function(event) {
  //   //store the 'clicked' element's innerText
  //   var username = event.target.innerText;
  //   console.log('I have been clicked!!!', username);
  //   if (!Friends.friendList.includes(username)) {
  //     Friends.friendList.push(username);
  //     $(this).closest('div').addClass('.friend');
  //     //grab the parentElement and add the class friends-message to that message
  //   }
  //   Friends.toggleStatus(username);
  // },



  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },  

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
