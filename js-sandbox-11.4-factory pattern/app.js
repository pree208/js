
//factory pattern -used when different objects share a lot of same properties and methods

function memberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new simpleMemberShip(name);
    } else if (type === 'standard') {
      member = new standardMemberShip(name);
    } else if (type === 'super') {
      member = new superMemberShip(name);
    }

    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}):${this.cost}`);
    }

    return member;
  }
}

const simpleMemberShip = function (name) {
  this.name = name;
  this.cost = '$5';
}

const standardMemberShip = function (name) {
  this.name = name;
  this.cost = '$15';
}

const superMemberShip = function (name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new memberFactory();

members.push(factory.createMember('pree', 'simple'));
members.push(factory.createMember('priya', 'super'));
members.push(factory.createMember('priyanka', 'simple'));
members.push(factory.createMember('pradeep', 'standard'));

//console.log(members);

members.forEach(function (member) {
  member.define();
});