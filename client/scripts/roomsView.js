var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', function() {
      
    });
  },

  addRoom: function() {

    // add prompt to add a roomname for POST request
    // We get the new roomname from the user after the prompt runs.
  },
   

  renderRoom: function(roomname) {
    if (roomname && !App.rooms[roomname]) {
      App.rooms[roomname] = roomname;
      this.$select.append(`<option> ${roomname} </option>`);
    } 
  }
  
};
