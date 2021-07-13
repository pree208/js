//singleton pattern//can return only one instance of object at a time

const singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Brad' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);//true