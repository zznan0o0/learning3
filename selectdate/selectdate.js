var SelectDate = function(idname, type){
	this.input = document.getElementById(idname);
	this.type = type;
	this.init();
	this.year = this.date.year;
	this.month;
}

SelectDate.prototype = {
	constructor: SelectDate,
	init: function(){
		this.date = this.getNowDate();
		this.element = this.create();
		this.eachYear(this.date.year)
		this.eachMonth();

		this.insertAfter(this.input, this.element.dateBtn);
		this.input.parentNode.appendChild(this.element.dateDIv);
		this.btn_click(this.element.dateDIv);

		this.yearUl_click();
		this.monthUl_click();
	},

	yearUl_click: function(){
		var liArr = this.element.yearUl.getElementsByTagName('li');
		var that = this;

		for(var i = 0; i < liArr.length; i++){
			liArr[i].onclick = function(){
				for(var i = 0; i < liArr.length; i++){
					liArr[i].className = '';
				}

				this.className = 'on';
				that.year = this.innerHTML;
			}
		}

		if(liArr[0].innerHTML == '至今'){
			liArr[0].onclick = function(){
				for(var i = 0; i < liArr.length; i++){
					liArr[i].className = '';
				}

				this.className = 'on';
				that.element.dateDIv.style.display = 'none';
				that.input.value = '至今'
			}
		}
	},

	monthUl_click: function(){
		var liArr = this.element.monthUl.getElementsByTagName('li');
		var that = this;

		for(var i = 0; i < liArr.length; i++){
			liArr[i].onclick = function(){
				for(var i = 0; i < liArr.length; i++){
					liArr[i].className = '';
				}

				this.className = 'on';
				that.month = this.innerHTML;
				that.element.dateDIv.style.display = 'none';
				that.input.value = '' + that.year + that.month;
			}
		}
	},

	btn_click: function(dateDIv){
		this.element.dateBtn.onclick = function(){
			if(dateDIv.style.display == 'none'){
				dateDIv.style.display = 'block';
			}
			else{
				dateDIv.style.display = 'none';
			}
		}
	},

	create: function(){
		var dateBtn = document.createElement('div')
		var dateDIv = document.createElement('div');
		var yearUl = document.createElement('ul');
		var monthUl = document.createElement('ul');

		dateBtn.className = 'selectDate_button';
		dateDIv.className = 'dateDiv clearfix';
		yearUl.className = 'ul_year clearfix';
		monthUl.className = 'ul_month clearfix';

		dateDIv.style.display = 'none';
		dateDIv.appendChild(yearUl);
		dateDIv.appendChild(monthUl);

		return {
			dateBtn: dateBtn,
			dateDIv: dateDIv,
			yearUl: yearUl,
			monthUl: monthUl
		}
	},

	eachYear: function(nowYear){
		var length = nowYear - 1990
		console.log(this.type)
		var yearLi = this.type == 'end' ? '<li>至今</li>' : '';

		for(var i = 0; i <= length; i++){
			yearLi += '<li>' + (nowYear - i) + '年</li>'
		}
		
		this.element.yearUl.innerHTML = yearLi;
	},

	eachMonth: function(year){
		var length = year == this.date.year ? this.date.month : 12;
		var monthUl = '';

		for(var i = 0; i < length; i++){
			monthUl += '<li>' + (i+1) + '月</li>'
		}

		this.element.monthUl.innerHTML = monthUl;
	},

	insertAfter: function(element, element2){
		if(element.nextSibling){
			element.parentNode.insertBefore(element2, element.nextSibling)
		}
		else{
			element.parentNode.appendChild(element2);
		}
	},

	createHtml: function(html){
		var div = document.createElement('div');
		div.innerHTML = html;
		return div.getElementsByTagName('*')[0];
	},

	getNowDate: function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		return{
			year: year,
			month: month
		}
	}
}
