//module pattern
//basic structure

// (function () {
//   //declare private vars and functions


//   return {
//     //declare public var and functions
//   }
// })();

//STANDARD MODULE PATTERN

// const UICtrl = (function () {

//   let text = 'Preethi loves her gundu';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function () {
//       changeText();
//     }
//   }
// })();

// UICtrl.callChangeText();

//REVEALING MODULE PATTERN

const itemCtrl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log('item added');
  }

  function get(id) {
    return data.find(function (item) {
      return item.id === id;
    });
  }


  return {
    add: add,//directly reveals the method that are inside the module
    get: get
  }
})();

itemCtrl.add({ id: 1, name: 'Pree' });

console.log(itemCtrl.get(1));