var https = require('https');

function getHTML (options, callback) {

    https.get(options, function(response) {
        if(response.statusCode !== 200) {
            console.log('Error status code: ', response.statusCode);
            return 0;
        }
        
        let content = '';
        response.setEncoding('utf-8');
        response.on('data', function (chunk) {
            //Appends chunk to content
            content += chunk;
        });
        response.on('end', function() {
            callback(content);
        });
    });
  
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);