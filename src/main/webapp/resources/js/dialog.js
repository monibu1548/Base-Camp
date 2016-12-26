$(document).ready(function() {
	$(function() {
		$(".write-dialog").dialog({
			autoOpen: false
		});
		$("#btn-write").on("click", function() {
			$(".write-dialog").dialog("open");
		});
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
			$(".write-dialog").dialog("close");
		}
	});

});