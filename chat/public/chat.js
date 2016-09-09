window.onload = function(){
	var maske = getByClass('sign_name')[0];
	var name = getByClass('input_name', maske)[0];
	var nameBtn = getByClass('input_btn', maske)[0];
	var chatBody = document.getElementById('chat_body');
	var context = document.getElementById('context');
	var sendBtn = document.getElementById('btn');
	var userNum = document.getElementById('usernum');

	var socket = io.connect();

	nameBtn.onclick = function(){
		if(name.value){
			maske.style.display = 'none';
			socket.emit('adduser', name.value);
		};
	};

	sendBtn.onclick = function(){
		if(context.value){
			socket.emit('speak', context.value);
			context.value = '';
		};
	};

	socket.on('exist', function(){
		maske.style.display = 'block';
		name.value = '此账号已存在';
	});

	socket.on('add new', function(data){
		news(data[0] + '  已加入房间');
		userNum.innerHTML = data[1];
	});


	socket.on('tell other', function(data){
		otherSpeak(data[0], data[1]);
		scrollToBottom(chatBody);
	});

	socket.on('my speak', function(data){
		mySpeak(data[0], data[1]);
		scrollToBottom(chatBody);
	});

	socket.on('user leave', function(data){
		news(data[0] + '已经离开了房间');
		userNum.innerHTML = data[1];
	});








	function news(context){
		var html = '<li class="broadcast">'+ context +'</li>';
		chatBody.appendChild(stringToElem(html));
	};

	function mySpeak(content, name){
		var html = '<li class="self"><div class="self_talk">' + content + '</div><div class="self_name">' + name + '</div></li>'
		chatBody.appendChild(stringToElem(html));
	};

	function otherSpeak(content, name){
		var html = '<li class="other"><div class="other_name">' + name + '</div><div class="other_talk">' + content + '</div></li>';
		chatBody.appendChild(stringToElem(html));
	}

	function getByClass(classname, obj){
		var dom = obj?obj:document;
		var elementAll = dom.getElementsByTagName('*');
		var classElemts = [];

		for(var i = 0; i < elementAll.length; i++){
			var tagClasses = elementAll[i].className.split(' ');

			for(var j = 0; j < tagClasses.length; j++){
				if(tagClasses[j] == classname){
					classElemts.push(elementAll[i]);
					break;
				};
			};
		};
		return classElemts;
	};

	function stringToElem(string){
		var div = document.createElement('div');
		div.innerHTML = string;
		return div.childNodes[0];
	};

	function scrollToBottom(element){
		element.scrollTop = element.scrollHeight;
	}
};







