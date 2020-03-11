$(document).ready(function(){
	
	$("#sendLogin").on("click",function(){
		var log = $("#auth_login").val().trim();
		var pass = $("#auth_password").val().trim();
		
		/*Валадація ел.пошти*/
		if (log.length == 0) {
			$("#errorAuth").text("Введіть свою ел.пошту");
			return false;
		}
		if (log.match(/^[a-z0-9_][a-z0-9\._-]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+$/i) == null) {
			$("#errorAuth").text("Ви ввели некоректну ел.пошту");
			return false;
		}
		if (100 && log.length > 100) {
			$("#errorAuth").text("Ви ввели занадто довгий ел.пошту");
			return false;
		}
		
		/*Валадація пароля*/
		if (pass.length == 0) {
			$("#errorAuth").text("Введіть свій пароль");
			return false;
		}
		if (pass.length < 6) {
			$("#errorAuth").text("Ви ввели занадто малий пароль");
			return false;
		}
		if (pass.length > 100) {
			$("#errorAuth").text("Ви ввели занадто довгий пароль");
			return false;
		}
		if (pass.match(/^[a-z0-9_]+$/i) == null) {
			$("#errorAuth").text("Пароль містить неприпустимі символи: дозволяються тільки латинські символи, цифри і риска підкреслення");
			return false;
		}
		
		
		$("#errorAuth").text("");
		
		/*$.ajax({
			url: 'ajax/login.php',
			type: 'POST',
			cache: false,
			data: { 'log':log, 'pass':pass },
			dataType: 'html',
			beforeSend: function() {*/ /*коли виповняєця запрос*/
				/*$("#sendLogin").prop("disabled", true);
			},
			success: function(data) { /*результат*/
				/*alert(data);
				$("#sendLogin").prop("disabled", false);
			}
		});*/
		
	});
	
	$("#sendOnLogin").on("click",function(){
		var log = $("#no_login").val().trim();
		/*Валадація ел.пошти*/
		if (log.length == 0) {
			$("#errorOnLogin").text("Введіть свою ел.пошту");
			return false;
		}
		if (log.match(/^[a-z0-9_][a-z0-9\._-]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+$/i) == null) {
			$("#errorOnLogin").text("Ви ввели некоректну ел.пошту");
			return false;
		}
		if (100 && log.length > 100) {
			$("#errorOnLogin").text("Ви ввели занадто довгий ел.пошту");
			return false;
		}
		$("#errorOnLogin").text("");
		
	});
	
	$("#sendAuth").on("click",function(){
		var name = $("#signup_name").val().trim();
		var log = $("#signup_mail").val().trim();
		var pass = $("#signup_password").val().trim();
		
		/*Валадація ім'я*/
		if (name.length == 0) {
			$("#errorRegisterName").text("Введіть своє ім'я");
			return false;
		}
		if (isContainQuotes(name)) {
			$("#errorRegisterName").text("Ви ввели некоректне ім'я");
			return false;
		}
		if (100 && name.length > 100) {
			$("#errorRegisterName").text("Ви ввели занадто довге ім'я");
			return false;
		}
		$("#errorRegisterName").text("");
		/*Валадація ел.пошти*/
		if (log.length == 0) {
			$("#errorRegisterMail").text("Введіть свою ел.пошту");
			return false;
		}
		if (log.match(/^[a-z0-9_][a-z0-9\._-]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+$/i) == null) {
			$("#errorRegisterMail").text("Ви ввели некоректну ел.пошту");
			return false;
		}
		if (100 && log.length > 100) {
			$("#errorRegisterMail").text("Ви ввели занадто довгий ел.пошту");
			return false;
		}
		$("#errorRegisterMail").text("");
		/*Валадація пароля*/
		if (pass.length == 0) {
			$("#errorRegisterPass").text("Введіть свій пароль");
			return false;
		}
		if (pass.length < 6) {
			$("#errorRegisterPass").text("Ви ввели занадто малий пароль");
			return false;
		}
		if (pass.length > 100) {
			$("#errorRegisterPass").text("Ви ввели занадто довгий пароль");
			return false;
		}
		if (pass.match(/^[a-z0-9_]+$/i) == null) {
			$("#errorRegisterPass").text("Пароль містить неприпустимі символи: дозволяються тільки латинські символи, цифри і риска підкреслення");
			return false;
		}
		$("#errorRegisterPass").text("");
		
	});
	
	$("#show_password_login").on("click",function(){
		var x = document.getElementById("auth_password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
		document.getElementById('auth_password').focus();
	});
	$("#show_password").on("click",function(){
		var x = document.getElementById("signup_password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
		document.getElementById('signup_password').focus();
	});
	
	$('.header_burger,.header_link').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
	$('.openlogin').click(function(event){
		document.getElementById('show_modal').style.display='block';
		document.getElementById('auth_login').focus();
		$('body').toggleClass('lock_windows');
	});
	$('.openloginsignup').click(function(event){
		document.getElementById('show_modal_signup').style.display = 'none';
		document.getElementById('show_modal').style.display='block';
		document.getElementById('auth_login').focus();
	});
	$('.closelogin').click(function(event){
		document.getElementById('show_modal').style.display = 'none';
		$('body').toggleClass('lock_windows');
	});
	$('.opensignup').click(function(event){
		document.getElementById('show_modal').style.display = 'none';
		document.getElementById('show_modal_signup').style.display='block';
		document.getElementById('signup_name').focus();
	});
	$('.closesignup').click(function(event){
		document.getElementById('show_modal_signup').style.display = 'none';
		$('body').toggleClass('lock_windows');
	});
	$('.opennologin').click(function(event){
		document.getElementById('show_modal').style.display = 'none';
		document.getElementById('show_modal_no_login').style.display='block';
		document.getElementById('no_login').focus();
	});
	$('.closenologin').click(function(event){
		document.getElementById('show_modal_no_login').style.display = 'none';
		$('body').toggleClass('lock_windows');
	});
	$('.openonlogin').click(function(event){
		document.getElementById('show_modal').style.display='block';
		document.getElementById('show_modal_no_login').style.display = 'none';
		document.getElementById('auth_login').focus();
	});
	$('.opencart').click(function(event){
		document.getElementById('show_modal_cart').style.display='block';
		$('body').toggleClass('lock_windows');
	});
	$('.closecart').click(function(event){
		document.getElementById('show_modal_cart').style.display = 'none';
		$('body').toggleClass('lock_windows');
	});
	
});

function isContainQuotes(string) {
	var array = new Array("\"", "'", "`", "&quot;", "&apos;");
	for (var i = 0; i < array.length; i++) {
		if (string.indexOf(array[i]) !== -1) return true;
	}
	return false;
}


/*Користувач з логіном kostya.rybin@gmail.2 не зареєстрований*/