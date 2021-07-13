//MEDIATOR PATTERN-interface between  mediator objects

const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {

  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}:${message}`);
  }

}

const Chatroom = function () {
  const users = {};//list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //single user message
        to.receive(message, from);
      } else {
        //mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }

  }
}


const brad = new User('Brad');
const jeff = new User('Jeff');
const san = new User('San');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(san);


brad.send('Hello jeff', jeff);
san.send('Hello Brad,you are the best dev ever', brad);
jeff.send('hello everyone');
