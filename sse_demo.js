var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').renderFile);

app.get('/event', function(req, res) {
    sendSSE(req, res);
});


function sendSSE(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(function() {
        var data = new Date().toLocaleTimeString();

        res.write("data: " + data + '\n\n');
    }, 1000);

}

app.get('/displayTime', function(req, res) {
    res.render('index.html');
});

app.listen(8090);
console.log('Listening on port 8090...');
