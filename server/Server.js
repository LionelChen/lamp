Meteor.methods({
    tcpConnectionHandler: function (tcpResponse) {
        var responseArray = tcpResponse.split(',')
    },
    initializeNewLamp:function (LampId){
        //todo Initialize new lamp after constructor created a lamp
        
    }
});



Meteor.startup(function(){
    var net = require('net');
    var server = net.createServer(function(socket) {
        socket.write('Connected!\r\n');
        socket.on('data', function(data) {
            var response = data.toString().trim();
            console.log(response)
            socket.write('PA5\r\n');
            if (/disconnect/.test(response)) {
                socket.end('Disconnecting you now.\r\n');
            }
        });

        socket.on('end', function() {
            console.log('client disconnected');
        });
    });

    server.listen(100, '0.0.0.0');

});

