$(document).ready(function(){
	$('.spoiler__title').click(function(event){
		if ($('.spoiler').hasClass('one')){
			$('.spoiler__title').not($(this)).removeClass('spoiler__active');
			$('.spoiler__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('spoiler__active').next().slideToggle(300);
	});
});