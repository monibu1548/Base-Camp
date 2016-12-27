<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Visitor's Book</title>
  <meta charset="utf-8">
  <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
  <script   src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"   integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="   crossorigin="anonymous"></script>
  <script   src="${pageContext.request.contextPath}/resources/js/board.js"></script>
  <link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css" integrity="sha384-dNpIIXE8U05kAbPhy3G1cz+yZmTzA6CY8Vg/u2L9xRnHjJiAK76m2BIEaSEV+/aU" crossorigin="anonymous">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/stylesheets/style.css">
</head>
<body style="background-color:#F2F2F2; margin:0px; padding:0px">

<div class="top-menu">
	<div style="display:table-cell;vertical-align:middle; height:50px; font-size:30px">
		<i class="fa fa-address-book" style="margin-left:20px;" aria-hidden="true"></i> Visitor's Book
		<div style="float:right; margin-left:20px; font-size:15px; display:table-cell;vertical-align:middle; margin-top:7px; background-color:#FF90A8 ;padding:4px">
			<i class="fa fa-pencil" aria-hidden="true" style="margin-right:2px"></i>Write
		</div>
	</div>
</div>
  
<div class="container">

<script>
document.write(showList());
</script>

	<div class="writing-box" align="center">
		<div class="name-tag">
			<div class="email-box"><i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>email</div>
			<div id='right-box'>
				<div class="modify-box">
					<a role="button"><i class="fa fa-scissors" aria-hidden="true"></i></a>
				</div>
				<div class="delete-box">
					<a role="button"><i class="fa fa-undo" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
		<div class="main-text">
			<p>본문</p>
		</div>
		<div class="date-box">
			<div>
				<p class="reg-date">작성일</p>
				<p class="mod-date">수정일</p>
			</div>
		</div>
	</div>

</div>

</body>
</html>

