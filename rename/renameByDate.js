const fs = require('fs');
const imgPath = __dirname + '/img';

class ReName{
	constructor() {
		this.imgPath = imgPath;
		this.fileArr = [];
	}

	readDir(){
		this.fileArr = fs.readdirSync(this.imgPath);
	}

	sortByDate(){
		this.fileArr.sort((file1, file2) => {
			return new Date(fs.statSync(`${this.imgPath}/${file1}`).birthtime) - new Date(fs.statSync(`${this.imgPath}/${file2}`).birthtime)
		})
	}

	reNameByDate(){
		this.readDir();
		console.log(this.fileArr)
		this.sortByDate();
		console.log(this.fileArr)
	}
}

const reName = new ReName();
reName.reNameByDate();