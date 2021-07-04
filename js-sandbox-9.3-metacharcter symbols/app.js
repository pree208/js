let re;
//literal characters
re = /hello/;
re = /hello/i;


//metacharacter symbol
re = /^h/i;  //must start with
re = /d$/i;  //must end with
re = /^hello$/i;//start and end with
re = /h.llo/i;//matches any one character
re = /h*llo/i;//matches any character 0 or more


re = /gre?a?y/i;//optional character
re = /gre?a?y\?/i;//escape character

//brackets [] -character sets

re = /gr[ae]y/i; //must be an a or e
re = /[GF]ray/i;//must be a G or F
re = /[^GF]ray/i;//match anything except G and F
re = /[A-Z]ray/i;//match any uppercase
re = /[a-z]ray/i;//match any lowercase
re = /[A-Za-z]ray/i;//match both uppercase and lowercase
re = /[0-9]ray/i;//match any digit
re = /[0-9][0-9]ray/i;//match two digit

//braces {} -quantifiers

re = /Hel{2}o/i;//must occur exactly m mount of times

re = /Hel{2,4}o/i;//can occur 2 to 4 times
re = /Hel{2,}o/i;//must be atleast {m} times

//parenthesis -grouping

re = /^([0-9]x){3}$/;

//shorthand character classes
re = /\w/;//word character -alphanumeric or_

re = /\w+/;//+ shows two or more characters

re = /\W/;//non-word character

re = /\d/;//match any digit
re = /\d+/;//match more digits
re = /\D/;//match any non digit
re = /\s/;//match whitespace character
re = /\S/;//does not match whitespace character

re = /hell\b/i;


//assertions
re = /x(?=y)/;//matches x only if followed by y
re = /x(?!y)/;//matches x only if not followed by y
//string to match
const str = 'kkjhgfdffxxhj ';



//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  }
  else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);