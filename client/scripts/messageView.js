var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%= username %> </div>
        <div class="message"> <%= text %> </div>
      </div>
    `)
};


//
//
/*
render: function(message) { 
  
  var renderedMessage = _.template(`
     <div class="chat">
       <div class="username">
       ${ message.username }
       </div>
       <div> ${message.text} </div>
     </div>
  `);
  
  return renderedMessage;
}
*/