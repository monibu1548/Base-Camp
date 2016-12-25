$( document ).ready(function(){
    var jbOffset = $( '.top-menu' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.top-menu' ).addClass( 'menu-fixed' );
      }
      else {
        $( '.top-menu' ).removeClass( 'menu-fixed' );
      }
    });
});

function loadWritingsList(){
	$.ajax({
		url: 'http://127.0.0.1:8080/monibu1548/api/writings/list',
		dataType: 'json',
	    function(data){
	    }
	});
}

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