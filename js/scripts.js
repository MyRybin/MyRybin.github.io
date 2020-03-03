$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.openlogin').click(function(event){
		document.getElementById('show_modal').style.display='block';
		document.getElementById('auth_login').focus();
		$('body').toggleClass('lock_windows');
	});
	$('.closelogin').click(function(event){
		document.getElementById('show_modal').style.display = 'none';
		$('body').toggleClass('lock_windows');
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