var b = require('binaryjs').BinaryServer;
var f = require('fs');
var v = b({port:10000});
v.on('connection',function(c){
	var l = f.createReadStream(__dirname+'/streamMe.jpg');
	var s = c.createStream();
	l.pipe(s);
});
