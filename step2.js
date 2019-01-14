var https = require('https');

function getAndPrintHTML () {

    // Defines the options for the request
    var requestOptions = {
        hostname: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    //Calls the https library 
    https.get(requestOptions, function(response) {
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

getAndPrintHTML();