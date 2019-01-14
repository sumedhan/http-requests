var getHTML = require('../https-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };
  
function reverseHTML (html) {
    console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, reverseHTML);