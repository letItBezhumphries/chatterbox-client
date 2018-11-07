var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function() {
      
    });
  },

  addRoom: function() {

    // add prompt to add a roomname for POST request
  },
  // We get the new roomname from the user after the prompt runs. 
  // We 
  renderRoom: function(message) {
    console.log(message.roomname);
    console.log(message.roomname === undefined);
    console.log(App.rooms);
    if (message.roomname !== null || message.roomname !== undefined) {
      App.rooms[message.roomname] = message.roomname;
    } 
    // we need to check to see if App.rooms contains the roomname key if it does then we want to append it to the DOM.
    for (let room in App.rooms) {
      // App.rooms[room] === message.roomname;
      if (room === message.roomname) {
        this.$select.append(`<option> ${message.roomname} </option>`);
      }
    }
  }
// new method here for renderRoom
};
