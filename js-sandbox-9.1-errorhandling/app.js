
const user = { email: 'preethiashok208@gmail.com' };

try {
  //producing a reference error
  //myFunction();
  //producing a type error
  //null.myFunction();
  //producing a syntax error
  //eval('Hello world');
  //producing a uri error
  //decodeURIComponent('%');

  if (!user.name) {
    // throw 'user has no name';
    throw new SyntaxError('user has no name');
  }

} catch (e) {
  console.log(e);
  // console.log(e.message);//gives the message
  // console.log(e.name);//gives type of error
  // console.log(e instanceof TypeError);//checks the type of error by true or false
} finally {
  console.log('finally runs regardless of result..');
}

console.log('program continues..');