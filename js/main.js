

	$('.hero').filter(':first').addClass('shown');

	// $('h1').text('Batman');

	$('button.next').on('click', function() {

		if ( $('.shown').is(':last-child') ) {
			$('.shown').removeClass('shown');
			$('.hero').filter(':first').addClass('shown');
		}

		else {
			$('.shown').removeClass('shown').next().addClass('shown');
			}

	});

		var caption = $('.shown').attr('title');

		$('.name').text(caption).show()


