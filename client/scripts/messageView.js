var MessageView = {

  render: _.template(`
      <div class="chat">
        <a class="username <%= friendStatus %>"> <%= username %> </a>
        <div class="message"> <%= text %> </div>
      </div>
    `)
};

