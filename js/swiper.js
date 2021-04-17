new Swiper('.image-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		
		/*type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className){
			return '<span class="' + className + '" style="color:#000">' + (index + 1) + '</span>';
		},*/
		
		type: 'fraction',
		renderFraction: function(currentClass, totalClass){
			return 'Фото <span class="' + currentClass + '"></span>' + ' із ' + '<span class="' + totalClass + '"></span>';
		},
		
		/*type: 'progressbar',*/
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable:true
	},
	grabCursor:true,
	
	/*Клавіатура*/
	keyboard: {
		enabled:true,
		onlyInViewport:true,
		pagaUpDown:true,
	},
	/*Мишка*/
	mousewheel: {
		sensitivity:1,
		//eventsTarget:".image-slider"
	},
	/*Автовисота*/
	autoHeight:true,
	
	/*Кількість слайдів для показу (2.5, auto) */
	slidesPerView:4,
	watchOverflow:true,
	
	/*Відступ міжду слайдами*/
	spaceBetween:30,
	
	
	
});