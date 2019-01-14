var https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
        hostname: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

https.get(requestOptions, function(response) {
    if(response.statusCode !== 200) {
    console.log('Error status code: ', response.statusCode);
    return 0;
    }

    response.setEncoding('utf-8');
    response.on('data', function (chunk) {
        console.log(chunk + '\n');
    });
});
}

getAndPrintHTMLChunks();