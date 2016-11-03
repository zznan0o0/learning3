var fs = require('fs');

var imgPath = __dirname + '/img';
var newName = 'balck2_';

function rename(newName){
	fs.readdir(imgPath, function(err, files){
		err && console.log(err);
		console.log(files)

		for(var i = 0; i < files.length; i++){
			fs.renameSync(imgPath + '/' + files[i], imgPath + '/' + newName + files[i]);
		}
		
		console.log('OK=========================>');
		console.log(fs.readdirSync(imgPath));
	})
}

rename(newName);