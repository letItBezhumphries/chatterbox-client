var FormView = {

  $form: $('form'),
  // $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //create a variable to store a message
    var message = {
      username: App.escape(App.username),
      text: App.escape($('#message').val()),
      roomname: App.escape($('#rooms select').val())
    };
    // send a post request to the server with the message object
    Parse.create(message);
    // fetch the data from the server to post on the page.
    App.fetch();

    //need to clear the input field after posting to the server
    // App.$message.val('');
    $('form #message').val('');

    console.log('click!');
  },

  setStatus: function(active) {
    //line 20 finds the input element with a attr value of 'disabled' and sets it's status to active
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};