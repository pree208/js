document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //create an XHR object
  const xhr = new XMLHttpRequest();

  //OPEN
  xhr.open('GET', 'data.txt', true);//open method is a property here.first parameter is method,second parameter is file where we want to get data,third parameter is whether showing it is synchronous or asynchronous.

  //console.log('READYSTATE', xhr.readyState);

  //optional-used for spinners and loaders

  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      //console.log(this.responseText);//response text is the data included in the file.
      document.getElementById('output').innerHTML = `${this.responseText}`;
    }
  }


  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {
    console.log('READYSTATE', xhr.readyState);//if any error
  }

  xhr.send();

  //readyState values
  //0:request not initialized
  //1:server connection established
  //2:request received
  //3:processing request
  //4:request finished and response is ready


  // http statuses
  //200 'OK'
  //403 forbidden
  //404 "not found"
}