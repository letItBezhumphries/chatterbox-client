var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
    this.$select.on('change', RoomsView.render);
  },

  // handleRoomChange: function(roomname) {
  //need to distinguish if we need to create new room or go to an existing one

  //create a new room option on our scrolldown menu which will call addRoom method

  //create a variable to store the html select index property that correlates to the dropdown select option a user selects

  //check if the selected index is the new Room option
  //invoke addRoom()
  //otherwise its an existing room
  //in changing to new room need to clear $chats
  //and filter through messages in cache and re-render page to show only those most recent messages from that roomname
  // },

  render: function() {
    //when we run the render function we want to get the value from the $select dropdown
    App.room = RoomsView.$select.val();
    App.fetch();
  },

  renderRoom: function(roomname) {
    if (roomname && !App.rooms[roomname]) {
      App.rooms[roomname] = roomname;
      this.$select.append(`<option> ${roomname} </option>`);
      //   var room = _.template(`
      //   <option> <%- roomname %> </option>`);
      // this.$select.append(room(roomname));
    }
  }
};



// renderRoomList: function(roomname) {
//   if (roomname && !App.rooms[roomname]) {
//     App.rooms[roomname] = roomname;

//     var room = _.template(`
//     <option> <%= roomname %> </option>`);

//     this.$select.append(room(roomname));
//   }
// }






