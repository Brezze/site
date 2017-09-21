$(document).ready(function(){
	
	$('.hamburger').click(function(){

		$(this).toggleClass('is-active');

		$('.overlay').toggleClass('opacify');

		$('.page-header__top').toggleClass('change-bgc');

		$('.main-nav').slideToggle(function(){
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });

		if($('.hamburger').hasClass('is-active')) {
			$('.hamburger-inner').addClass('hamburger-inner--white');
		}
			else{
				$('.hamburger-inner').removeClass('hamburger-inner--white');
			}
    });
	});
