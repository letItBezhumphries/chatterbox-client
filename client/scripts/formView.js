var FormView = {

  $form: $('form'),
  // $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // var message = {
    //   username: App.username,
    //   text: $('#message').val(),
    //   roomname: App.roomname || 'main'
    // };  
    
    //create a variable to store a message
    console.log('click!');
    
    // Parse.create(message);
    //need to clear the input field after posting to the server
    // App.$message.val('');
  },

  setStatus: function(active) {
    //line 20 finds the input element with a attr value of 'disabled' and sets it's status to active
    var status = active ? 'true' : null;    
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};