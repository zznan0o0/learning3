const fs = require('fs');
const imgPath = __dirname + '/img';

let rename = (imgPath) => {
	fs.readdir(imgPath, (err, files) => {
		err && console.log(err);
		console.log('before=========================>');
		console.log(files);

		let reg = /([\w\W]+_)(\d+)(.[\w\W]+)/;
		let numArr = [];
		let nameBefore = files[0].match(reg)[1];
		let nameAfter = files[0].match(reg)[3];

		//序号获取
		files.forEach((item, index) => {
			numArr.push(item.match(reg)[2]);
		});

		//排序
		numArr.sort((a, b) => a - b);

		numArr.forEach((item, index) => {
			fs.renameSync(`${imgPath}/${nameBefore}${item}${nameAfter}`, `${imgPath}/glass_${index + 1}${nameAfter}`);
		});

		console.log('after=========================>');
		console.log(fs.readdirSync(imgPath));
	});
}

rename(imgPath);