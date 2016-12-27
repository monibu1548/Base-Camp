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

function addWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/add',
		data: jsonData,
		success: function(){
			console('save success');
		},
		dataType: 'json'
	});
}

function delWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/' + jsonData['id'],
		data: jsonData,
		success: function(){
			console('delete success');
		},
		dataType: 'json'
	});
}

function modWriting(jsonData){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/' + jsonData['id'],
		data: jsonData,
		success: function(){
			console('put success');
		},
		dataType: 'json'
	});
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
			var email = jsonArr[idx].email;
			var id = jsonArr[idx].id;
			var text = jsonArr[idx].text;
			var reg_date = jsonArr[idx].reg_date;
			var mod_date = jsonArr[idx].mod_date;

			doc += '<div class="writing-box" align="center">';
			doc += '<div class="name-tag">';
			doc += '<div class="email-box"><i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>' + email + '</div>';
			doc += '<div id="right-box">';
			doc += '<div class="modify-box">';
			doc += '<a role="button"><i class="fa fa-scissors" aria-hidden="true"></i></a>';
			doc += '</div>';
			doc += '<div class="delete-box">';
			doc += '<a role="button"><i class="fa fa-undo" aria-hidden="true"></i></a>';
			doc += '</div>';
			doc += '</div>';
			doc += '</div>';
			doc += '<div class="main-text">';
			doc += '<p>' + text + '</p>';
			doc += '</div>';
			doc += '<div class="date-box">';
			doc += '<div>';
			doc += '<p class="reg-date">' + '작성  ' + reg_date + '</p>';
			doc += '<p class="mod-date">' + '수정  ' + mod_date + '</p>';
			doc += '</div>';
			doc += '</div>';
			doc += '</div>';
		}
	}
	});
	return doc;
}