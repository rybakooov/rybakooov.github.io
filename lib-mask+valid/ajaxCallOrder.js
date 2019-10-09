$(document).ready(function () {
	$(document).find('[type="tel"]').inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
	$(document).find('[placeholder="E-mail"]').inputmask({ 
		alias: "email",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
});

$(document).on('blur', 'input:not(input[type="tel"]):not(input[placeholder="E-mail"]), textarea', function(){
    if( $(this).val() != '' ){
        $(this).addClass('input-border');
    } else {
        $(this).removeClass('input-border');
    }
});

$(document).on('blur', 'input[type="tel"], input[placeholder="E-mail"]', function(){
    if ( $(this).inputmask("isComplete") ){
        $(this).addClass('input-border');
    } else {
        $(this).removeClass('input-border');
    }
});

$(document).on('click', 'button[type="submit"] ', function(e){
    let inputs = $(this).closest('form').find('input[data-required=""]'),
		temp = true;
	for (var i = 0; i < inputs.length; i++) {
		if ( !inputs.eq(i).hasClass('input-border') ) {
			inputs.eq(i).addClass('input-err');
			temp = false;
		} else {
			inputs.eq(i).removeClass('input-err');
		}
	}
	console.log(temp)
	if( temp == false ){
		return false;
	}
});
