$(document).ready(function(){
	/*
		@Autor: Douglas Julião
		@GitHub: https://github.com/dougjuliao/
		E-mail: douglas_juliao16@hotmail.com
	*/
	$('.card').each((i, ele) => { // flip effect
		$(ele).on('click',function(){
			$(this).toggleClass('turned');
		});
	});
});