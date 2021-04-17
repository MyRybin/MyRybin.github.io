$(document).ready(function(){
	$.each($('.checkbox'), function(index,val){
		if ($(this).find('input').prop('checked') == true){
			$(this).addClass('active-form');
		}
	});
	$(document).on('click','.checkbox', function(event){
		if ($(this).hasClass('active-form')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active-form');
		
		return false;
	});
	
	$.each($('.radiobuttons__item'), function(index,val){
		if ($(this).find('input').prop('checked') == true){
			$(this).addClass('active-form');
		}
	});
	$(document).on('click','.radiobuttons__item', function(event){
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active-form');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked',false);
		$(this).toggleClass('active-form');
		$(this).find('input').prop('checked',true);
		return false;
	});
	
});