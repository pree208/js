const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' }
];

//synchronous

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);//since js is single thread,it doesnt wait for  the completion of create post since we set 2s.
// }


// function getPost() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;

//   }, 1000);
// }



// createPost({ title: 'post three', body: 'this is post three' });

// getPost();




//ASYNCHRONOUS //CALLBACK FUNCTION

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();//calls the getPost function before the end of createPost
  }, 2000);
}


function getPost() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;

  }, 1000);
}

createPost({ title: 'post three', body: 'this is post three' }, getPost);