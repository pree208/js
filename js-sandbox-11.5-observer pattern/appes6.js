//observer pattern//allows us to subscribe and unsubscribe certain events or functionality

class EventObserver {
  constructor() {
    this.observer = [];
  }
  subscribe(fn) {
    this.observer.push(fn);
    console.log(`you are now subscribed to ${fn.name} `)
  }
  unsubscribe(fn) {
    //filter-filter out the list whatever matches the callback function.if there is no match the callback stays on the list.the filter returns the new list and reassigns the list of observers.
    this.observer = this.observer.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`you are unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observer.forEach(function (item) {
      item.call();
    });
  }
}



const click = new EventObserver();

//Event listeners

document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});



document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});



//click handler
const getCurMilliseconds = function () {
  console.log(`current milliseconds:${new Date().getMilliseconds()}`);
}

const getCurSeconds = function () {
  console.log(`current seconds:${new Date().getSeconds()}`)
}