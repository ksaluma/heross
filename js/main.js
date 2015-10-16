

	$('.hero').filter(':first').addClass('shown');

	$('h1').text('Batman');

	$('button.next').on('click', function() {

			$('.shown').next().addClass('shown');
			$('.shown').filter(':first').removeClass('shown');
	});


