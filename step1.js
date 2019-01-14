var https = require('https');

function getAndPrintHTMLChunks () {

    // Defines the options for the request
    var requestOptions = {
        hostname: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    //Calls the https library 
    https.get(requestOptions, function(response) {
        if(response.statusCode !== 200) {
            console.log('Error status code: ', response.statusCode);
            return 0;
        }

        response.setEncoding('utf-8');
        response.on('data', function (chunk) {
            //Logs each of the data chunks as they come in
            console.log(chunk + '\n');
        });
    });
}

getAndPrintHTMLChunks();