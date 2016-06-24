$(document).ready(function(){

	$('button').on('click',function(){
		$('ul').append('<li> <div class="box"><input class="check-box" type="checkbox"></div><span>'+ $('.quanity').val()+'</span>'+$('.text').val()+'<div class="vader-container"><img src="http://icons.iconarchive.com/icons/everaldo/starwars/48/Darth-Vader-icon.png" alt=""></div></li>');
		$('.text').val('');
		$('.quanity').val('');
	});
	//console.log($(".check-box").is(':checked'));
	//console.log($('.check-box').prop('checked'));
	//console.log($('#checkbox:checked').length);

	// $('ul').on('click','.box',function(){
	// 	$(this).parent().css({
	// 		'text-decoration': 'line-through'
	// 	})
	// 		$(this).parent().css({
	// 		'text-decoration': 'line-through'
	// 	});
	// })
		$('ul').on('click','.box',function(){
			if($(this).children().prop('checked')){
				
				$(this).parent().css({
		 		'text-decoration': 'line-through',
		 		'color':'red'
		 		})
			}
			else{
				$(this).parent().css({
		 		'text-decoration': 'none',
		 		'color':'black'
		 		})			
			}
		});

	$('ul').on('click','.vader-container',function(){
		$(this).parent().remove();
	});

		$(document).keydown(function(event){
		
		if(event.which===13){
			$('ul').append('<li> <div class="box"><input class="check-box" type="checkbox"></div><span>'+ $('.quanity').val()+'</span>'+$('.text').val()+'<div class="vader-container"><img src="http://icons.iconarchive.com/icons/everaldo/starwars/48/Darth-Vader-icon.png" alt=""></div></li>');
			$('.text').val('');
			$('.quanity').val('');
		}
	})



});
