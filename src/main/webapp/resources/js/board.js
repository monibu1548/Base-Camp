$( document ).ready(function(){
	var jbOffset = $( '.top-menu' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > jbOffset.top ) {
			$( '.top-menu' ).addClass( 'menu-fixed' );
		} else {
			$( '.top-menu' ).removeClass( 'menu-fixed' );
		}
	});
});

function leadingZeros(n, digits) {
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
	for (i = 0; i < digits - n.length; i++)
		zero += '0';
	}
	return zero + n;
}

function getTimeStamp() {
	  var d = new Date();
	  var s =
	    leadingZeros(d.getFullYear(), 4) + '-' +
	    leadingZeros(d.getMonth() + 1, 2) + '-' +
	    leadingZeros(d.getDate(), 2) + ' ' +

	    leadingZeros(d.getHours(), 2) + ':' +
	    leadingZeros(d.getMinutes(), 2) + ':' +
	    leadingZeros(d.getSeconds(), 2);

	  return s;
	}

function addWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/add',
		data: jsonData,
		success: function(){
			alert("등록 성공");
		},
	});
}

function delWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/' + jsonData['id'],
		data: jsonData,
		async: false,
		success: function(data){
			$('#del-pw').val("");
			if(data === "OK") {
				var id = jsonData['id'];
				delWrite(id);
				alert("삭제 성공");
			} else {
				alert("패스워드가 틀립니다");
			}
			$('#del-pw').val("");
			$('#del-text').val("");
		},
	});
}

function modWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/' + jsonData['id'],
		data: jsonData,
		success: function(data){
			var text = jsonData['text'];
			$('#mod-pw').val("");
			$('#mod-text').val("");
			if(data === "OK") {
				var id = jsonData['id'];
				modWrite(id, text);
				alert("업데이트 성공");
			} else {
				alert("패스워드가 틀립니다");
			}
		},
	});
}

function addWrite(writing){
	$('.container').prepend(jsonToView(writing));
}

function delWrite(id){
	var write_id = '#writing-' + id;
	$(write_id).remove();
}

function modWrite(id, text){
	var write_id = '#text-' + id;
	var origin = $(write_id).text(text);
}

function jsonToView(json){
	var doc = "";

	var email = json.email;
	var id = json.id;
	var text = json.text;
	var reg_date = json.reg_date;
	var mod_date = json.mod_date;

	doc += '<div id="writing-' + id +'" class="writing-box" align="center">';
	doc += '<div class="name-tag">';
	doc += '<div class="email-box"><i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>' + email + '</div>';
	doc += '<div id="right-box">';
	doc += '<div class="modify-box">';
	doc += '<a id="del_' + id + '" role="button"><i class="fa fa-scissors" aria-hidden="true"></i></a>';
	doc += '<script>';
	doc += '$("#del_' + id + '").on("click", function(){';
	doc += '$("#del-dialog").data("id", '+ id +').dialog("open");';
	doc += '$("#del-pw").val("");';
	doc += '});';
	doc += '</script>';
	doc += '</div>';
	doc += '<div class="delete-box">';
	doc += '<a id="mod_' + id + '" role="button"><i class="fa fa-undo" aria-hidden="true"></i></a>';
	doc += '<script>';
	doc += '$("#mod_' + id + '").on("click", function(){';
	doc += '$("#mod-dialog").data("id", '+ id +').dialog("open");';
	doc += '$("#mod-pw").val("");';
	doc += '$("#mod-text").val("");';
	doc += '});';
	doc += '</script>';
	doc += '</div>';
	doc += '</div>';
	doc += '</div>';
	doc += '<div class="main-text">';
	doc += '<p id="text-'+id+'">' + text + '</p>';
	doc += '</div>';
	doc += '<div class="date-box">';
	doc += '<div>';
	doc += '<p class="reg-date">' + '작성  ' + reg_date + '</p>';
	doc += '<p class="mod-date">' + '수정  ' + mod_date + '</p>';
	doc += '</div>';
	doc += '</div>';
	doc += '</div>';
	console.log(doc);
	return doc;
}

function showList(){

	doc = "";

	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/list',
		dataType: 'json',
		async: false,
		success: function(jsonArr){

		for(var idx in jsonArr){
			var data = jsonArr[idx];

			doc += jsonToView(data);

		}
	}
	});
	return doc;
}