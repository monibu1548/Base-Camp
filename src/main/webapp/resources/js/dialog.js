$(document).ready(function() {

	$("#write-dialog").dialog({
		autoOpen:false,
        modal:false,
        resizable:false,
	});

	$("#del-dialog").dialog({
		autoOpen:false,
        modal:true,
        resizable:false
	});

	$("#mod-dialog").dialog({
		autoOpen:false,
        modal:true,
        resizable:false
	});

	$("#del-submit").on("click", function() {
		var id = $("#del-dialog").data('id');
		var pw = $("#del-pw").val();
		var json = {};
		json['_method'] = "DELETE";
		json['id'] = id;
		json['pw'] = pw;
		delWriting(json);
		$("#del-dialog").dialog("close");
	});

	$("#mod-submit").on("click", function() {
		var id = $("#mod-dialog").data('id');
		var pw = $("#mod-pw").val();
		var text = $('#mod-text').val();
		var json = {};

		if(pw === '' | text===''){
			alert("빈칸없이 내용을 채워주세요");
		} else {
			json['_method'] = "PUT";
			json['id'] = id;
			json['text'] = text;
			json['pw'] = pw;
			modWriting(json);
		}

		$("#mod-dialog").dialog("close");
	});

	$("#btn-write").on("click", function() {
		$("#write-dialog").dialog("open");
	});

	$("#write-submit").click(function(e) {
		var emailWrt = $("#dlg_email").val();
		var pwWrt = $("#dlg_password").val();
		var textWrt = $("#dlg_text").val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (emailWrt === '' || pwWrt === '' || textWrt === '') {
			alert("빈칸없이 내용을 채워주세요");
			e.preventDefault();
		} else if (!(emailWrt).match(emailReg)) {
			alert("이메일 형식이 올바르지 않습니다");
			e.preventDefault();
		} else {
			var jsonData = {email:emailWrt, pw:pwWrt, text:textWrt};
			addWriting(jsonData);
			var dateTime = getTimeStamp();
			jsonData['reg_date'] = dateTime;
			jsonData['mod_date'] = dateTime;
			addWrite(jsonData);
			$("#dlg_email").val("");
			$("#dlg_password").val("");
			$("#dlg_text").val("");
			$("#write-dialog").dialog("close");
		}
	});

	$("#write-cancel").on("click", function() {
		$("#dlg_email").val("");
		$("#dlg_password").val("");
		$("#dlg_text").val("");
		$("#write-dialog").dialog("close");
	});

	$( window ).scroll( function() {
		$("#write-dialog").dialog("close");
	});

});