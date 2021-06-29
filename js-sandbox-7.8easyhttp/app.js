const http = new easyHttp;


//get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }

// });

//get single post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {

//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }

// });

//create data
const data = {
  title: 'Custom Post',
  body: 'This is custom post'
};


//create post//post method
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);//new data will be created with id 101 
//   }
// })

//update post //put method
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {//the data in the url with id 1 will be replaced by the new data we added.
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);//new data will be created with id 101 
//   }
// })

//delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }

});