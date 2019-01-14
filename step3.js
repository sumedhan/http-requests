var https = require('https');

function getAndPrintHTML (options) {

    
    //Calls the https library 
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
            console.log(content);
        });
    });
}

// Defines the options for the request
var requestOptions = {
    hostname: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);