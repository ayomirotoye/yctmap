<!DOCTYPE html>
<!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Thu Feb 04 2021 07:26:56 GMT+0000 (Coordinated Universal Time)  -->
<html>
<%@include file="../header.jsp"%>
<body>
	<div class="maindivblock">
		<div class="div-block">
			<div class="loginmaindiv">
				<div class="circle1 circle2"></div>
				<div class="circle1"></div>
				<img
					src="${pageContext.request.contextPath}/assets/images/logoyct.png"
					loading="lazy" alt="" class="yabalogo">
				<h1 class="heading-2">
					<span class="toptext">YCT Map <br></span>Admin Portal
				</h1>
				<p class="paragraph">
					You can now track and manage all YCT map related activities on your
					<br>admin portal.
				</p>
			</div>
			<div class="logindiv">
				<div class="loginformblock w-form">
					<form id="email-form" name="email-form" data-name="Email Form"
						class="loginform">
						<h1 class="loginheading">Login</h1>
						<label for="Username" class="inputlabel">Username</label><input
							type="text" class="inputbox w-input" maxlength="256"
							name="Username" data-name="Username"
							placeholder="Enter your username" id="Username"><label
							for="Password" class="inputlabel">Password</label><input
							type="password" class="inputbox w-input mb-3" maxlength="256"
							name="Password" data-name="Password"
							placeholder="Enter your password" id="Password" required=""><input
							type="submit" value="LOGIN" data-wait="Please wait..."
							class="loginbutton w-button"> <a href="#"
							class="forgotpasswordlink">Forgot password?</a>
					</form>
					<div class="w-form-done">
						<div>Thank you! Your submission has been received!</div>
					</div>
					<div class="w-form-fail">
						<div>Oops! Something went wrong while submitting the form.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<%@include file="../scripts.jsp"%>
	<%@include file="../modals.jsp"%></body>
</html>